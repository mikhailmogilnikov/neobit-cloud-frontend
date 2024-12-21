'use client';

import { PiFileArrowUpBold } from 'react-icons/pi';
import { useState } from 'react';

import { Button } from '@/src/shared/ui/button';

import { AddFilesModal } from '../modal';

export const AddFilesButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Button className='flex items-center gap-2' color='inverse' onClick={handleOpenChange}>
        <PiFileArrowUpBold size={20} />
        Загрузить файлы
      </Button>
      <AddFilesModal open={open} onOpenChange={handleOpenChange} />
    </>
  );
};
