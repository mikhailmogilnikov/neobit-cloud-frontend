'use client';

import { PiCaretLeftBold } from 'react-icons/pi';
import { useRouter } from 'next/navigation';

import { Flex } from './flex';

export const SectionHeader = ({
  children,
  backable,
}: {
  children: React.ReactNode;
  backable?: boolean;
}) => {
  const { back } = useRouter();

  const title = <h2 className='text-2xl font-semibold lg:text-3xl'>{children}</h2>;

  return (
    <Flex className='h-12 items-center justify-between lg:h-20'>
      {backable ? (
        <Flex as='button' className='items-center gap-2' onClick={back}>
          <PiCaretLeftBold className='h-6 w-6' />
          {title}
        </Flex>
      ) : (
        title
      )}
    </Flex>
  );
};
