'use client';

import dynamic from 'next/dynamic';

import { Flex } from '@/src/shared/ui/flex';

const DynamicHeader = dynamic(() => import('@/src/widgets/header').then((mod) => mod.Header), {
  ssr: false,
});

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex col className='pt-16'>
      <DynamicHeader />
      {children}
    </Flex>
  );
}
