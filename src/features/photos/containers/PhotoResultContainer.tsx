import { PhotoResults } from '../components/PhotoResults';
import { DecryptedImage } from '../types/DecryptedImage';

type Props = {
  searchResults: DecryptedImage[];
  hasSearched: boolean;
};

export const PhotoResultsContainer = ({ searchResults, hasSearched }: Props) => {
  return <PhotoResults images={searchResults} hasSearched={hasSearched} />;
};

export default PhotoResultsContainer;
