import { toast } from 'sonner';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/src/shared/ui/button';
import { Flex } from '@/src/shared/ui/flex';
import { Input } from '@/src/shared/ui/inputs';
import { Modal, ModalDescription, ModalTitle } from '@/src/shared/ui/modal';

import { IBucket } from '../../../model/bucket.type';

export const RenameBucketModal = ({
  open,
  onOpenChange,
  bucket,
}: {
  open: boolean;
  onOpenChange: () => void;
  bucket: IBucket;
}) => {
  const { id, bucket_name } = bucket;

  const { refresh } = useRouter();

  const [newName, setNewName] = useState(bucket_name);

  const handleSubmit = async () => {
    refresh();
    toast.success(`Папка "${bucket_name}" переименована в "${newName}"`);
    onOpenChange();
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalTitle>Переименовать папку</ModalTitle>

      <ModalDescription dialogProps={{ hidden: true }} drawerProps={{ hidden: true }}>
        Введите новое название для папки.
      </ModalDescription>

      <Input
        autoFocus
        className='mt-0 lg:mt-4'
        defaultValue={bucket_name}
        placeholder='Новое название папки'
        sizes='md'
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />

      <Flex className='mt-4 gap-4'>
        <Button className='w-full' onClick={onOpenChange}>
          Отмена
        </Button>
        <Button
          className='w-full'
          color='inverse'
          isDisabled={newName === bucket_name}
          onClick={handleSubmit}
        >
          Переименовать
        </Button>
      </Flex>
    </Modal>
  );
};
