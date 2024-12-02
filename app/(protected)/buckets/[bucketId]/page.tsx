import { BucketPage } from '@/src/page/protected/bucket';

export default function Bucket({ params }: { params: { bucketId: string } }) {
  return <BucketPage bucketId={params.bucketId} />;
}
