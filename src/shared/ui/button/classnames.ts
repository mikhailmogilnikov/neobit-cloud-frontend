import { VariantProps } from 'tailwind-variants';

import { tv } from '../../lib/utils/styling';

export const buttonTV = tv({
  base: 'inline-flex items-center justify-center font-medium transition-transform active:scale-95',
  variants: {
    color: {
      default: 'bg-default text-default-foreground',
      primary: 'bg-primary text-primary-foreground',
      success: 'bg-success text-success-foreground',
      warning: 'bg-warning text-warning-foreground',
      danger: 'bg-danger text-danger-foreground',
    },
    size: {
      sm: 'px-2 h-8 text-sm rounded-md',
      md: 'px-3 h-10 text-base rounded-lg',
      lg: 'px-4 h-12 text-lg rounded-xl',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
  },
});

export type ButtonTvProps = VariantProps<typeof buttonTV>;
