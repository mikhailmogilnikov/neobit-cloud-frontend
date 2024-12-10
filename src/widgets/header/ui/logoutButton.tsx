import Form from 'next/form';

import { logout } from '@/src/entities/session';
import { Button } from '@/src/shared/ui/button';

export const LogoutButton = () => {
  return (
    <Form action={logout} className='w-full'>
      <Button className='w-full' type='submit'>
        Выйти из аккаунта
      </Button>
    </Form>
  );
};
