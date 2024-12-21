import Link from 'next/link';

import { Flex } from '@/src/shared/ui/flex';
import { formatFileSize } from '@/src/shared/lib/utils/file-size';
import { Squircle } from '@/src/shared/ui/squircle';

import { IFile } from '../../model/file.type';
import { getFileIcon } from '../../lib/get-file-icon';

import { FileCardOptions } from './options';

export interface IFileCardProps {
  file: IFile;
}

export const FileCard = ({ file }: IFileCardProps) => {
  const { name, size, id, download_url, extension } = file;

  const formattedSize = formatFileSize(size);
  const Icon = getFileIcon(extension);

  return (
    <Flex col className='gap-4'>
      <Link href={download_url} target='_blank'>
        <Squircle asChild>
          <Flex className='bg-content2 aspect-square w-full items-center justify-center rounded-xl'>
            <Icon className='h-[40%] w-[40%]' opacity={0.2} />
          </Flex>
        </Squircle>
      </Link>
      <Flex className='w-full justify-between'>
        <Link className='w-full' href={download_url} target='_blank'>
          <Flex col className='w-full gap-1'>
            <h3 className='text-md font-semibold'>{name}</h3>
            <p className='text-xs text-gray-500'>{formattedSize}</p>
          </Flex>
        </Link>
        <FileCardOptions file={file} />
      </Flex>
    </Flex>
  );
};
