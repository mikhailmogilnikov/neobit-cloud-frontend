'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { EAppRoutes } from '@/src/shared/config/routes';

import { SignInFormState } from '../model/form.model';
import { signInSchema } from '../model/zod-schema';

export const signInAction = async (previousState: SignInFormState, formData: FormData) => {
  const data = Object.fromEntries(formData);

  const result = signInSchema.safeParse(data);

  if (!result.success) {
    return {
      email: data.email as string,
      password: data.password as string,
      error:
        result.error.flatten().fieldErrors?.email?.[0] ||
        result.error.flatten().fieldErrors?.password?.[0] ||
        null,
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const cookieStore = await cookies();

  cookieStore.set('access', '123456');
  redirect(EAppRoutes.BUCKETS);
};
