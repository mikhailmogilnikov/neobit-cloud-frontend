'use cache';

import { Spinner } from '@/src/shared/ui/spinner';

export default async function Loading() {
  return (
    <div className='flex h-[calc(100svh-4rem)] w-svw items-center justify-center'>
      <Spinner className='mb-16' />
    </div>
  );
}