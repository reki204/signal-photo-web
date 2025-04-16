'use client';

import { motion } from 'motion/react';
import { useActionState } from 'react';
import { useEffect, useState } from 'react';

import { searchAction, SearchActionState } from '../actions/searchActions';
import { useSearch } from '../context/SearchContext';
import { SkeletonLoader } from './SkeletonLoader';

const INITIAL_STATE: SearchActionState = {
  data: [],
  validationErrors: {},
  message: null,
  apiError: null,
};

export const PhotoSearchForm = () => {
  const [password, setPassword] = useState('');
  const { setSearchResults, setHasSearched, setError } = useSearch();

  const [state, formAction, pending] = useActionState(searchAction, INITIAL_STATE);

  useEffect(() => {
    if (state) {
      if ('validationErrors' in state) {
        setSearchResults([]);
      } else if ('data' in state) {
        setSearchResults(state.data!);
        setHasSearched(true);
        setError(null);
      } else if ('apiError' in state) {
        setError(state.apiError!);
      }
    }
  }, [state, setSearchResults, setHasSearched, setError]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto mb-12"
    >
      <form action={formAction} className="w-full">
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
        {state.validationErrors && (
          <div className="text-center text-red-500 dark:text-red-400 py-3">
            {state.validationErrors.password}
          </div>
        )}
        {pending && <SkeletonLoader />}
      </form>
    </motion.div>
  );
};
