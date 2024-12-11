import { Slot } from '@radix-ui/react-slot';
import { getSvgPath } from 'figma-squircle';
import { ComponentPropsWithoutRef, useMemo } from 'react';

import { useElementSize } from './use-element-size';

export type SquircleOrdersRadius = {
  tl: number;
  tr: number;
  bl: number;
  br: number;
};

export type UseSquircleProps = {
  smoothing?: number;
  wrapperRadius?: number;
  wrapperClassname?: string;
  throttlingDelayMs?: number;
  asChild?: boolean;
  resizable?: boolean;
  disableSmoothing?: boolean;
} & ComponentPropsWithoutRef<'div'>;

export const useSquircle = (props: UseSquircleProps) => {
  const {
    smoothing: cornerSmoothing = 0,
    asChild,
    resizable = true,
    wrapperRadius,
    wrapperClassname,
    throttlingDelayMs,
    style,
    disableSmoothing = false,
    ...restProps
  } = props;

  const Component = asChild ? Slot : 'div';

  const [ref, { width, height, borderRadius, borderRadiuses }] = useElementSize<HTMLDivElement>(
    resizable,
    throttlingDelayMs,
  );

  const path = useMemo(() => {
    if (!width || !height || disableSmoothing) return '';

    return getSvgPath({
      width: width,
      height: height,
      topLeftCornerRadius: borderRadiuses?.borderTopLeftRadius,
      topRightCornerRadius: borderRadiuses?.borderTopRightRadius,
      bottomLeftCornerRadius: borderRadiuses?.borderBottomLeftRadius,
      bottomRightCornerRadius: borderRadiuses?.borderBottomRightRadius,
      cornerRadius: borderRadius,
      cornerSmoothing: cornerSmoothing,
    });
  }, [width, height, borderRadius, cornerSmoothing, borderRadiuses, disableSmoothing]);

  const elStyle = useMemo(
    () => ({
      ...style,
      clipPath: disableSmoothing ? undefined : `path('${path}')`,
    }),
    [style, path, disableSmoothing],
  );


  const wrapperStyle = useMemo(
    () => ({
      borderRadius: wrapperRadius,
      borderTopLeftRadius: borderRadiuses?.borderTopLeftRadius,
      borderTopRightRadius: borderRadiuses?.borderTopLeftRadius,
      borderBottomLeftRadius: borderRadiuses?.borderTopLeftRadius,
      borderBottomRightRadius: borderRadiuses?.borderTopLeftRadius,
    }),
    [wrapperRadius, borderRadiuses],
  );

  return {
    Component,
    elStyle,
    wrapperStyle,
    ref,
    wrapperClassname,
    ...restProps,
  };
};
