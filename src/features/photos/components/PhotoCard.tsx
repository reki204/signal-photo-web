'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

import { DecryptedImage } from '../types/DecryptedImage';

type PhotoCardProps = {
  image: DecryptedImage;
  onDelete?: (id: string) => void;
  isAuthenticated?: boolean;
};

export function PhotoCard({ image, onDelete, isAuthenticated = false }: PhotoCardProps) {
  const { photo, image_data } = image;
  const formattedDate = new Date(photo.created_at).toLocaleDateString('ja-JP');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800"
    >
      <Image
        src={`data:image/jpeg;base64,${image_data}`}
        alt=""
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex justify-between items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400">{formattedDate}</span>
        {isAuthenticated && onDelete && (
          <button
            onClick={() => onDelete(photo.id)}
            className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 transition-colors"
          >
            削除
          </button>
        )}
      </div>
    </motion.div>
  );
}
