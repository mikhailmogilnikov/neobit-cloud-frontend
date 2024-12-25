export type SignInFormState = {
  username: string;
  password: string;
  error: string | null;
};

export const SignInFormInitialState: SignInFormState = {
  username: '',
  password: '',
  error: null,
};

