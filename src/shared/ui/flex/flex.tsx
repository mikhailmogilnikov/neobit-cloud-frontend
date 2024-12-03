import { ComponentPropsWithRef, ElementType, forwardRef } from 'react';

import { flexTV, FlexTvProps } from './classnames';

export type FlexProps<T extends React.ElementType> = FlexTvProps &
  React.HTMLAttributes<T> & {
    as?: ElementType;
  };

export const Flex = forwardRef(
  <T extends ElementType = 'div'>(
    props: FlexProps<T>,
    ref: React.Ref<ComponentPropsWithRef<T>['ref']>,
  ) => {
    const { className, children, justify, align, col, as, ...rest } = props;

    const Component = as || 'div';

    const classNames = flexTV({ justify, align, col, className });

    return (
      <Component ref={ref} className={classNames} {...rest}>
        {children}
      </Component>
    );
  },
);

Flex.displayName = 'Flex';
