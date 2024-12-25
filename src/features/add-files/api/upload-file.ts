import { api, API_URLS } from '@/src/shared/api';

export const uploadFile = async (file: File, bucketName: string) => {
  const formData = new FormData();

  formData.append('file', file);

  return await api.put(API_URLS.FILES(bucketName).FILE(file.name), formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
