'use client';

import Link from 'next/link';
import { PiWarningCircleFill } from 'react-icons/pi';

import { EAppRoutes } from '@/src/shared/config/routes';

export default function BucketsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className='flex h-[calc(100svh-4rem)] flex-col items-center justify-center gap-8 px-4 text-center'>
      <PiWarningCircleFill className='text-danger h-16 w-16 animate-pulse' />
      <h1 className='text-error text-2xl font-semibold'>Произошла ошибка при загрузке папок.</h1>
      <button className='text-foreground mt-3 text-lg font-medium' onClick={() => reset()}>
        Попробовать снова
      </button>
      <Link className='text-foreground/50 -mt-6 text-lg font-medium' href={EAppRoutes.BUCKETS}>
        Вернуться на главную
      </Link>
    </div>
  );
}
