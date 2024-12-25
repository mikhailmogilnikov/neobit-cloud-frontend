import { FileCard } from '@/src/entities/file';
import { ItemsGrid } from '@/src/shared/ui/items-grid';
import { IBucket } from '@/src/entities/bucket';

import { getFilesList } from '../api/files-list';

export const FilesList = async ({ bucketName }: { bucketName: IBucket['bucket_name'] }) => {
  const filesList = await getFilesList(bucketName);

  return (
    <ItemsGrid>
      {filesList.map((file) => (
        <FileCard key={file.id} file={file} />
      ))}
    </ItemsGrid>
  );
};
