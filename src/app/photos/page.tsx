'use client';

import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import PhotoResultsContainer from '@/features/photos/containers/PhotoResultContainer';
import { PhotoSearchContainer } from '@/features/photos/containers/PhotoSearchContainer';
import { DecryptedImage } from '@/features/photos/types/DecryptedImage';

import Error from './error';

export default function SearchPhotos() {
  const [results, setResults] = useState<DecryptedImage[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16">
        <PhotoSearchContainer
          onSearch={(response) => {
            setResults(response.data);
            setHasSearched(true);
          }}
        />
        <ErrorBoundary FallbackComponent={Error}>
          <PhotoResultsContainer searchResults={results} hasSearched={hasSearched} />
        </ErrorBoundary>
      </div>
    </div>
  );
}
