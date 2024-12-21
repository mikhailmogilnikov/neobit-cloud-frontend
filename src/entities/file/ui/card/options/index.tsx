'use client';

import { Popover, PopoverTrigger } from '@radix-ui/react-popover';
import { PiDotsThreeVerticalBold, PiDownloadSimpleBold, PiTrashBold } from 'react-icons/pi';
import { useState } from 'react';

import { PopoverContent, PopoverOption } from '@/src/shared/ui/popover';

import { IFile } from '../../../model/file.type';

import { FileCardDeleteModal } from './delete-modal';

export const FileCardOptions = ({ file }: { file: IFile }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal((isOpen) => !isOpen);
  };

  const handleDownload = () => {
    window.open(file.download_url, '_blank');
  };

  return (
    <>
      <Popover>
        <PopoverTrigger className='flex h-7 w-5 shrink-0'>
          <PiDotsThreeVerticalBold className='mt-1 h-5 w-5' opacity={0.5} />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverOption
            endContent={<PiDownloadSimpleBold className='h-4 w-4' />}
            onClick={handleDownload}
          >
            Загрузить
          </PopoverOption>
          <PopoverOption
            color='danger'
            endContent={<PiTrashBold className='text-danger h-4 w-4' />}
            onClick={handleOpenDeleteModal}
          >
            Удалить
          </PopoverOption>
        </PopoverContent>
      </Popover>
      <FileCardDeleteModal
        file={file}
        open={openDeleteModal}
        onOpenChange={handleOpenDeleteModal}
      />
    </>
  );
};
