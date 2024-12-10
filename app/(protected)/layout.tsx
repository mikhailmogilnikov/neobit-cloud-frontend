'use cache';

import { Flex } from '@/src/shared/ui/flex';
import { Header } from '@/src/widgets/header';

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex col className='pt-16'>
      <Header />
      {children}
    </Flex>
  );
}
