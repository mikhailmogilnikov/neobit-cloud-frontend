import { IBucket } from '@/src/entities/bucket';

export const mockBuckets: IBucket[] = [
  {
    id: '1',
    bucket_name: 'Мои документы',
    file_count: 10,
    size: 1000000,
    owner_name: 'John Doe',
    owner_id: '1',
  },
  {
    id: '2',
    bucket_name: 'Фото',
    file_count: 20,
    size: 500000000,
    owner_name: 'John Doe',
    owner_id: '1',
  },
  {
    id: '3',
    bucket_name: 'Видео',
    file_count: 3,
    size: 300000000,
    owner_name: 'John Doe',
    owner_id: '1',
  },
];
