import { api, API_URLS } from '@/src/shared/api';

import { IBucket } from '../../bucket';
import { IFile } from '../model/file.type';

export const downloadFile = async (
  bucketName: IBucket['bucket_name'],
  fileObjectKey: IFile['object_key'],
) => {
  const response = await api.get<Blob>(API_URLS.FILES(bucketName).FILE(fileObjectKey), {
    responseType: 'blob',
  });

  return response.data;
};
