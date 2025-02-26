import { PhotoResults } from '../components/PhotoResults';
import { DecryptedImage } from '../types/DecryptedImage';

export const PhotoResultsContainer = ({ searchResults }: { searchResults?: DecryptedImage[] }) => {
  return <>{searchResults && <PhotoResults images={searchResults} />}</>;
};
