'use client';

import { useState } from 'react';

import { searchPhotos } from '../api/photos';
import { PhotoSearchForm } from '../components/PhotoSearchForm';
import { DecryptedImage } from '../types/DecryptedImage';

export const PhotoSearchContainer = () => {
  const [password, setPassword] = useState('');
  const [images, setImages] = useState<DecryptedImage[]>([]);

  const search = async (formData: FormData) => {
    const searchPassword = formData.get('password') as string;
    if (!searchPassword) return;

    const data = await searchPhotos(searchPassword);
    setImages(data);
  };

  return <PhotoSearchForm password={password} setPassword={setPassword} search={search} />;
};
