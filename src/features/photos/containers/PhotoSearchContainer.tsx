'use client';

import { useState } from 'react';

import { searchPhotos } from '../actions/photoActions';
import { PhotoSearchForm } from '../components/PhotoSearchForm';
import { ResponseData } from '../types/ResponseData';

type Props = {
  onSearch: (responseData: ResponseData) => void;
};

export const PhotoSearchContainer = ({ onSearch }: Props) => {
  const [password, setPassword] = useState('');

  const search = async (formData: FormData) => {
    const searchPassword = formData.get('password') as string;
    if (!searchPassword) return;

    const response = await searchPhotos(searchPassword);
    onSearch(response);
  };

  return <PhotoSearchForm password={password} setPassword={setPassword} search={search} />;
};
