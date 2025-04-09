'use server';

import { env } from '@/env';

import { ResponseData } from '../types/ResponseData';

const API_BASE_URL = env.API_URL;

export const searchPhotos = async (searchPassword: string): Promise<ResponseData> => {
  const response = await fetch(`${API_BASE_URL}/photos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Search-Password': searchPassword,
    },
    cache: 'no-store',
  });

  if (!response.ok) throw new Error('Failed to fetch photos');

  return response.json();
};

export const createPhoto = async (formData: FormData): Promise<any> => {
  const response = await fetch(`${API_BASE_URL}/photos`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) throw new Error('Failed to create photo');

  return response.json();
};
