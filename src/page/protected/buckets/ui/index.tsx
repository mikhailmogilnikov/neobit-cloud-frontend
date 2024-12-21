import { Suspense } from 'react';

import { Flex } from '@/src/shared/ui/flex';
import { SectionHeader } from '@/src/shared/ui/section-header';
import { BucketsList, BucketsListSkeleton } from '@/src/widgets/buckets-list';
import { AddBucketButton } from '@/src/features/add-bucket';

export const StaticBucketsPage = async ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex col as='main' className='container mx-auto gap-4 p-4'>
      <SectionHeader endContent={<AddBucketButton />}>Ваше хранилище</SectionHeader>
      {children}
    </Flex>
  );
};

export const BucketsPage = () => {
  return (
    <StaticBucketsPage>
      <Suspense fallback={<BucketsListSkeleton />}>
        <BucketsList />
      </Suspense>
    </StaticBucketsPage>
  );
};
