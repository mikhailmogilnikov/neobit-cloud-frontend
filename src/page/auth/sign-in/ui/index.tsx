import Link from 'next/link';

import { Button } from '@/src/shared/ui/button';
import { Flex } from '@/src/shared/ui/flex';

export const SignInPage = () => {
  return (
    <Flex col align='center' as='main' className='h-svh gap-6 px-4' justify='center'>
      <h1 className='text-2xl font-semibold'>Вход в систему</h1>
      <Button as={Link} href='/sign-up' size='md'>
        Войти
      </Button>
    </Flex>
  );
};
