import { Flex } from '@/src/shared/ui/flex';
import { SectionHeader } from '@/src/shared/ui/section-header';

export const BucketsPage = () => {
  return (
    <Flex col as='main' className='container mx-auto gap-4 p-4'>
      <SectionHeader>Ваше хранилище</SectionHeader>
    </Flex>
  );
};
