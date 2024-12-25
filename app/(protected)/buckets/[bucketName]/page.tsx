import { BucketPage } from '@/src/page/protected/bucket';

export default async function Bucket({ params }: { params: Promise<{ bucketName: string }> }) {
  const { bucketName } = await params;

  return <BucketPage bucketName={bucketName} />;
}
