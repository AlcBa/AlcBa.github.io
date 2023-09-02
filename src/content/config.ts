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

const courseSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
});

const teachingCollection = defineCollection({
  type: 'data',
  schema: z.object({
    philosophy: z.string(),
    courses: z.array(courseSchema),
  }),
});

const teamSchema = z.object({
  name: z.string(),
  role: z.string(),
  description: z.string().optional(),
  website: z.string().url().optional(),
  imageUrl: z.string(),
});

const teamCollection = defineCollection({
  type: 'data',
  schema: z.array(teamSchema),
});

export const collections = {
  home: homeCollection,
  social: socialCollection,
  research: researchCollection,
  teaching: teachingCollection,
  team: teamCollection,
};
