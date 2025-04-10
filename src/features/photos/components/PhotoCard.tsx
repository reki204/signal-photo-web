import { motion } from 'motion/react';

import { DecryptedImage } from '../types/DecryptedImage';
import CanvasImage from './CanvaImage';

type PhotoCardProps = {
  image: DecryptedImage;
};

export function PhotoCard({ image }: PhotoCardProps) {
  const { image_data } = image;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800"
    >
      <CanvasImage base64Data={image_data} />
    </motion.div>
  );
}
