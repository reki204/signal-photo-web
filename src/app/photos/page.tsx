import { Suspense } from 'react';

import PhotoResults from '@/features/photos/components/PhotoResults';
import { PhotoSearchForm } from '@/features/photos/components/PhotoSearchForm';

import Loading from './loading';

// const MOCK_PHOTOS = [
//   { id: '1', url: '/images/Mock/sample1.jpg', userId: '1' },
//   { id: '2', url: '/images/Mock/sample2.jpg', userId: '1' },
//   { id: '3', url: '/images/Mock/sample3.jpg', userId: '1' },
//   { id: '4', url: '/images/Mock/sample2.jpg', userId: '1' },
//   { id: '5', url: '/images/Mock/sample1.jpg', userId: '1' },
//   { id: '6', url: '/images/Mock/sample1.jpg', userId: '1' },
// ];

export default function SearchPhotos() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16">
        <PhotoSearchForm />
        <Suspense fallback={<Loading />}>
          <PhotoResults />
        </Suspense>
      </div>
    </div>
  );
}
