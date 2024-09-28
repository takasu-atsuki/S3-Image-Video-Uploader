import { z } from 'zod';

export const AuthSchema = z.object({
  email: z
    .string({ required_error: 'メールアドレスは必須です。' })
    .email('メールアドレスの形式で入力してください。'),
  password: z
    .string({ required_error: 'パスワードは必須です。' })
    .min(7, 'パスワードは8文字以上を入力してください。')
    .regex(/[0-9]+/, '半角数字を1文字以上入力してください。')
    .regex(/[a-z]+/, '半角英字(小文字)を1文字以上入力してください。')
    .regex(/[A-Z]+/, '半角英字(大文字)を1文字以上入力してください。')
    .regex(
      /[@ | % | _ | - | * | + | & | $ | #]+/,
      '記号(@,%,_,-,*,+,&,$,#)を1文字以上入力してください。'
    ),
});

export type AuthParam = z.infer<typeof AuthSchema>;
