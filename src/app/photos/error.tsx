'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('errっす', error);
  }, [error]);

  return (
    <div className="p-4 bg-red-50 rounded">
      <h2 className="text-red-800">画像の取得に失敗しました</h2>
      <button className="mt-2 px-4 py-2 bg-red-100 rounded" onClick={() => reset()}>
        再試行する
      </button>
    </div>
  );
}
