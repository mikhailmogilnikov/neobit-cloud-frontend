'use server';

export const signInAction = async (formData: FormData) => {
  const email = formData.get('email');
  const password = formData.get('password');

  return await { error: 'test' };

  await new Promise((resolve) => setTimeout(resolve, 3000));
};
