'use client';
import { useState, useTransition } from 'react';

import { searchPhotos } from '../api/photos';
import { DecryptedImage } from '../types/DecryptedImage';

export function usePhotoSearch() {
  const [password, setPassword] = useState('');
  const [images, setImages] = useState<DecryptedImage[]>([]);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const search = async (formData: FormData) => {
    const searchPassword = formData.get('password') as string;
    if (!searchPassword) return;

    try {
      startTransition(async () => {
        const data = await searchPhotos(searchPassword);
        setImages(data);
        setError(null);
      });
    } catch (err) {
      setError('画像の検索中にエラーが発生しました');
      console.error(err);
    }
  };

  return {
    password,
    setPassword,
    images,
    isPending,
    error,
    search,
  };
}
