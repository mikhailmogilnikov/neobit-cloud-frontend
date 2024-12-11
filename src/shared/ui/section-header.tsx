import { PiCaretLeftBold } from 'react-icons/pi';

import { BackTrigger } from '../lib/providers/origin-tracker-provider';

import { Flex } from './flex';

export const SectionHeader = ({
  children,
  backable,
}: {
  children: React.ReactNode;
  backable?: boolean;
}) => {
  const title = <h2 className='text-2xl font-semibold lg:text-3xl'>{children}</h2>;

  return (
    <Flex className='h-12 items-center justify-between lg:h-20'>
      {backable ? (
        <BackTrigger>
          <Flex className='items-center gap-2'>
            <PiCaretLeftBold className='h-6 w-6' />
            {title}
          </Flex>
        </BackTrigger>
      ) : (
        title
      )}
    </Flex>
  );
};
