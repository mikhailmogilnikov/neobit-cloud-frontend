import { tv, VariantProps } from 'tailwind-variants';

export const spinnerTv = tv({
  slots: {
    base: 'relative',
    item: 'w-[10%] h-[30%] absolute top-[38%] left-[48%] rounded-full animate-ios-spinner',
  },
  variants: {
    color: {
      default: {
        item: 'bg-foreground',
      },
      primary: {
        item: 'bg-primary',
      },
      success: {
        item: 'bg-success',
      },
      warning: {
        item: 'bg-warning',
      },
      danger: {
        item: 'bg-danger',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'default',
  },
});

export type SpinnerVariantProps = VariantProps<typeof spinnerTv>;
