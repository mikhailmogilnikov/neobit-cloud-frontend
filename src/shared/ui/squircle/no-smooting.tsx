/* eslint-disable react/display-name */

import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { SquircleProps } from './squircle';

export const NoSmoothing = forwardRef<HTMLDivElement, SquircleProps>((props, ref) => {
  const {
    asChild,
    smoothing,
    resizable,
    wrapperRadius,
    throttlingDelayMs,
    wrapperClassname,
    disableSmoothing,
    ...componentProps
  } = props;

  const Component = asChild ? Slot : 'div';

  if (wrapperClassname) {
    return (
      <div className={wrapperClassname}>
        <Component ref={ref} {...componentProps} />
      </div>
    );
  }

  return <Component ref={ref} {...componentProps} />;
});
