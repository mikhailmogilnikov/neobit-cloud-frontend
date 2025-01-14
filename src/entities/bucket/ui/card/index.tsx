import { PiFolder } from 'react-icons/pi';
import Link from 'next/link';

import { Flex } from '@/src/shared/ui/flex';
import { formatFileSize } from '@/src/shared/lib/utils/file-size';
import { Squircle } from '@/src/shared/ui/squircle';
import { plural } from '@/src/shared/lib/utils/common';
import { generateBucketRoute } from '@/src/shared/config/routes';

import { IBucket } from '../../model/bucket.type';

import { CardOptions } from './options';

export interface IBucketCardProps {
  bucket: IBucket;
}

export const BucketCard = ({ bucket }: IBucketCardProps) => {
  const { bucket_name, file_count, size } = bucket;

  const formattedSize = formatFileSize(size);

  return (
    <Flex col className='gap-4'>
      <Link href={generateBucketRoute(bucket_name)}>
        <Squircle asChild>
          <Flex className='bg-content2 aspect-square w-full items-center justify-center rounded-xl'>
            <PiFolder className='h-1/2 w-1/2' opacity={0.2} />
          </Flex>
        </Squircle>
      </Link>
      <Flex className='w-full justify-between'>
        <Link className='w-full' href={generateBucketRoute(bucket_name)}>
          <Flex col className='w-full gap-1'>
            <h3 className='text-md font-semibold'>{bucket_name}</h3>
            <p className='text-xs text-gray-500'>
              {file_count} {plural(file_count, ['файл', 'файла', 'файлов'])}, {formattedSize}
            </p>
          </Flex>
        </Link>
        <CardOptions bucket={bucket} />
      </Flex>
    </Flex>
  );
};
