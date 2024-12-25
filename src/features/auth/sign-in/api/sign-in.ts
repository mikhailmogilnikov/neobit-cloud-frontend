import { api, API_URLS } from '@/src/shared/api';

export interface SignInRequest {
  grant_type: 'password';
  username: string;
  password: string;
}

export interface SignInResponse {
  access_token: string;
  token_type: string;
}

export const signIn = async (data: SignInRequest) => {
  const { username, password } = data;

  const resp = await api.post<SignInResponse>(
    API_URLS.AUTH.SIGN_IN,
    {
      username,
      password,
      grant_type: 'password',
    },
    { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
  );

  return resp;
};
