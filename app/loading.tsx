import { Spinner } from '@/src/shared/ui/spinner';

export default function Loading() {
  return (
    <div className='flex h-svh w-svw items-center justify-center'>
      <Spinner />
    </div>
  );
}