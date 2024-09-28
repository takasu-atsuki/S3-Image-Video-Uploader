'use server';
import { videoImageSchema } from '@/app/lib/schema/videoImageSchema';
import { parseWithZod } from '@conform-to/zod';
import { redirect } from 'next/navigation';

export const upload = async (prevState: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, { schema: videoImageSchema });
  console.log(submission);
  console.log(formData);
  if (submission.status !== 'success') {
    return submission.reply();
  }

  redirect('/download');
};
