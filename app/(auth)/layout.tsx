'use cache';

import Link from 'next/link';

import { EAppRoutes } from '@/src/shared/config/routes';
import { Flex } from '@/src/shared/ui/flex';
import { Logo } from '@/src/shared/ui/logo';
import { ThemeSelector } from '@/src/shared/ui/theme-selector';

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex col className='gap-6'>
      <Flex col align='center' className='h-48 gap-6' justify='center'>
        <Link href={EAppRoutes.SIGN_IN}>
          <Logo />
        </Link>
        <ThemeSelector className='self-center' />
      </Flex>
      {children}
    </Flex>
  );
}
