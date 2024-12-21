import { toast } from 'sonner';

import { AlertModal, AlertModalProps } from '@/src/shared/ui/alert-modal';

import { IBucket } from '../../../model/bucket.type';

interface DeleteBucketModalProps extends AlertModalProps {
  bucket: IBucket;
}

export const DeleteBucketModal = ({ open, onOpenChange, bucket }: DeleteBucketModalProps) => {
  const handleDeleteBucket = () => {
    toast.success(`Папка "${bucket.name}" была удалена.`);
    onOpenChange();
  };

  return (
    <AlertModal
      description={`Вы уверены, что хотите удалить папку "${bucket.name}"? Это действие необратимо.`}
      open={open}
      onConfirm={handleDeleteBucket}
      onOpenChange={onOpenChange}
    />
  );
};
