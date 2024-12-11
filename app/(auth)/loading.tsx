'use cache';

import { Spinner } from '@/src/shared/ui/spinner';

export default async function Loading() {
  return (
    <div className='flex h-60 w-full items-center justify-center'>
      <Spinner />
    </div>
  );
}
