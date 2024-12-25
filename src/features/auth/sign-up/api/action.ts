'use server';

import { cookies } from 'next/headers';

import { ACCESS_TOKEN_COOKIE_LIVE_TIME, ECookieNames } from '@/src/shared/config/constants';

import { SignUpFormState } from '../model/form.model';
import { signUpSchema } from '../model/zod-schema';

import { signUp } from './signup';

export const signUpAction = async (previousState: SignUpFormState, formData: FormData) => {
  const data = Object.fromEntries(formData);

  const result = signUpSchema.safeParse(data);

  if (!result.success) {
    return {
      email: data.email as string,
      password: data.password as string,
      username: data.username as string,
      password_confirm: data.password_confirm as string,
      error:
        result.error.flatten().fieldErrors?.email?.[0] ||
        result.error.flatten().fieldErrors?.password?.[0] ||
        result.error.flatten().fieldErrors?.username?.[0] ||
        result.error.flatten().fieldErrors?.password_confirm?.[0] ||
        null,
      isSuccess: false,
    };
  }

  const resp = await signUp(result.data);

  const { access_token } = resp.data;

  const cookieStore = await cookies();

  cookieStore.set(ECookieNames.ACCESS_TOKEN, access_token, {
    maxAge: ACCESS_TOKEN_COOKIE_LIVE_TIME,
  });

  return {
    email: data.email as string,
    password: data.password as string,
    username: data.username as string,
    password_confirm: data.password_confirm as string,
    error: null,
    isSuccess: true,
  };
};
