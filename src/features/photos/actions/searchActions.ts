'use server';

import { z } from 'zod';

import { MESSAGES } from '../constants/messages';
import { searchPhotos } from './photoActions';

const passwordSchema = z.string().trim().min(1, { message: MESSAGES.PASSWORD_REQUIRED });

export const searchAction = async (formData: FormData) => {
  const validatePassword = passwordSchema.safeParse(formData.get('password'));
  if (!validatePassword.success) {
    const errors = {
      errors: validatePassword.error.flatten().fieldErrors,
      message: validatePassword.error.issues[0].message,
    };
    return errors;
  }
  try {
    const response = await searchPhotos(validatePassword.data);
    return response;
  } catch (error) {
    return {
      errors: { password: [MESSAGES.SEARCH_ERROR] },
      message: error instanceof Error ? error.message : MESSAGES.UNKNOWN_ERROR,
    };
  }
};
