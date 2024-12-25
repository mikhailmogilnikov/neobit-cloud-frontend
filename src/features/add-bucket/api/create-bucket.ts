import { api, API_URLS } from '@/src/shared/api';

export interface CreateBucketRequest {
  bucket_name: string;
}

export const createBucket = async (data: CreateBucketRequest) => {
  const resp = await api.put(API_URLS.BUCKETS.CREATE(data.bucket_name));

  return resp;
};
