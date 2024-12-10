import { Flex } from '@/src/shared/ui/flex';
import { SignInForm } from '@/src/features/auth/sign-in';

export const SignInPage = () => {
  return (
    <Flex col align='center' as='main' className='gap-6 px-4 pb-24' justify='center'>
      <SignInForm />
    </Flex>
  );
};
