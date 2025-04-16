'use server';

import { z } from 'zod';

import { MESSAGES } from '../constants/messages';
import { DecryptedImage } from '../types/DecryptedImage';
import { searchPhotos } from './photoActions';

export type SearchActionState = { data?: DecryptedImage[] } & Errors;

type Errors = {
  validationErrors?: {
    password?: string[];
  };
  message?: string | null;
  apiError?: string | null;
};

const passwordSchema = z.object({
  password: z.string().trim().min(1, { message: MESSAGES.PASSWORD_REQUIRED }),
});

export const searchAction = async (
  _state: SearchActionState | null,
  formData: FormData
): Promise<SearchActionState> => {
  const validatePassword = passwordSchema.safeParse({
    password: formData.get('password'),
  });

  if (!validatePassword.success) {
    return {
      validationErrors: validatePassword.error.flatten().fieldErrors,
      message: validatePassword.error.issues[0].message,
    };
  }

  try {
    await new Promise((resolve) => setTimeout(resolve, 2000)); //意図的にしてる
    const response = await searchPhotos(validatePassword.data.password);
    return { data: response.data };
  } catch (error) {
    return {
      apiError: MESSAGES.UNKNOWN_ERROR,
    };
  }
};
