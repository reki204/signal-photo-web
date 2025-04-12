import { PhotoResults } from '@/features/photos/components/PhotoResults';
import { PhotoSearchForm } from '@/features/photos/components/PhotoSearchForm';
import { SearchProvider } from '@/features/photos/context/SearchContext';

export default function SearchPhotos() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16">
        <SearchProvider>
          <PhotoSearchForm />
          <PhotoResults />
        </SearchProvider>
      </div>
    </div>
  );
}
