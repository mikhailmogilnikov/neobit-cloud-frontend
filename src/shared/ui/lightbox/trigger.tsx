'use client';

import * as m from 'motion/react-m';
import { HTMLMotionProps } from 'motion/react';
import { useState } from 'react';

import { cn } from '../../lib/utils/styling';

import { useLightbox } from './context';

export type LightboxTriggerProps = {
  lightboxId: string;
  contentId: string;
  src: string;
  className?: string;
} & HTMLMotionProps<HTMLButtonElement>;

export const LightboxTrigger = (props: LightboxTriggerProps) => {
  const { lightboxId, children, contentId, src, className, ...rest } = props;

  const { activeContentId, setLightboxId, setActiveContentId } = useLightbox();

  const [sizes, setSizes] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLightboxId(lightboxId);
    setActiveContentId(contentId);

    setSizes({ width: e.currentTarget.clientWidth, height: e.currentTarget.clientHeight });
  };

  const classNames = cn('h-fit w-fit', className);

  if (activeContentId === contentId)
    return <div style={{ width: sizes.width, height: sizes.height }} />;

  return (
    <m.button
      className={classNames}
      data-content-id={contentId}
      data-lightbox-id={lightboxId}
      data-src={src}
      layoutId={contentId}
      transition={{ duration: 0.25, type: 'spring', bounce: 0 }}
      type='button'
      onClick={handleClick}
      {...rest}
    >
      {children}
    </m.button>
  );
};
