import { z } from 'zod';

export const videoImageSchema = z.object({
  file: z
    .custom<FileList>()
    .refine(
      (files) => 0 < files.length,
      '動画・画像は1つ以上選択してください。'
    ),
});

export type Schema = z.infer<typeof videoImageSchema>;
