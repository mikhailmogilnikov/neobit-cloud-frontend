import { Suspense } from 'react';

import { Flex } from '@/src/shared/ui/flex';
import { SectionHeader } from '@/src/shared/ui/section-header';
import { BucketsListSkeleton } from '@/src/widgets/buckets-list';
import { FilesList } from '@/src/widgets/files-list';
// eslint-disable-next-line @conarti/feature-sliced/public-api
import { mockBuckets } from '@/src/widgets/buckets-list/model/mock-buckets';
import { IBucket } from '@/src/entities/bucket';
import { formatFileSize } from '@/src/shared/lib/utils/file-size';
import { AddFilesButton } from '@/src/features/add-files';

export const StaticBucketsPage = ({
  children,
  bucket,
}: {
  children: React.ReactNode;
  bucket: IBucket;
}) => {
  return (
    <Flex col as='main' className='container mx-auto gap-4 p-4'>
      <SectionHeader backable endContent={<AddFilesButton />}>
        {bucket.name} <span className='text-foreground/50'>· {formatFileSize(bucket.size)}</span>
      </SectionHeader>
      {children}
    </Flex>
  );
};

export const BucketPage = async ({ bucketId }: { bucketId: string }) => {
  const bucket = mockBuckets.find((bucket) => bucket.id === bucketId);

  if (!bucket) {
    return <div>Bucket not found</div>;
  }

  return (
    <StaticBucketsPage bucket={bucket}>
      <Suspense fallback={<BucketsListSkeleton />}>
        <FilesList />
      </Suspense>
    </StaticBucketsPage>
  );
};
