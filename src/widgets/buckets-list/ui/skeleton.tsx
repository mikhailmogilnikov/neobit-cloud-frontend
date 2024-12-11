'use cache';

import { BucketCardSkeleton } from '@/src/entities/bucket';
import { ItemsGrid } from '@/src/shared/ui/items-grid';

export const BucketsListSkeleton = async () => {
  const buckets = Array.from({ length: 12 });

  return (
    <ItemsGrid>
      {buckets.map((_, index) => (
        <BucketCardSkeleton key={index} />
      ))}
    </ItemsGrid>
  );
};
