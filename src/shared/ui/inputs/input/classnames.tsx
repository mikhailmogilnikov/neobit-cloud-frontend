import { VariantProps } from 'tailwind-variants';

import { tv } from '../../../lib/utils/styling';

export const inputTV = tv({
  slots: {
    root: 'w-full outline-2 outline-none bg-default',
    input: 'w-full border-none outline-none',
  },
  variants: {
    size: {
      sm: {
        root: 'h-8 rounded-md px-2',
        input: 'h-full',
      },
      md: {
        root: 'h-10 rounded-lg px-3',
        input: 'h-full',
      },
      lg: {
        root: 'h-12 rounded-lg px-3',
        input: 'h-full',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export type InputTvProps = VariantProps<typeof inputTV>;
