import { Suspense } from 'react';

import { Flex } from '@/src/shared/ui/flex';
import { SectionHeader } from '@/src/shared/ui/section-header';
import { BucketsListSkeleton } from '@/src/widgets/buckets-list';
import { FilesList } from '@/src/widgets/files-list';
import { IBucket } from '@/src/entities/bucket';
import { AddFilesButton } from '@/src/features/add-files';

export const StaticBucketsPage = ({
  children,
  bucketName,
}: {
  children: React.ReactNode;
  bucketName: IBucket['bucket_name'];
}) => {
  return (
    <Flex col as='main' className='container mx-auto gap-4 p-4'>
      <SectionHeader backable endContent={<AddFilesButton bucketName={bucketName} />}>
        {bucketName}
        {/* <span className='text-foreground/50'>· {formatFileSize(bucket.size)}</span> */}
      </SectionHeader>
      {children}
    </Flex>
  );
};

export const BucketPage = async ({ bucketName }: { bucketName: IBucket['bucket_name'] }) => {
  return (
    <StaticBucketsPage bucketName={bucketName}>
      <Suspense fallback={<BucketsListSkeleton />}>
        <FilesList bucketName={bucketName} />
      </Suspense>
    </StaticBucketsPage>
  );
};
