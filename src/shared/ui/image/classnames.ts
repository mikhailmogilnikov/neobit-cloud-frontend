import { VariantProps } from 'tailwind-variants';

import { tv } from '../../lib/utils/styling';

export const imageTV = tv({
  slots: {
    wrapper: 'relative w-fit h-auto max-w-screen',
    image: 'absolute inset-0 object-cover animate-fade-in',
  },
});

export type ImageClassNames = VariantProps<typeof imageTV>;
