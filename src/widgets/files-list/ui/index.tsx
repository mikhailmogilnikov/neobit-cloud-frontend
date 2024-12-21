import { FileCard, IFile } from '@/src/entities/file';
import { ItemsGrid } from '@/src/shared/ui/items-grid';

import { mockFiles } from '../model/mock-files';

export const FilesList = async () => {
  const files = await new Promise<IFile[]>((resolve) => setTimeout(() => resolve(mockFiles), 1500));

  return (
    <ItemsGrid>
      {files.map((file) => (
        <FileCard key={file.id} file={file} />
      ))}
    </ItemsGrid>
  );
};
