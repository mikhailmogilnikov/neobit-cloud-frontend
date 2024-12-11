'use client';

import Link from 'next/link';
import { createPortal } from 'react-dom';
import * as m from 'motion/react-m';

import { EAppRoutes } from '@/src/shared/config/routes';
import { Logo } from '@/src/shared/ui/logo';

import { useHideHeader } from '../lib/useHideHeader';

import { HeaderMobile } from './mobile';

export const Header = () => {
  const { isHeaderHidden } = useHideHeader();

  return createPortal(
    <m.header
      animate={{ y: isHeaderHidden ? -100 : 0 }}
      className='border-border bg-background fixed top-0 z-50 flex h-16 w-full items-center justify-between border-b px-4 backdrop-blur-2xl'
      initial={{ y: -100 }}
      transition={{ duration: 0.3, type: 'spring', bounce: 0 }}
    >
      <Link href={EAppRoutes.BUCKETS}>
        <Logo />
      </Link>
      <HeaderMobile />
    </m.header>,
    document.body,
    'header',
  );
};
