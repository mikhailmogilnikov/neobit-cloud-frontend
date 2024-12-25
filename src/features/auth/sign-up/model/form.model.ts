export type SignUpFormState = {
  email: string;
  username: string;
  password: string;
  password_confirm: string;
  error: string | null;
  isSuccess: boolean;
};

export const SignUpFormInitialState: SignUpFormState = {
  email: '',
  username: '',
  password: '',
  password_confirm: '',
  error: null,
  isSuccess: false,
};
