import { BucketPage } from '@/src/page/protected/bucket';

export default async function Bucket({ params }: { params: Promise<{ bucketId: string }> }) {
  const { bucketId } = await params;

  return <BucketPage bucketId={bucketId} />;
}
