import { useState } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

import { Button } from '@/src/shared/ui/button';
import { Flex } from '@/src/shared/ui/flex';
import { Input } from '@/src/shared/ui/inputs';
import { Modal, ModalProps, ModalTitle } from '@/src/shared/ui/modal';

import { createBucket } from '../../api/create-bucket';

interface AddBucketModalProps extends ModalProps {}

export const AddBucketModal = ({ open, onOpenChange }: AddBucketModalProps) => {
  const { refresh } = useRouter();
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => {
    onOpenChange();
    setTimeout(() => {
      setName('');
    }, 200);
  };

  const handleCreateBucket = async () => {
    try {
      setIsLoading(true);
      await createBucket({ bucket_name: name });
      toast.success(`Папка "${name}" создана.`);
      handleClose();
      refresh();
    } catch (error) {
      toast.error('Ошибка при создании папки');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal open={open} onOpenChange={handleClose}>
      <ModalTitle>Новая папка</ModalTitle>
      <Flex col className='gap-8 md:mt-4'>
        <Input
          autoFocus
          placeholder='Введите название'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Flex className='gap-4'>
          <Button className='w-full' onClick={handleClose}>
            Отмена
          </Button>
          <Button
            className='w-full'
            color='inverse'
            isDisabled={!name}
            isLoading={isLoading}
            onClick={handleCreateBucket}
          >
            Создать
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
};
