import { Suspense } from 'react';

import { BucketPage } from '@/src/page/protected/bucket';

export default async function Bucket({ params }: { params: Promise<{ bucketId: string }> }) {
  const bucketId = params.then((bucket) => bucket.bucketId);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BucketPage bucketId={bucketId} />
    </Suspense>
  );
}
