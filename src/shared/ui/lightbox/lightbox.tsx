import { AnimatePresence } from 'motion/react';
import * as m from 'motion/react-m';
import NextImage from 'next/image';

import { Image } from '../image';

import { useLightbox } from './context';
import { useThemeColorUpdater } from './utils/use-theme-color-updater';

export const Lightbox = () => {
  const { lightboxId, activeContentId, closeLightbox } = useLightbox();

  useThemeColorUpdater(activeContentId);

  // const lightboxItems = document.querySelectorAll(`[data-lightbox-id="${lightboxId}"]`);

  return (
    <AnimatePresence>
      {lightboxId && activeContentId && (
        <div
          className='fixed inset-0 z-50 flex flex-col items-center justify-center'
          id='lightbox-container'
          role='dialog'
        >
          <m.button
            key='lightbox-backdrop'
            animate={{ opacity: 1 }}
            className='absolute inset-0 z-10 bg-black'
            exit={{ opacity: 0 }}
            id='lightbox-backdrop'
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, type: 'spring', bounce: 0 }}
            onClick={closeLightbox}
          />
          <m.div
            key='lightbox-content'
            drag
            dragSnapToOrigin
            layout
            className='pointer-events-auto z-20 h-fit w-fit'
            id='lightbox-content'
            layoutId={activeContentId || undefined}
          >
            <Image
              alt='Lightbox'
              as={NextImage}
              className='aspect-square h-full w-full min-w-screen'
              draggable={false}
              loading='eager'
              src='https://lipsum.app/id/2/1100x1100'
            />
          </m.div>
          <m.div
            key='lightbox-nav'
            animate={{ opacity: 1 }}
            className='absolute bottom-0 left-0 z-30 h-20 w-full bg-black/50'
            exit={{ opacity: 0 }}
            id='lightbox-nav'
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, type: 'spring', bounce: 0 }}
          />
        </div>
      )}
    </AnimatePresence>
  );
};
