import { Popover, PopoverTrigger } from '@radix-ui/react-popover';
import { PiDotsThreeVerticalBold, PiPencilSimpleBold, PiTrashBold } from 'react-icons/pi';

import { PopoverContent, PopoverOption } from '@/src/shared/ui/popover';

export const CardOptions = () => {
  return (
    <Popover>
      <PopoverTrigger className='flex h-7 w-5 shrink-0'>
        <PiDotsThreeVerticalBold className='mt-1 h-5 w-5' opacity={0.5} />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverOption endContent={<PiPencilSimpleBold className='h-4 w-4' />}>
          Переименовать
        </PopoverOption>
        <PopoverOption color='danger' endContent={<PiTrashBold className='text-danger h-4 w-4' />}>
          Удалить
        </PopoverOption>
      </PopoverContent>
    </Popover>
  );
};
