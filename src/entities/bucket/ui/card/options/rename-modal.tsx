import { Button } from '@/src/shared/ui/button';
import { Flex } from '@/src/shared/ui/flex';
import { Input } from '@/src/shared/ui/inputs';
import { Modal, ModalDescription, ModalTitle } from '@/src/shared/ui/modal';

export const RenameBucketModal = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: () => void;
}) => {
  const handleSubmit = () => {
    onOpenChange();
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalTitle>Переименовать папку</ModalTitle>

      <Input autoFocus className='mt-0 lg:mt-4' placeholder='Новое название папки' sizes='lg' />

      <ModalDescription dialogProps={{ hidden: true }} drawerProps={{ hidden: true }}>
        Введите новое название для папки.
      </ModalDescription>

      <Flex className='mt-4 gap-4'>
        <Button className='w-full' size='lg' onClick={onOpenChange}>
          Отмена
        </Button>
        <Button className='w-full' color='inverse' size='lg' onClick={handleSubmit}>
          Переименовать
        </Button>
      </Flex>
    </Modal>
  );
};
