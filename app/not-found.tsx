import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-3'>
      <h1 className='text-2xl font-semibold'>Такой страницы не существует.</h1>
      <Link className='text-foreground/50 text-base font-medium' href='/'>
        Вернуться на главную
      </Link>
    </div>
  );
}
