import { ComponentPropsWithoutRef, ElementType } from 'react';

type AsProp<C extends ElementType> = {
  as?: C;
};

export type PolymorphicComponentProps<C extends ElementType, Props = {}> = Props &
  AsProp<C> &
  Omit<ComponentPropsWithoutRef<C>, keyof Props | 'as'>;
