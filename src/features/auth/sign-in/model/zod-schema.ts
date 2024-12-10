import { z } from 'zod';

export const signInSchema = z.object({
  email: z.string().email('Неверный формат email'),
  password: z.string().min(8, 'Пароль должен быть длиннее 8 символов'),
});
