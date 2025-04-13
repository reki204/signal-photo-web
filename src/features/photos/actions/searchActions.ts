'use server';

import { z } from 'zod';

import { searchPhotos } from './photoActions';

const passwordSchema = z.string().trim().min(1, { message: '合言葉を正しく入力してください' });

export const searchAction = async (formData: FormData) => {
  const validatePassword = passwordSchema.safeParse(formData.get('password'));
  if (!validatePassword.success) {
    const errors = {
      errors: validatePassword.error.flatten().fieldErrors,
      message: validatePassword.error.issues[0].message,
    };
    return errors;
  }
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await searchPhotos(validatePassword.data);
  return response;
};
