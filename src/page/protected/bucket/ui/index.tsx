import { Suspense } from 'react';

import { Flex } from '@/src/shared/ui/flex';
import { SectionHeader } from '@/src/shared/ui/section-header';

export const StaticBucketsPage = async ({ children }: { children: React.ReactNode }) => {
  'use cache';

  return (
    <Flex col as='main' className='container mx-auto gap-4 p-4'>
      <SectionHeader backable>Бакет</SectionHeader>
      {children}
    </Flex>
  );
};

export const BucketPage = ({ bucketId }: { bucketId: string }) => {
  return (
    <StaticBucketsPage>
      <Suspense>{bucketId}</Suspense>
    </StaticBucketsPage>
  );
};
