'use server';

import { z } from 'zod';

import { MESSAGES } from '../constants/messages';
import { uploadPhoto } from './photoActions';

export type UploadActionState = {
  success?: boolean;
  validationErrors?: {
    password?: string[];
    images?: string[];
  };
  message?: string | null;
  apiError?: string | null;
};

const MAX_SIZE = 5 * 1024 * 1024;
const ALLOWED_MIME = ['image/jpeg', 'image/png', 'image/gif'];

const uploadSchema = z.object({
  password: z
    .string({ error: MESSAGES.PASSWORD_REQUIRED })
    .trim()
    .min(1, { error: MESSAGES.PASSWORD_REQUIRED }),

  images: z.preprocess(
    (v) => (Array.isArray(v) ? v.filter((x): x is File => x instanceof File && x.size > 0) : v),
    z
      .array(
        z
          .file({ error: MESSAGES.IMAGE_REQUIRED })
          .max(MAX_SIZE, { error: MESSAGES.IMAGE_TOO_LARGE })
          .mime(ALLOWED_MIME, { error: MESSAGES.INVALID_IMAGE_TYPE }),
        { error: MESSAGES.IMAGE_REQUIRED }
      )
      .min(1, { error: MESSAGES.IMAGE_REQUIRED })
  ),
});

export const uploadAction = async (
  _state: UploadActionState | null,
  formData: FormData
): Promise<UploadActionState> => {
  const validateData = uploadSchema.safeParse({
    password: (formData.get('password') ?? '').toString(),
    images: formData.getAll('images'),
  });

  if (!validateData.success) {
    const flattened = z.flattenError(validateData.error);
    return {
      validationErrors: flattened.fieldErrors,
      message: validateData.error.issues[0]?.message ?? null,
    };
  }

  try {
    await uploadPhoto(validateData.data);
    return { success: true, message: MESSAGES.UPLOAD_SUCCESS };
  } catch {
    return { apiError: MESSAGES.UPLOAD_ERROR };
  }
};
