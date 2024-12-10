import { Flex } from './flex';

export const SectionHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex className='h-12 items-center justify-between lg:h-20'>
      <h2 className='text-2xl font-semibold lg:text-3xl'>{children}</h2>
    </Flex>
  );
};
