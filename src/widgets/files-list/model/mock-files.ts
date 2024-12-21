import { IFile } from '@/src/entities/file';
import { FileExtension } from '@/src/entities/file';

export const mockFiles: IFile[] = [
  {
    id: '1',
    name: 'file1.txt',
    size: 20000,
    download_url: 'https://example.com/file1.txt',
    extension: FileExtension.TXT,
    bucket_id: '1',
  },
  {
    id: '2',
    name: 'file2.pdf',
    size: 4320000,
    download_url: 'https://example.com/file2.pdf',
    extension: FileExtension.PDF,
    bucket_id: '1',
  },
  {
    id: '3',
    name: 'file3.jpg',
    size: 2160000,
    download_url: 'https://example.com/file3.jpg',
    extension: FileExtension.JPG,
    bucket_id: '1',
  },
  {
    id: '4',
    name: 'file4.mp4',
    size: 715000000,
    download_url: 'https://example.com/file4.mp4',
    extension: FileExtension.MP4,
    bucket_id: '1',
  },
  {
    id: '5',
    name: 'file5.mp3',
    size: 3670000,
    download_url: 'https://example.com/file5.mp3',
    extension: FileExtension.MP3,
    bucket_id: '1',
  },
  {
    id: '6',
    name: 'file6.html',
    size: 214000,
    download_url: 'https://example.com/file6.html',
    extension: FileExtension.HTML,
    bucket_id: '1',
  },
];
