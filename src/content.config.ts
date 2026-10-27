import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    // CMS가 비워 둔 날짜를 ''로 저장하므로 빈 값은 없는 것으로 처리한다.
    updatedDate: z.preprocess((v) => (v === '' || v === null ? undefined : v), z.coerce.date().optional()),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
