import { PhotoGuide } from '@/features/photos/components/search/PhotoGuide';
import { PhotoResults } from '@/features/photos/components/search/PhotoResults';
import { PhotoSearchForm } from '@/features/photos/components/search/PhotoSearchForm';

export default function SearchPhotos() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <PhotoGuide />
        <PhotoSearchForm />
        <PhotoResults />
      </div>
    </div>
  );
}
