'use client';

import { PhotoResults } from '@/features/photos/components/PhotoResults/PhotoResults';
import { PhotoSearchForm } from '@/features/photos/components/PhotoSearch/PhotoSearchForm';

const MOCK_PHOTOS = [
  { id: '1', url: '/images/Mock/sample1.jpg', userId: '1' },
  { id: '2', url: '/images/Mock/sample2.jpg', userId: '1' },
  { id: '3', url: '/images/Mock/sample3.jpg', userId: '1' },
  { id: '4', url: '/images/Mock/sample2.jpg', userId: '1' },
  { id: '5', url: '/images/Mock/sample1.jpg', userId: '1' },
  { id: '6', url: '/images/Mock/sample1.jpg', userId: '1' },
];

export default function SearchPhotos() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16">
        <PhotoSearchForm />
        <PhotoResults photos={MOCK_PHOTOS} />
      </div>
    </div>
  );
}
