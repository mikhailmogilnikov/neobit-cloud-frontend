import { ElementType, useState } from 'react';

import { cn } from '../../lib/utils/styling';

import { ImageProps } from './image';
import { imageTV } from './classnames';

export const useImage = <C extends ElementType = 'img'>(props: ImageProps<C>) => {
  const { onLoad, as, className, classNames, fill = true, width, height, ...rest } = props;

  const Component = as || 'img';

  const [isLoaded, setIsLoaded] = useState(false);

  const { wrapper, image } = imageTV();

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoaded(true);
    onLoad?.(e);
  };

  const wrapperClassNames = cn(className, classNames?.wrapper);

  const buildWrapperProps = () => {
    return {
      className: wrapper({ className: wrapperClassNames }),
      style: {
        width,
        height,
      },
    };
  };

  const buildImageProps = () => {
    return {
      ...rest,
      fill,
      onLoad: handleLoad,
      className: image({ className: classNames?.image }),
    };
  };

  return { Component, buildImageProps, buildWrapperProps, isLoaded };
};
