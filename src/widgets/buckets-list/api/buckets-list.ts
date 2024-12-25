import { IBucket } from '@/src/entities/bucket';
import { api } from '@/src/shared/api';
import { API_URLS } from '@/src/shared/api';

export const getBucketsList = async () => {
  const resp = await api.get<IBucket[]>(API_URLS.BUCKETS.LIST);

  return resp.data;
};
