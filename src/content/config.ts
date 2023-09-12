import { defineCollection, type ImageFunction, z } from 'astro:content';

const homeCollection = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      imageUrl: image(),
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
  publication: z.string().optional(),
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

const dataSchema = z.object({
  title: z.string(),
  description: z.string(),
});

const dataCollection = defineCollection({
  type: 'data',
  schema: z.array(dataSchema),
});

const teamSchema = (image: ImageFunction) =>
  z.object({
    firstName: z.string(),
    lastName: z.string().optional(),
    role: z.string(),
    description: z.string(),
    website: z.string().url().optional(),
    imageUrl: image(),
  });

const teamCollection = defineCollection({
  type: 'data',
  schema: ({ image }) => z.array(teamSchema(image)),
});

export const collections = {
  home: homeCollection,
  social: socialCollection,
  research: researchCollection,
  teaching: teachingCollection,
  data: dataCollection,
  team: teamCollection,
};
