import { z } from 'zod';

export const signInSchema = z.object({
  username: z.string().min(3, 'Имя пользователя должно быть длиннее 3 символов'),
  password: z.string().min(8, 'Пароль должен быть длиннее 8 символов'),
});
