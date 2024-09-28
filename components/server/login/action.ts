'use server';
import { AuthSchema } from '@/app/lib/schema/authSchema';
import { parseWithZod } from '@conform-to/zod';
import { redirect } from 'next/navigation';

export const login = async (prevState: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, { schema: AuthSchema });
  if (submission.status !== 'success') {
    console.log('実行');
    return submission.reply();
  }

  redirect('/register');
};
