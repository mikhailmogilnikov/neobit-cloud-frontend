import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { AlertModal, AlertModalProps } from '@/src/shared/ui/alert-modal';

import { IBucket } from '../../../model/bucket.type';
import { deleteBucket } from '../../../api/delete-bucket';

interface DeleteBucketModalProps extends AlertModalProps {
  bucket: IBucket;
}

export const DeleteBucketModal = ({ open, onOpenChange, bucket }: DeleteBucketModalProps) => {
  const { refresh } = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteBucket = async () => {
    setIsLoading(true);
    await deleteBucket(bucket.bucket_name);
    toast.success(`Папка "${bucket.bucket_name}" была удалена.`);
    onOpenChange();
    refresh();
    setIsLoading(false);
  };

  return (
    <AlertModal
      confirmButtonProps={{ isLoading }}
      description={`Вы уверены, что хотите удалить папку "${bucket.bucket_name}"? Это действие необратимо.`}
      open={open}
      onConfirm={handleDeleteBucket}
      onOpenChange={onOpenChange}
    />
  );
};
