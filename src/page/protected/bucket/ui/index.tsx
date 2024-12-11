// export const StaticBucketsPage = async ({ children }: { children: React.ReactNode }) => {
//   'use cache';

//   return (
//     <Flex col as='main' className='container mx-auto gap-4 p-4'>
//       <SectionHeader backable>Бакет</SectionHeader>
//       {children}
//     </Flex>
//   );
// };

export const BucketPage = async ({ bucketId }: { bucketId: Promise<string> }) => {
  const bucket = await bucketId;

  return <div>{bucket}</div>;
};
