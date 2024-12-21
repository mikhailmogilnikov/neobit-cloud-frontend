'use client';

import { PiPlusBold } from 'react-icons/pi';
import { useState } from 'react';

import { Button } from '@/src/shared/ui/button';

import { AddBucketModal } from '../modal';

export const AddBucketButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Button className='flex items-center gap-2' color='inverse' onClick={handleOpenChange}>
        <PiPlusBold />
        Новая папка
      </Button>
      <AddBucketModal open={open} onOpenChange={handleOpenChange} />
    </>
  );
};
