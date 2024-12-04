'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import * as m from 'motion/react-m';
import { AnimatePresence } from 'motion/react';

import { Flex } from '@/src/shared/ui/flex';
import { Input } from '@/src/shared/ui/inputs';
import { EAppRoutes } from '@/src/shared/config/routes';
import { Button } from '@/src/shared/ui/button';
import { Squircle } from '@/src/shared/ui/squircle';

import { signInSchema } from '../model/zod-schema';

export const SignInPage = () => {
  const [errors, setErrors] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    const result = signInSchema.safeParse(data);

    if (!result.success) {
      setErrors(
        result.error.flatten().fieldErrors?.email?.[0] ||
          result.error.flatten().fieldErrors?.password?.[0] ||
          '',
      );

      return;
    }
    setErrors(null);
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    setIsLoading(false);
  };

  return (
    <Flex col align='center' as='main' className='gap-6 px-4' justify='center'>
      <form className='flex w-full flex-col gap-4 sm:max-w-xs' onSubmit={handleSubmit}>
        <AnimatePresence>
          <m.div key='form' layout className='flex flex-col gap-4'>
            <h1 className='mb-1 text-2xl font-semibold'>Вход в систему</h1>
            <Input name='email' placeholder='Email' sizes='lg' />
            <Input name='password' placeholder='Пароль' sizes='lg' type='password' />

            <Link
              className='text-foreground/50 text-sm font-medium'
              href={EAppRoutes.FORGOT_PASSWORD}
            >
              Забыли пароль?
            </Link>
          </m.div>

          {errors && (
            <Squircle asChild>
              <m.p
                key='error'
                animate={{ opacity: 1 }}
                className='text-danger bg-danger-200/50 rounded-lg p-3 text-base font-medium'
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                layout='position'
                transition={{ duration: 0.2 }}
              >
                {errors}
              </m.p>
            </Squircle>
          )}

          <m.div key='button' layout className='flex flex-col gap-4'>
            <Button className='my-2' color='inverse' isLoading={isLoading} type='submit'>
              Войти
            </Button>

            <Link className='text-sm font-semibold' href={EAppRoutes.SIGN_UP}>
              <span className='text-foreground/50'>Нет аккаунта?</span> Зарегистрироваться.
            </Link>
          </m.div>
        </AnimatePresence>
      </form>
    </Flex>
  );
};
