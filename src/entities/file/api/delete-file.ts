import { api } from '@/src/shared/api';
import { API_URLS } from '@/src/shared/api';

import { IFile } from '../model/file.type';
import { IBucket } from '../../bucket';

export const deleteFile = async (
  bucketName: IBucket['bucket_name'],
  fileObjectKey: IFile['object_key'],
) => {
  return await api.delete(API_URLS.FILES(bucketName).FILE(fileObjectKey));
};
