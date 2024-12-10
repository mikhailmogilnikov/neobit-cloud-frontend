'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import * as m from 'motion/react-m';
import { AnimatePresence } from 'motion/react';
import Form from 'next/form';

import { Input, InputPassword } from '@/src/shared/ui/inputs';
import { EAppRoutes } from '@/src/shared/config/routes';
import { Button } from '@/src/shared/ui/button';
import { Squircle } from '@/src/shared/ui/squircle';

import { signInAction } from '../api/sign-in';
import { SignInFormInitialState } from '../model/form.model';

export const SignInForm = () => {
  const [state, action, isPending] = useActionState(signInAction, SignInFormInitialState);
  const { email, password, error } = state;

  return (
    <Form action={action} className='flex w-full flex-col gap-4 sm:max-w-xs'>
      <AnimatePresence>
        <m.div key='form' layout className='flex flex-col gap-4'>
          <h1 className='mb-1 text-2xl font-semibold'>Вход в систему</h1>
          <Input defaultValue={email} name='email' placeholder='Email' sizes='lg' />
          <InputPassword defaultValue={password} name='password' placeholder='Пароль' sizes='lg' />

          <Link
            className='text-foreground/50 text-sm font-medium'
            href={EAppRoutes.FORGOT_PASSWORD}
          >
            Забыли пароль?
          </Link>
        </m.div>

        {error && (
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
              {error}
            </m.p>
          </Squircle>
        )}

        <m.div key='button' layout className='flex flex-col gap-4'>
          <Button className='my-2' color='inverse' isLoading={isPending} type='submit'>
            Войти
          </Button>

          <Link className='text-sm font-semibold' href={EAppRoutes.SIGN_UP}>
            <span className='text-foreground/50'>Нет аккаунта?</span> Зарегистрироваться.
          </Link>
        </m.div>
      </AnimatePresence>
    </Form>
  );
};
