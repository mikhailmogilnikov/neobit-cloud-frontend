import { SignUpForm } from '@/src/features/auth/sign-up';
import { Flex } from '@/src/shared/ui/flex';

export const SignUpPage = () => {
  return (
    <Flex col align='center' as='main' className='gap-6 px-4 pb-24' justify='center'>
      <SignUpForm />
    </Flex>
  );
};
