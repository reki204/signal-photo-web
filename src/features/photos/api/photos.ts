import { DecryptedImage } from '../types/DecryptedImage';
import { Photo } from '../types/Photo';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_BASE_URL) {
  throw new Error('API_BASE_URL is not defined');
}

export const searchPhotos = async (password: string): Promise<DecryptedImage[]> => {
  const response = await fetch(`${API_BASE_URL}/photos?search=${encodeURIComponent(password)}`, {
    credentials: 'include', // Cookieを含める
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
    body: formData, // multipart/form-dataでファイルをアップロード
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
