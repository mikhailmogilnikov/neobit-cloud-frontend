'use client';

import { PiCaretLeftBold } from 'react-icons/pi';
import { useRouter } from 'next/navigation';

import { Flex } from './flex';

interface SectionHeaderProps {
  children: React.ReactNode;
  backable?: boolean;
  endContent?: React.ReactNode;
}

export const SectionHeader = ({ children, backable, endContent }: SectionHeaderProps) => {
  const { back } = useRouter();

  const title = <h2 className='text-start text-2xl font-semibold lg:text-3xl'>{children}</h2>;

  return (
    <Flex className='flex-col gap-6 max-md:mt-2 max-md:mb-4 md:h-20 md:flex-row md:items-center md:justify-between md:gap-4'>
      {backable ? (
        <Flex
          as='button'
          className='cursor-pointer items-start gap-2 md:items-center'
          onClick={back}
        >
          <PiCaretLeftBold className='mt-1 h-6 w-6' />
          {title}
        </Flex>
      ) : (
        title
      )}
      {endContent}
    </Flex>
  );
};
