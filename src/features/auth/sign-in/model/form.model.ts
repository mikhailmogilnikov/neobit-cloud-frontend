export type SignInFormState = {
  email: string;
  password: string;
  error: string | null;
};

export const SignInFormInitialState: SignInFormState = {
  email: '',
  password: '',
  error: null,
};
