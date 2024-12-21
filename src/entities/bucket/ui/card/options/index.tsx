'use client';

import { Popover, PopoverTrigger } from '@radix-ui/react-popover';
import { PiDotsThreeVerticalBold, PiPencilSimpleBold, PiTrashBold } from 'react-icons/pi';
import { useState } from 'react';

import { PopoverContent, PopoverOption } from '@/src/shared/ui/popover';

import { IBucket } from '../../../model/bucket.type';

import { RenameBucketModal } from './rename-modal';
import { DeleteBucketModal } from './delete-modal';

export const CardOptions = ({ bucket }: { bucket: IBucket }) => {
  const [openRenameModal, setOpenRenameModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleOpenRenameModal = () => {
    setOpenRenameModal((prev) => !prev);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal((prev) => !prev);
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
        <PopoverOption
          color='danger'
          endContent={<PiTrashBold className='text-danger h-4 w-4' />}
          onClick={handleOpenDeleteModal}
        >
          Удалить
        </PopoverOption>
      </PopoverContent>
      <RenameBucketModal
        bucket={bucket}
        open={openRenameModal}
        onOpenChange={handleOpenRenameModal}
      />
      <DeleteBucketModal
        bucket={bucket}
        open={openDeleteModal}
        onOpenChange={handleOpenDeleteModal}
      />
    </Popover>
  );
};
