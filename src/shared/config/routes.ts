export enum EAppRoutes {
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
  FORGOT_PASSWORD = '/forgot-password',

  HOME = '/',
  BUCKETS = '/buckets',
  BUCKET = '/buckets/[bucketId]',
  PROFILE = '/profile',
}

export const AppPrivateRoutes = [
  EAppRoutes.HOME,
  EAppRoutes.BUCKETS,
  EAppRoutes.BUCKET,
  EAppRoutes.PROFILE,
];

export const AppPublicRoutes = [EAppRoutes.SIGN_IN, EAppRoutes.SIGN_UP, EAppRoutes.FORGOT_PASSWORD];

export const generateBucketRoute = (bucketId: string) => {
  return EAppRoutes.BUCKET.replace('[bucketId]', bucketId);
};
