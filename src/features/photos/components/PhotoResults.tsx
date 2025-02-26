import { DecryptedImage } from '../types/DecryptedImage';
import { PhotoCard } from './PhotoCard';

type Props = {
  images: DecryptedImage[];
};

export function PhotoResults({ images }: Props) {
  if (images.length === 0) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400 py-8">
        画像が見つかりませんでした
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image) => (
        <PhotoCard key={image.photo.id} image={image} />
      ))}
    </div>
  );
}
