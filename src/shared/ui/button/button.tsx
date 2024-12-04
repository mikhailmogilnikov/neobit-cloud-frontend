/* eslint-disable react/display-name */
import { ElementType, forwardRef } from 'react';

import { PolymorphicComponentProps } from '../../lib/types/polymorphic-components';
import { Spinner } from '../spinner';
import { Squircle, SquircleProps } from '../squircle';

import { buttonTV, ButtonTvProps } from './classnames';

type ButtonBaseProps = { isLoading?: boolean; squircleProps?: SquircleProps } & ButtonTvProps;

export type ButtonProps<C extends ElementType> = PolymorphicComponentProps<C, ButtonBaseProps>;

export const Button = forwardRef(
  <C extends ElementType = 'button'>(props: ButtonProps<C>, ref: React.Ref<any>) => {
    const {
      as,
      children,
      className,
      color,
      isDisabled,
      isLoading,
      size,
      variant,
      squircleProps,
      ...buttonProps
    } = props;

    const Component = as || 'button';

    const buttonClassNames = buttonTV({ color, isDisabled, isLoading, size, variant, className });

    return (
      <Squircle asChild {...squircleProps}>
        <Component
          ref={ref}
          {...buttonProps}
          className={buttonClassNames}
          disabled={isDisabled || isLoading}
        >
          {isLoading ? <Spinner color={color} size={20} /> : children}
        </Component>
      </Squircle>
    );
  },
) as <C extends ElementType = 'button'>(
  props: ButtonProps<C> & { ref?: React.Ref<any> },
) => JSX.Element;
