'use client';

import { useSearch } from '../context/SearchContext';
import { ApiError } from './ApiError';
import { PhotoCard } from './PhotoCard';

export const PhotoResults = () => {
  const { searchResults, hasSearched, error } = useSearch();

  if (error) {
    return <ApiError />;
  }

  if (!hasSearched) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400 py-8">
        画像を検索するには合言葉を入力してください
      </div>
    );
  }

  if (searchResults.length === 0) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400 py-8">
        画像が見つかりませんでした
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {searchResults.map((imageData, index) => (
        <div key={index}>
          <PhotoCard image={imageData} />
        </div>
      ))}
    </div>
  );
};
