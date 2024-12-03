import { VariantProps } from 'tailwind-variants';

import { tv } from '../../lib/utils/styling';

export const flexTV = tv({
  base: 'flex',
  variants: {
    justify: {
      center: 'justify-center',
      start: 'justify-start',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
    align: {
      center: 'items-center',
      start: 'items-start',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },
    col: {
      true: 'flex-col',
    },
  },
});

export type FlexTvProps = VariantProps<typeof flexTV>;
