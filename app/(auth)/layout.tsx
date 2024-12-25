'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';

import { EAppRoutes } from '@/src/shared/config/routes';
import { Flex } from '@/src/shared/ui/flex';
import { Logo } from '@/src/shared/ui/logo';
import { ThemeSelectorSkeleton } from '@/src/shared/ui/theme-selector';

const DynamicThemeSelector = dynamic(
  () => import('@/src/shared/ui/theme-selector').then((mod) => mod.ThemeSelector),
  {
    loading: () => <ThemeSelectorSkeleton />,
    ssr: false,
  },
);

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex col className='gap-6'>
      <Flex col align='center' className='h-48 gap-6' justify='center'>
        <Link href={EAppRoutes.SIGN_IN}>
          <Logo />
        </Link>
        <DynamicThemeSelector className='self-center' />
      </Flex>
      {children}
    </Flex>
  );
}
