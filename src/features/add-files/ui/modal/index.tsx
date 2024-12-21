import { Fragment, useState } from 'react';
import { toast } from 'sonner';
import { PiCloudArrowUp, PiFile, PiTrash } from 'react-icons/pi';

import { Button } from '@/src/shared/ui/button';
import { Flex } from '@/src/shared/ui/flex';
import { Modal, ModalDescription, ModalProps, ModalTitle } from '@/src/shared/ui/modal';
import { plural } from '@/src/shared/lib/utils/common';
import { FileTrigger } from '@/src/shared/ui/file-trigger';
import { Divider } from '@/src/shared/ui/flex/divider';
import { formatFileSize } from '@/src/shared/lib/utils/file-size';
import { Squircle } from '@/src/shared/ui/squircle';

interface AddFilesModalProps extends ModalProps {}

export const AddFilesModal = ({ open, onOpenChange }: AddFilesModalProps) => {
  const [files, setFiles] = useState<FileList | null>(null);

  const filesCount = files?.length || 0;

  const isDisabled = !filesCount || filesCount > 10;

  const handleCloseModal = () => {
    onOpenChange();

    setTimeout(() => {
      setFiles(null);
    }, 300);
  };

  const handleDeleteFile = (file: File) => {
    setFiles((prev) => {
      if (!prev) return prev;

      const newFiles = Array.from(prev).filter((f) => f.name !== file.name);
      const newFileList = new DataTransfer();

      newFiles.forEach((file) => newFileList.items.add(file));

      return newFileList.files;
    });
  };

  const handleCreateFiles = () => {
    toast.success(
      `${plural(filesCount, ['Добавлен', 'Добавлено', 'Добавлено'])} ${filesCount} ${plural(filesCount, ['файл', 'файла', 'файлов'])}.`,
    );
    handleCloseModal();
  };

  return (
    <Modal open={open} onOpenChange={handleCloseModal}>
      <ModalTitle>Загрузка файлов</ModalTitle>
      <ModalDescription dialogProps={{ hidden: true }} drawerProps={{ hidden: true }}>
        Загрузка файлов
      </ModalDescription>
      <Flex col className='h-full gap-8 md:mt-4'>
        <Flex col className='gap-8 md:max-h-[60svh] md:overflow-y-scroll'>
          <FileTrigger multiple onAttach={setFiles}>
            <Button
              className='h-fit w-full flex-col items-center justify-center gap-2 py-6'
              size='lg'
            >
              <PiCloudArrowUp className='h-10 w-10 opacity-50' />
              Добавить файлы
            </Button>
          </FileTrigger>

          {files?.length && (
            <Flex col className='gap-4'>
              {Array.from(files).map((file, index) => (
                <Fragment key={file.name}>
                  <Flex key={file.name} className='gap-3'>
                    <Squircle asChild>
                      <Flex className='bg-muted bg-default h-10 w-10 shrink-0 items-center justify-center rounded-md'>
                        <PiFile />
                      </Flex>
                    </Squircle>

                    <Flex col className='w-full gap-1'>
                      <p className='truncate text-sm text-wrap break-all'>{file.name}</p>
                      <p className='text-foreground/50 text-xs'>{formatFileSize(file.size)}</p>
                    </Flex>

                    <Squircle asChild>
                      <Flex
                        as='button'
                        className='bg-muted bg-default h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-md'
                        onClick={() => handleDeleteFile(file)}
                      >
                        <PiTrash className='text-danger h-4 w-4' />
                      </Flex>
                    </Squircle>
                  </Flex>
                  {index < files.length - 1 && <Divider />}
                </Fragment>
              ))}
            </Flex>
          )}
        </Flex>

        <p className='text-foreground/50 -my-4 text-sm'>
          Максимальное количество файлов для загрузки - 10.
        </p>

        <Flex className='gap-4'>
          <Button className='w-full' onClick={handleCloseModal}>
            Отмена
          </Button>
          <Button
            className='w-full'
            color='inverse'
            isDisabled={isDisabled}
            onClick={handleCreateFiles}
          >
            Загрузить
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
};
