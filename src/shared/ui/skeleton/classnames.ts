import { tv } from '../../lib/utils/styling';

export const skeletonTV = tv({
  base: [
    'relative',
    'overflow-hidden',
    'bg-content3 dark:bg-content2',
    'pointer-events-none',
    'before:absolute',
    'before:inset-0',
    'before:-translate-x-full',
    'before:animate-shimmer',
    'before:bg-gradient-to-r',
    'before:from-transparent',
    'before:via-default-700/10',
    'dark:before:via-default-700/10',
    'before:to-transparent',
    'data-[loaded=true]:opacity-0',
    'transition-opacity',
  ],
});
