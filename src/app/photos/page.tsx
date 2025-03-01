import { ErrorBoundary } from 'react-error-boundary';

import { PhotoSearchContainer } from '@/features/photos/containers/PhotoSearchContainer';

import Error from './(result)/error';
import ResultPage from './(result)/page';

export default function SearchPhotos() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16">
        <PhotoSearchContainer />
        <ErrorBoundary FallbackComponent={Error}>
          <ResultPage />
        </ErrorBoundary>
      </div>
    </div>
  );
}
