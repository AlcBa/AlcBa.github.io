import { defineCollection, z } from 'astro:content';

const homeCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    imageUrl: z.string(),
  }),
});

const socialCollection = defineCollection({
  type: 'data',
  schema: z.object({
    googleScholar: z
      .string()
      .url()
      .refine((val) => val.includes('scholar.google.com')),
    email: z.string().email(),
    twitter: z
      .string()
      .url()
      .refine((val) => val.includes('twitter.com')),
    github: z
      .string()
      .url()
      .refine((val) => val.includes('github.com')),
  }),
});

const researchSchema = z.object({
  title: z.string(),
  publication: z.string(),
  authors: z.string(),
  pdfUrl: z
    .string()
    .refine((val) => val.endsWith('.pdf'))
    .optional(),
});

const researchCollection = defineCollection({
  type: 'data',
  schema: z.array(researchSchema),
});

export const collections = {
  home: homeCollection,
  social: socialCollection,
  research: researchCollection,
};
