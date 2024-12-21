'use client';

import { PiCaretRightBold, PiListBold } from 'react-icons/pi';
import { useState } from 'react';

import { Flex } from '@/src/shared/ui/flex';
import { Squircle } from '@/src/shared/ui/squircle';
import { ThemeSelector } from '@/src/shared/ui/theme-selector';
import { User } from '@/src/shared/ui/user';
import { Divider } from '@/src/shared/ui/flex/divider';
import { Progress } from '@/src/shared/ui/progress';
import { Modal, ModalDescription, ModalTitle } from '@/src/shared/ui/modal';

import { LogoutButton } from './logoutButton';

const user = {
  name: 'Михаил Могильников',
  description: 'mikhail.mogilnikov@gmail.com',
  url: 'https://lipsum.app/id/2/200x200',
};

export const HeaderMobile = () => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Squircle asChild>
        <Flex
          align='center'
          as='button'
          className='bg-content2 h-10 w-10 rounded-lg'
          justify='center'
          onClick={handleOpenChange}
        >
          <PiListBold className='h-5 w-5 opacity-50' />
        </Flex>
      </Squircle>
      <Modal open={open} onOpenChange={handleOpenChange}>
        <ModalTitle dialogProps={{ hidden: true }} drawerProps={{ hidden: true }}>
          Меню
        </ModalTitle>
        <ModalDescription dialogProps={{ hidden: true }} drawerProps={{ hidden: true }}>
          Меню для мобильных устройств
        </ModalDescription>
        <Flex col className='mt-8 gap-5 md:mt-2'>
          <User {...user} />
          <Flex align='center' className='mt-2 gap-2' justify='between'>
            <p className='text-base font-medium'>Перейти в профиль</p>
            <PiCaretRightBold className='h-5 w-5 opacity-50' />
          </Flex>
          <Divider />
          <Flex col className='gap-3'>
            <h4 className='text-base font-medium'>Лимиты хранилища</h4>
            <Progress progress={50} />
            <p className='text-foreground/50 text-sm'>2.02GB / 4GB (50%)</p>
          </Flex>

          <Divider />
          <Flex className='items-center justify-between'>
            <p className='text-base font-medium'>Тема оформления</p>
            <ThemeSelector />
          </Flex>
          <LogoutButton />
        </Flex>
      </Modal>
    </>
  );
};
