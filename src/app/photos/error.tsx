'use client';

import { useEffect } from 'react';
import { FallbackProps } from 'react-error-boundary';

export default function Error({ error }: FallbackProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-700/20 p-8 border border-red-100 dark:border-red-900">
        <div className="w-16 h-16 mx-auto bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
          <span className="text-red-600 dark:text-red-400 text-2xl">!</span>
        </div>
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            エラーが発生しました
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            データの取得中に問題が発生しました。再度お試しください。
          </p>
        </div>
      </div>
    </div>
  );
}
