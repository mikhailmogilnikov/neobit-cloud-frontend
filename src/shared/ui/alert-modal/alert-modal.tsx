'use client';

import { Modal, ModalDescription, ModalTitle } from '../modal';
import { Flex } from '../flex';
import { Button } from '../button';
import { ButtonProps } from '../button/button';

export interface AlertModalProps {
  open: boolean;
  onOpenChange: () => void;
  title?: string;
  description?: string;
  onConfirm?: () => void;
  confirmButtonProps?: ButtonProps<'button'>;
  cancelButtonProps?: ButtonProps<'button'>;
}

export const AlertModal = (props: AlertModalProps) => {
  const {
    open,
    onOpenChange,
    title = 'Подтвердите действие',
    description,
    onConfirm,

    confirmButtonProps,
    cancelButtonProps,
  } = props;

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalTitle>{title}</ModalTitle>
      {description && (
        <ModalDescription dialogProps={{ className: 'mt-2' }}>{description}</ModalDescription>
      )}
      <Flex className='mt-4 gap-4'>
        <Button className='w-full' size='md' onClick={onOpenChange} {...cancelButtonProps}>
          {cancelButtonProps?.children || 'Отмена'}
        </Button>
        <Button
          className='w-full'
          color='danger'
          size='md'
          onClick={onConfirm}
          {...confirmButtonProps}
        >
          {confirmButtonProps?.children || 'Подтвердить'}
        </Button>
      </Flex>
    </Modal>
  );
};
