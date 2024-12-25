import { api, API_URLS } from '@/src/shared/api';

import { IBucket } from '../model/bucket.type';

export const deleteBucket = async (name: IBucket['bucket_name']) => {
  const resp = await api.delete(API_URLS.BUCKETS.BUCKET(name));

  return resp.data;
};
