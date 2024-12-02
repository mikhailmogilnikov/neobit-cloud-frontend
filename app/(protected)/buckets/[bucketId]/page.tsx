import { BucketPage } from '@/src/page/protected/bucket';

export default async function Bucket(props: { params: Promise<{ bucketId: string }> }) {
  const params = await props.params;

  return <BucketPage bucketId={params.bucketId} />;
}
