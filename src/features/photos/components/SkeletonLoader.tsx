'use client';

import { Skeleton } from '@/components/ui/skeleton';

export const SkeletonLoader = () => {
  const skeletonItems = 9;

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] lg:grid-cols-3 gap-4 p-4">
      {Array.from({ length: skeletonItems }).map((_, i) => (
        <div key={i} className="m-2 p-2">
          <Skeleton className="w-full aspect-[16/9] rounded-md" />
        </div>
      ))}
    </div>
  );
};
