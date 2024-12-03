import { forwardRef, HTMLAttributes } from 'react';

import { useSpinner } from './use-spinner';
import { SpinnerVariantProps } from './classnames';

export type SpinnerProps = HTMLAttributes<HTMLDivElement> &
  SpinnerVariantProps & {
    size?: number;
    segments?: 8 | 10 | 12;
  };

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>((props, ref) => {
  const { buildSpinnerProps } = useSpinner(props);

  return <div ref={ref} {...buildSpinnerProps()} />;
});

Spinner.displayName = 'Spinner';
