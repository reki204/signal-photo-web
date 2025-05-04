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

const uploadSchema = z.object({
  password: z.string().trim().min(1, { message: MESSAGES.PASSWORD_REQUIRED }),
  images: z
    .array(z.instanceof(File), { invalid_type_error: MESSAGES.IMAGE_REQUIRED })
    .nonempty({ message: MESSAGES.IMAGE_REQUIRED })
    .refine((files) => files.every((f) => f.size <= 5 * 1024 * 1024), {
      message: MESSAGES.IMAGE_TOO_LARGE,
    })
    .refine(
      (files) => files.every((f) => ['image/jpeg', 'image/png', 'image/gif'].includes(f.type)),
      { message: MESSAGES.INVALID_IMAGE_TYPE }
    ),
});

export const uploadAction = async (
  _state: UploadActionState | null,
  formData: FormData
): Promise<UploadActionState> => {
  const validateData = uploadSchema.safeParse({
    password: formData.get('password') as string,
    images: formData.getAll('images') as File[],
  });

  if (!validateData.success) {
    return {
      validationErrors: validateData.error.flatten().fieldErrors,
      message: validateData.error.issues[0].message,
    };
  }

  try {
    await uploadPhoto(validateData.data);
    return {
      success: true,
      message: MESSAGES.UPLOAD_SUCCESS,
    };
  } catch (error) {
    return {
      apiError: MESSAGES.UPLOAD_ERROR,
    };
  }
};
