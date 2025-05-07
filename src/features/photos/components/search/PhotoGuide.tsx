'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

import { usePhotoStore } from '../../store/usePhotoStore';

export const PhotoGuide = () => {
  const { hasSearched, searchResults, error, isLoading } = usePhotoStore();
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (error) {
      setMessage('エラーが発生しました。もう一度試してみてください。');
    } else if (isLoading) {
      setMessage('検索中...');
    } else if (!hasSearched) {
      setMessage(
        'こんにちは！合言葉を入力して、素敵な写真を探してみましょう！ 試しに「mike」と入力してみてください'
      );
    } else if (searchResults.length === 0) {
      setMessage('その合言葉では写真が見つからなかったよ。別の言葉で試してみて！');
    } else {
      setMessage(`${searchResults.length}枚の写真が見つかりました！`);
    }
  }, [hasSearched, searchResults, error, isLoading]);

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center mb-8 w-full"
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="character-container"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <div className="w-24 h-24 bg-blue-400 dark:bg-blue-600 rounded-full flex items-center justify-center overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg mx-auto">
            <div className="relative w-full h-full">
              <div className="absolute top-6 left-5 w-3 h-3 bg-white rounded-full"></div>
              <div className="absolute top-6 right-5 w-3 h-3 bg-white rounded-full"></div>
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-white rounded-b-full"></div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-4 p-3 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 relative max-w-xs mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-800 border-t border-l border-gray-200 dark:border-gray-700 rotate-45"></div>
          <p className="text-center text-gray-700 dark:text-gray-300 text-sm">{message}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};
