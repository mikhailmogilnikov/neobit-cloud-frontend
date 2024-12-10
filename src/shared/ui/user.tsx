import NextImage from 'next/image';

import { Flex } from './flex';
import { Image } from './image';

export interface UserProps {
  name?: string;
  description?: string;
  url?: string;
}

export const User = (props: UserProps) => {
  const { name, description, url } = props;

  return (
    <Flex className='gap-3 items-center'>
      <Image alt={name} as={NextImage} className='h-14 w-14 rounded-full overflow-clip' src={url} />
      <Flex col>
        <p className='text-base font-semibold'>{name}</p>
        <p className='text-foreground/50 text-sm'>{description}</p>
      </Flex>
    </Flex>
  );
};
