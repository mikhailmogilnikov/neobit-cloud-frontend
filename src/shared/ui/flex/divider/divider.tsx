import { forwardRef, HTMLAttributes } from 'react';

import { dividerTV, DividerTvProps } from './classnames';

export type DividerProps = HTMLAttributes<HTMLHRElement> & DividerTvProps;

export const Divider = forwardRef<HTMLHRElement, DividerProps>((props, ref) => {
  const { className, vertical, ...rest } = props;

  const dividerClass = dividerTV({ vertical, className });

  return <hr ref={ref} className={dividerClass} {...rest} />;
});

Divider.displayName = 'Divider';
