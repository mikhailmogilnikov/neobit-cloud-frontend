'use cache';

import { Flex } from '@/src/shared/ui/flex';
import { Skeleton } from '@/src/shared/ui/skeleton';

export const BucketCardSkeleton = async ({ key }: { key: number | string }) => {
  return (
    <Flex key={key} col className='gap-4'>
      <Skeleton className='aspect-square w-full rounded-xl' />
      <Flex col className='gap-2'>
        <Skeleton className='h-5 w-1/2 rounded-md' />
        <Skeleton className='h-3 w-1/3 rounded-sm' />
      </Flex>
    </Flex>
  );
};
