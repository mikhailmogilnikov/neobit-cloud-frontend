/* eslint-disable react/display-name */
import { ElementType, forwardRef } from 'react';

import { PolymorphicComponentProps } from '../../lib/types/polymorphic-components';

import { buttonTV, ButtonTvProps } from './classnames';

type ButtonBaseProps = {} & ButtonTvProps;

export type ButtonProps<C extends ElementType> = PolymorphicComponentProps<C, ButtonBaseProps>;

export const Button = forwardRef(
  <C extends ElementType = 'button'>(props: ButtonProps<C>, ref: React.Ref<any>) => {
    const { as, children, className, color, size, ...buttonProps } = props;

    const Component = as || 'button';

    const buttonClassNames = buttonTV({ color, size, className });

    return (
      <Component ref={ref} {...buttonProps} className={buttonClassNames}>
        {children}
      </Component>
    );
  },
) as <C extends ElementType = 'button'>(
  props: ButtonProps<C> & { ref?: React.Ref<any> },
) => JSX.Element;
