import { z } from 'zod';

export const signUpSchema = z
  .object({
    email: z.string().email('Неверный формат email'),
    username: z.string().min(3, 'Имя пользователя должно быть длиннее 3 символов'),
    password: z.string().min(8, 'Пароль должен быть длиннее 8 символов'),
    password_confirm: z.string().min(8, 'Пароль должен быть длиннее 8 символов'),
  })
  .refine((data) => data.password === data.password_confirm, {
    path: ['password_confirm'],
    message: 'Пароли не совпадают',
  });
