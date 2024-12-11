import { BucketCard, IBucket } from '@/src/entities/bucket';
import { ItemsGrid } from '@/src/shared/ui/items-grid';

import { mockBuckets } from '../model/mock-buckets';

export const BucketsList = async () => {
  const buckets = await new Promise<IBucket[]>((resolve) =>
    setTimeout(() => resolve(mockBuckets), 1500),
  );

  return (
    <ItemsGrid>
      {buckets.map((bucket) => (
        // <Link key={bucket.id} href={generateBucketRoute(bucket.id)}>
        <BucketCard key={bucket.id} bucket={bucket} />
        // </Link>
      ))}
    </ItemsGrid>
  );
};
