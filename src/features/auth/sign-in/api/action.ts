'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { EAppRoutes } from '@/src/shared/config/routes';
import { ACCESS_TOKEN_COOKIE_LIVE_TIME, ECookieNames } from '@/src/shared/config/constants';

import { SignInFormState } from '../model/form.model';
import { signInSchema } from '../model/zod-schema';

import { signIn } from './sign-in';

export const signInAction = async (previousState: SignInFormState, formData: FormData) => {
  const data = Object.fromEntries(formData);

  const result = signInSchema.safeParse(data);

  if (!result.success) {
    return {
      username: data.username as string,
      password: data.password as string,
      error:
        result.error.flatten().fieldErrors?.username?.[0] ||
        result.error.flatten().fieldErrors?.password?.[0] ||
        null,
    };
  }

  const { username, password } = result.data;

  try {
    const resp = await signIn({ username, password, grant_type: 'password' });

    const { access_token } = resp.data;

    const cookieStore = await cookies();

    cookieStore.set(ECookieNames.ACCESS_TOKEN, access_token, {
      maxAge: ACCESS_TOKEN_COOKIE_LIVE_TIME,
    });
  } catch (error) {
    return {
      username: data.username as string,
      password: data.password as string,
      error: 'Неверное имя пользователя или пароль',
    };
  }

  redirect(EAppRoutes.BUCKETS);
};
