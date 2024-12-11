import { IBucket } from '@/src/entities/bucket';

export const mockBuckets: IBucket[] = [
  {
    id: '1',
    name: 'Мои документы',
    files_count: 10,
    size: 1000000,
  },
  {
    id: '2',
    name: 'Фото',
    files_count: 20,
    size: 500000000,
  },
  {
    id: '3',
    name: 'Видео',
    files_count: 3,
    size: 300000000,
  },
];
