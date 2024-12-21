import { toast } from 'sonner';

import { AlertModal, AlertModalProps } from '@/src/shared/ui/alert-modal';

import { IFile } from '../../../model/file.type';

interface DeleteFileModalProps extends AlertModalProps {
  file: IFile;
}

export const FileCardDeleteModal = ({ file, open, onOpenChange }: DeleteFileModalProps) => {
  const handleDeleteFile = () => {
    toast.success(`Файл "${file.name}" был удален.`);
    onOpenChange();
  };

  return (
    <AlertModal
      description={`Вы уверены, что хотите удалить файл "${file.name}"? Это действие необратимо.`}
      open={open}
      onConfirm={handleDeleteFile}
      onOpenChange={onOpenChange}
    />
  );
};
