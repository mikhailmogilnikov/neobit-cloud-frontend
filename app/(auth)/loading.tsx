import { Spinner } from '@/src/shared/ui/spinner';

export default function Loading() {
  return (
    <div className='flex h-60 w-full items-center justify-center'>
      <Spinner />
    </div>
  );
}
