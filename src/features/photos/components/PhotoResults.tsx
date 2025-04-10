import { DecryptedImage } from '../types/DecryptedImage';
import { PhotoCard } from './PhotoCard';

type Props = {
  images: DecryptedImage[];
  hasSearched: boolean;
};

export const PhotoResults = ({ images, hasSearched }: Props) => {
  if (!hasSearched) return null;

  if (images.length === 0) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400 py-8">
        画像が見つかりませんでした
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((imageData, index) => (
        <div key={index}>
          <PhotoCard image={imageData} />
        </div>
      ))}
    </div>
  );
};
