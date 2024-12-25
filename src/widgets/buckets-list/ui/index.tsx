import { BucketCard } from '@/src/entities/bucket';
import { ItemsGrid } from '@/src/shared/ui/items-grid';

import { getBucketsList } from '../api/buckets-list';

export const BucketsList = async () => {
  const bucketsList = await getBucketsList();

  return (
    <ItemsGrid>
      {bucketsList.map((bucket) => (
        <BucketCard key={bucket.id} bucket={bucket} />
      ))}
    </ItemsGrid>
  );
};
