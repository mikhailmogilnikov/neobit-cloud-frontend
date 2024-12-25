import { IBucket } from '@/src/entities/bucket';
import { IFile } from '@/src/entities/file';
import { API_URLS } from '@/src/shared/api';
import { api } from '@/src/shared/api';

export const getFilesList = async (bucketName: IBucket['bucket_name']) => {
  const resp = await api.get<IFile[]>(API_URLS.FILES(bucketName).LIST);

  return resp.data;
};
