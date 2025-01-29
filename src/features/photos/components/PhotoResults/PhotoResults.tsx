"use client";

import { motion } from "motion/react";
import { Photo } from "../../types/Photo";
import Image from "next/image";

type PhotoResults = {
  photos: Photo[];
};

export function PhotoResults({ photos }: PhotoResults) {
  return (
    <div className="columns-1 md:columns-3 lg:columns-4 gap-4 space-y-4">
      {photos.map((photo) => (
        <motion.div
          key={photo.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.02 }}
          className="break-inside-avoid"
        >
          <div className="relative group rounded-xl overflow-hidden shadow-lg bg-white">
            <Image
              src={photo.url}
              alt={`Photo ${photo.id}`}
              width={400}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
