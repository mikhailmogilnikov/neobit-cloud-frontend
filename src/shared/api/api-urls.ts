const AUTH_URL = {
  SIGN_UP: '/auth/register',
  SIGN_IN: '/auth/login',
};

const BUCKETS_URL = {
  LIST: '/',
  BUCKET: (bucketId: string) => `/${bucketId}`,
  CREATE: (bucketName: string) => `/${bucketName}`,
};

const FILES_URL = (bucketId: string) => ({
  LIST: `/${bucketId}`,
  FILE: (fileId: string) => `/${bucketId}/${fileId}`,
});

const USERS_URL = {
  ME: '/users/me',
  LINKS: '/users/me/links',
  OBJECTS: '/users/me/objects',
};

export const API_URLS = {
  AUTH: AUTH_URL,
  BUCKETS: BUCKETS_URL,
  USERS: USERS_URL,
  FILES: FILES_URL,
};
