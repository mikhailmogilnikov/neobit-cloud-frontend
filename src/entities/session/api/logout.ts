'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { EAppRoutes } from '@/src/shared/config/routes';

export const logout = async () => {
  const cookieStore = await cookies();

  cookieStore.delete('access');
  cookieStore.delete('refresh');

  redirect(EAppRoutes.SIGN_IN);
};
