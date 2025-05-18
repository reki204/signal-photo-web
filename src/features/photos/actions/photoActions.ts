import 'server-only';

import { env } from '@/env';

import { ResponseData } from '../types/ResponseData';
import { UploadData } from '../types/UploadData';

const API_BASE_URL = env.API_URL;

/**
 * 写真を検索する
 * @param searchPassword 検索パスワード
 * @returns APIレスポンス
 */
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

/**
 * 写真をアップロードする
 * @param data
 * @returns
 */
export const uploadPhoto = async (data: UploadData): Promise<any> => {
  const formData = new FormData();
  data.images.forEach((file) => formData.append('images', file));
  formData.append('password', data.password);

  const response = await fetch(`${API_BASE_URL}/photos`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) throw new Error('Failed to create photo');

  return response.json();
};
