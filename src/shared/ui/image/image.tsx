'use client';

import { ElementType, HTMLAttributes } from 'react';

import { Skeleton } from '../skeleton';

import { useImage } from './use-image';

type NativeImageProps = HTMLAttributes<HTMLImageElement>;

export type ImageProps<C extends ElementType = 'img'> = NativeImageProps & {
  as?: C;
  alt?: string;
  ref?: React.Ref<any>;
  src?: string;
  width?: number;
  height?: number;
  classNames?: {
    wrapper?: string;
    image?: string;
  };
  fill?: boolean;
  loading?: 'eager' | 'lazy';
};

export const Image = <C extends ElementType = 'img'>(props: ImageProps<C>) => {
  const { Component, buildImageProps, buildWrapperProps, isLoaded } = useImage(props);

  return (
    <div {...buildWrapperProps()}>
      <Component {...buildImageProps()} />
      <Skeleton className='absolute inset-0 z-1' data-loaded={isLoaded} />
    </div>
  );
};
