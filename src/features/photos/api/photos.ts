import { DecryptedImage } from '../types/DecryptedImage';
import { Photo } from '../types/Photo';

const API_BASE_URL = 'http://localhost:8080/api/v1';

export const searchPhotos = async (searchPassword: string): Promise<DecryptedImage[]> => {
  const response = await fetch(`${API_BASE_URL}/photos`, {
    method: 'GET',
    credentials: 'include', // Cookieを含める
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch photos');
  }

  return response.json();
};

export const createPhoto = async (formData: FormData): Promise<Photo> => {
  const response = await fetch(`${API_BASE_URL}/photos`, {
    method: 'POST',
    credentials: 'include',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to create photo');
  }

  return response.json();
};

export const deletePhoto = async (id: string): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/photos/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Failed to delete photo');
  }
};
