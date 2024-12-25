'use client';

import Link from 'next/link';
import { useActionState, useEffect } from 'react';
import * as m from 'motion/react-m';
import { AnimatePresence } from 'motion/react';
import Form from 'next/form';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

import { Input, InputPassword } from '@/src/shared/ui/inputs';
import { EAppRoutes } from '@/src/shared/config/routes';
import { Button } from '@/src/shared/ui/button';
import { Squircle } from '@/src/shared/ui/squircle';

import { signUpAction } from '../api/action';
import { SignUpFormInitialState } from '../model/form.model';

export const SignUpForm = () => {
  const { push, prefetch } = useRouter();

  const [state, action, isPending] = useActionState(signUpAction, SignUpFormInitialState);
  const { email, password, username, password_confirm, error, isSuccess } = state;

  useEffect(() => {
    prefetch(EAppRoutes.SIGN_IN);
  }, [prefetch]);

  useEffect(() => {
    if (isSuccess) {
      toast.success('Регистрация прошла успешно');
      push(EAppRoutes.SIGN_IN);
    }
  }, [isSuccess, push]);

  return (
    <Form action={action} className='flex w-full flex-col gap-4 sm:max-w-xs'>
      <AnimatePresence>
        <m.div key='form' layout className='flex flex-col gap-4'>
          <h1 className='mb-1 text-2xl font-semibold'>Регистрация</h1>
          <Input
            autoComplete='username'
            defaultValue={username}
            name='username'
            placeholder='Имя пользователя'
            sizes='lg'
          />
          <Input
            autoComplete='email'
            defaultValue={email}
            name='email'
            placeholder='Email'
            sizes='lg'
          />
          <InputPassword
            autoComplete='new-password'
            defaultValue={password}
            name='password'
            placeholder='Пароль'
            sizes='lg'
          />
          <InputPassword
            autoComplete='new-password'
            defaultValue={password_confirm}
            name='password_confirm'
            placeholder='Повторите пароль'
            sizes='lg'
          />
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
            Зарегистрироваться
          </Button>

          <Link className='text-sm font-semibold' href={EAppRoutes.SIGN_IN}>
            <span className='text-foreground/50'>Уже есть аккаунт?</span> Войти.
          </Link>
        </m.div>
      </AnimatePresence>
    </Form>
  );
};
