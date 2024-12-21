import { useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/src/shared/ui/button';
import { Flex } from '@/src/shared/ui/flex';
import { Input } from '@/src/shared/ui/inputs';
import { Modal, ModalProps, ModalTitle } from '@/src/shared/ui/modal';

interface AddBucketModalProps extends ModalProps {}

export const AddBucketModal = ({ open, onOpenChange }: AddBucketModalProps) => {
  const [name, setName] = useState('');

  const handleCreateBucket = () => {
    toast.success(`Папка "${name}" создана.`);
    onOpenChange();
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalTitle>Новая папка</ModalTitle>
      <Flex col className='gap-8 md:mt-4'>
        <Input
          autoFocus
          placeholder='Введите название'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Flex className='gap-4'>
          <Button className='w-full' onClick={onOpenChange}>
            Отмена
          </Button>
          <Button
            className='w-full'
            color='inverse'
            isDisabled={!name}
            onClick={handleCreateBucket}
          >
            Создать
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
};
