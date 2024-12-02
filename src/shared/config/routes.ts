export enum EAppRoutes {
  SIGN_IN = "/sign-in",
  SIGN_UP = "/sign-up",
  FORGOT_PASSWORD = "/forgot-password",

  HOME = "/",
  BUCKETS = "/buckets",
  BUCKET = "/buckets/[bucketId]",
  PROFILE = "/profile",
}

export const generateBucketRoute = (bucketId: string) => {
  return EAppRoutes.BUCKET.replace("[bucketId]", bucketId);
};
