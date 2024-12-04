import { cn } from '../lib/utils/styling';

export const Logo = ({
  className,
  spanClassName,
}: {
  className?: string;
  spanClassName?: string;
}) => {
  return (
    <h1 className={cn('text-2xl font-bold', className)}>
      NeoBit <span className={cn('text-primary', spanClassName)}>Cloud</span>
    </h1>
  );
};
