'use client';

import { toast } from 'sonner';

import { Flex } from '@/src/shared/ui/flex';
import { formatFileSize } from '@/src/shared/lib/utils/file-size';
import { Squircle } from '@/src/shared/ui/squircle';

import { getMimeType, IFile } from '../../model/file.type';
import { getFileIcon } from '../../model/get-file-icon';
import { downloadFile } from '../../api/download-file';

import { FileCardOptions } from './options';

export interface IFileCardProps {
  file: IFile;
}

export const FileCard = ({ file }: IFileCardProps) => {
  const { object_key, size, extension } = file;

  const formattedSize = formatFileSize(size);
  const Icon = getFileIcon(extension);

  const handleDownload = async () => {
    try {
      const response = await downloadFile(file.bucket_name, file.object_key);
      const blob = new Blob([response], { type: getMimeType(extension) });

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');

      a.href = url;
      a.download = file.object_key;
      document.body.appendChild(a);
      a.click();
      a.remove();

      toast.success('Файл скачан');
    } catch (error) {
      toast.error('Ошибка при скачивании файла');
    }
  };

  return (
    <Flex col className='gap-4'>
      <button onClick={handleDownload}>
        <Squircle asChild>
          <Flex className='bg-content2 aspect-square w-full items-center justify-center rounded-xl'>
            <Icon className='h-[40%] w-[40%]' opacity={0.2} />
          </Flex>
        </Squircle>
      </button>
      <Flex className='w-full justify-between'>
        <button className='w-full text-start' onClick={handleDownload}>
          <Flex col className='w-full gap-1'>
            <h3 className='text-md font-semibold'>{object_key}</h3>
            <p className='text-xs text-gray-500'>{formattedSize}</p>
          </Flex>
        </button>
        <FileCardOptions file={file} />
      </Flex>
    </Flex>
  );
};
