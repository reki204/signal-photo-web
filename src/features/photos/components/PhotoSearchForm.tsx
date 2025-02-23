'use client';

import { motion } from 'motion/react';

import { usePhotoSearch } from '../hooks/usePhotoSearch';

export function PhotoSearchForm() {
  const { password, setPassword, isPending, error, search } = usePhotoSearch();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto mb-12"
    >
      <form action={search}>
        <div className="relative">
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="合言葉を入力..."
            className="w-full px-6 py-4 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 shadow-lg"
          />
          <button
            type="submit"
            disabled={isPending}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors disabled:bg-gray-400"
          >
            {isPending ? '検索中...' : '検索'}
          </button>
        </div>
      </form>
      {error && <div className="text-red-500 text-center mt-4 dark:text-red-400">{error}</div>}
    </motion.div>
  );
}
