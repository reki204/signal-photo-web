'use server';

import { z } from 'zod';

import { MESSAGES } from '../constants/messages';
import { createPhoto } from './photoActions';

export type UploadActionState = {
  success?: boolean;
  validationErrors?: {
    password?: string[];
    image?: string[];
  };
  message?: string | null;
  apiError?: string | null;
};

const uploadSchema = z.object({
  password: z.string().trim().min(1, { message: MESSAGES.PASSWORD_REQUIRED }),
  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, { message: MESSAGES.IMAGE_REQUIRED })
    .refine((file) => file.size <= 5 * 1024 * 1024, { message: MESSAGES.IMAGE_TOO_LARGE })
    .refine((file) => ['image/jpeg', 'image/png', 'image/gif'].includes(file.type), {
      message: MESSAGES.INVALID_IMAGE_TYPE,
    }),
});

export const uploadAction = async (
  _state: UploadActionState | null,
  formData: FormData
): Promise<UploadActionState> => {
  const validateData = uploadSchema.safeParse({
    password: formData.get('password') as string,
    image: formData.get('image') as File,
  });

  if (!validateData.success) {
    return {
      validationErrors: validateData.error.flatten().fieldErrors,
      message: validateData.error.issues[0].message,
    };
  }

  try {
    await createPhoto(formData);

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
