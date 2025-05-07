import { PhotoUploadForm } from '@/features/photos/components/upload/PhotoUploadForm';
import { UploadGuide } from '@/features/photos/components/upload/UploadGuide';

export default function UploadPhotos() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <UploadGuide />
        <PhotoUploadForm />
      </div>
    </div>
  );
}
