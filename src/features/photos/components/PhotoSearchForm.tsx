'use client';

import { motion } from 'motion/react';
import { FormEvent, useState } from 'react';

import { searchPhotos } from '../actions/photoActions';
import { useSearch } from '../context/SearchContext';

export const PhotoSearchForm = () => {
  const [password, setPassword] = useState('');
  const { setSearchResults, setHasSearched, setIsLoading, setError } = useSearch();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!password) return;

    try {
      setIsLoading(true);
      setError(null);

      await new Promise((resolve) => setTimeout(resolve, 3000));
      const response = await searchPhotos(password);

      setSearchResults(response.data);
      setHasSearched(true);
    } catch (error) {
      setError(error instanceof Error ? error.message : '検索中にエラーが発生しました');
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto mb-12"
    >
      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative">
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="合言葉を入力..."
            className="w-full px-6 py-4 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 shadow-lg"
            autoComplete="off"
          />
        </div>
      </form>
    </motion.div>
  );
};
