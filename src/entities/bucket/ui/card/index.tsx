import { PiFolder } from 'react-icons/pi';

import { Flex } from '@/src/shared/ui/flex';
import { formatFileSize } from '@/src/shared/lib/utils/file-size';
import { Squircle } from '@/src/shared/ui/squircle';
import { plural } from '@/src/shared/lib/utils/common';

import { IBucket } from '../../model/bucket.type';

export interface IBucketCardProps {
  bucket: IBucket;
}

export const BucketCard = ({ bucket }: IBucketCardProps) => {
  const { name, files_count, size } = bucket;

  const formattedSize = formatFileSize(size);

  return (
    <Flex col className='gap-4'>
      <Squircle asChild>
        <Flex className='bg-content2 aspect-square w-full items-center justify-center rounded-xl'>
          <PiFolder className='h-1/2 w-1/2' opacity={0.2} />
        </Flex>
      </Squircle>
      <Flex col className='gap-1'>
        <h3 className='text-md font-semibold'>{name}</h3>
        <p className='text-xs text-gray-500'>
          {files_count} {plural(files_count, ['файл', 'файла', 'файлов'])}, {formattedSize}
        </p>
      </Flex>
    </Flex>
  );
};
