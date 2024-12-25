import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

import { AlertModal, AlertModalProps } from '@/src/shared/ui/alert-modal';

import { IFile } from '../../../model/file.type';
import { deleteFile } from '../../../api/delete-file';

interface DeleteFileModalProps extends AlertModalProps {
  file: IFile;
}

export const FileCardDeleteModal = ({ file, open, onOpenChange }: DeleteFileModalProps) => {
  const { refresh } = useRouter();
  
  const handleDeleteFile = async () => {
    try {
      await deleteFile(file.bucket_name, file.object_key);

      refresh();

      toast.success(`Файл "${file.object_key}" был удален.`);
      onOpenChange();
    } catch (error) {
      toast.error('Ошибка при удалении файла');
    }
  };

  return (
    <AlertModal
      description={`Вы уверены, что хотите удалить файл "${file.object_key}"? Это действие необратимо.`}
      open={open}
      onConfirm={handleDeleteFile}
      onOpenChange={onOpenChange}
    />
  );
};
