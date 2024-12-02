'use client';

import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-3 text-center'>
      <h1 className='text-error text-2xl font-semibold'>Произошла непредвиденная ошибка.</h1>
      <button className='text-foreground mt-6 text-lg font-medium' onClick={() => reset()}>
        Попробовать снова
      </button>
      <Link className='text-foreground/50 -mt-2 text-lg font-medium' href='/'>
        Вернуться на главную
      </Link>
    </div>
  );
}
