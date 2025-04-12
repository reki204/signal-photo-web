'use client';

import { useEffect, useState } from 'react';

import { Skeleton } from '@/components/ui/skeleton';

export const SkeletonLoader = () => {
  const array = new Array(9).fill(null);
  const [gridColumns, setGridColumns] = useState('repeat(auto-fill, minmax(250px, 1fr))');

  useEffect(() => {
    const updateGridColumns = () => {
      if (window.innerWidth >= 1024) {
        setGridColumns('repeat(3, 1fr)');
      } else {
        setGridColumns('repeat(auto-fill, minmax(250px, 1fr))');
      }
    };

    updateGridColumns();
    window.addEventListener('resize', updateGridColumns);
    return () => window.removeEventListener('resize', updateGridColumns);
  }, []);

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: gridColumns,
    gap: '16px',
    padding: '16px',
  };

  return (
    <div style={containerStyle}>
      {array.map((_, i) => (
        <div key={i} style={{ margin: '8px', padding: '8px', width: '100%' }}>
          <Skeleton
            style={{
              width: '100%',
              aspectRatio: '16/9',
              borderRadius: '4px',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
