import { api, API_URLS } from '@/src/shared/api';

export interface SignUpRequest {
  email: string;
  password: string;
  username: string;
}

export interface SignUpResponse {
  access_token: string;
  token_type: string;
}

export const signUp = async (data: SignUpRequest) => {
  const { email, password, username } = data;
  const resp = await api.post<SignUpResponse>(API_URLS.AUTH.SIGN_UP, { email, password, username });

  return resp;
};
