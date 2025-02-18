"use client";

import { motion } from "motion/react";
import Image from "next/image";

import { Photo } from "../../types/Photo";

interface PhotoResults {
  photos: Photo[];
}

export function PhotoResults({ photos }: PhotoResults) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {photos.map((photo) => (
        <motion.div
          key={photo.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.02 }}
          className="w-full"
        >
          <div className="relative group rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 dark:shadow-gray-900 transition-colors duration-300">
            <Image
              src={photo.url}
              alt={`Photo ${photo.id}`}
              width={300}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
