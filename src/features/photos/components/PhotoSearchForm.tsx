'use client';

import { motion } from 'motion/react';

type Props = {
  password: string;
  setPassword: (value: string) => void;
  search: (formData: FormData) => Promise<void>;
};

export const PhotoSearchForm = ({ password, setPassword, search }: Props) => {
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
        </div>
      </form>
    </motion.div>
  );
};
