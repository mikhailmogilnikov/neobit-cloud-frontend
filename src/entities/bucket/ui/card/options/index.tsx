'use client';

import { Popover, PopoverTrigger } from '@radix-ui/react-popover';
import { PiDotsThreeVerticalBold, PiPencilSimpleBold, PiTrashBold } from 'react-icons/pi';
import { useState } from 'react';

import { PopoverContent, PopoverOption } from '@/src/shared/ui/popover';

import { RenameBucketModal } from './rename-modal';

export const CardOptions = () => {
  const [openRenameModal, setOpenRenameModal] = useState(false);

  const handleOpenRenameModal = () => {
    setOpenRenameModal((prev) => !prev);
  };

  return (
    <Popover>
      <PopoverTrigger className='flex h-7 w-5 shrink-0'>
        <PiDotsThreeVerticalBold className='mt-1 h-5 w-5' opacity={0.5} />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverOption
          endContent={<PiPencilSimpleBold className='h-4 w-4' />}
          onClick={handleOpenRenameModal}
        >
          Переименовать
        </PopoverOption>
        <PopoverOption color='danger' endContent={<PiTrashBold className='text-danger h-4 w-4' />}>
          Удалить
        </PopoverOption>
      </PopoverContent>
      <RenameBucketModal open={openRenameModal} onOpenChange={handleOpenRenameModal} />
    </Popover>
  );
};
