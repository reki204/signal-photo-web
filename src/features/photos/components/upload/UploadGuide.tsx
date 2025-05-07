'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

import { MESSAGES } from '../../constants/messages';

export const UploadGuide = () => {
  const tips = MESSAGES.UPLOADTIPS;
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex((prevIndex) => (prevIndex + 1) % tips.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [tips.length]);

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center mb-12 w-full"
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="character-container"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <div className="w-24 h-24 bg-purple-400 dark:bg-purple-600 rounded-full flex items-center justify-center overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg mx-auto">
            <div className="relative w-full h-full">
              <div className="absolute top-6 left-5 w-3 h-3 bg-white rounded-full"></div>
              <div className="absolute top-6 right-5 w-3 h-3 bg-white rounded-full"></div>
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-white rounded-b-full"></div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 relative max-w-md mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-800 border-t border-l border-gray-200 dark:border-gray-700 rotate-45"></div>
          <motion.p
            key={tipIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center text-gray-700 dark:text-gray-300"
          >
            {tips[tipIndex]}
          </motion.p>
        </motion.div>

        <div className="flex justify-center mt-4 space-x-2">
          {tips.map((_, index) => (
            <button
              key={index}
              onClick={() => setTipIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === tipIndex
                  ? 'bg-purple-500 dark:bg-purple-400'
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Tip ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
