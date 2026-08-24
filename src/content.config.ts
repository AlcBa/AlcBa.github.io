import { defineCollection, type ImageFunction } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const homeCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/home' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      role: z.string(),
      faculty: z.string(),
      school: z.string(),
      facultyUrl: z.url(),
      imageUrl: image(),
    }),
});

const socialCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/content/social' }),
  schema: z.object({
    googleScholar: z.url().refine((val) => val.includes('scholar.google.com')),
    email: z.email(),
    twitter: z.url().refine((val) => val.includes('twitter.com')),
    github: z.url().refine((val) => val.includes('github.com')),
  }),
});

const researchSchema = z.object({
  title: z.string(),
  publication: z.string().optional(),
  year: z.number().int().min(1900).max(2100).optional(),
  authors: z.string(),
  pdfUrl: z
    .string()
    .refine((val) => val.endsWith('.pdf'))
    .optional(),
  doi: z.url().optional(),
});

const researchCollection = defineCollection({
  loader: glob({ pattern: '{publications,workingpapers}.json', base: './src/content/research' }),
  schema: z.array(researchSchema),
});

const grantSchema = z.object({
  title: z.string(),
  grantor: z.string(),
  amount: z.string(),
  year: z.number().int().min(1900).max(2100),
  investigators: z.string(),
  url: z.url().optional(),
});

const grantsCollection = defineCollection({
  loader: glob({ pattern: 'grants.json', base: './src/content/research' }),
  schema: z.array(grantSchema),
});

const teachingSchema = z.object({
  title: z.string(),
  school: z.string(),
  type: z.string(),
  year: z.array(z.number()),
});

const teachingCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/content/teaching' }),
  schema: z.object({
    acknowledgementDescription: z.string().optional(),
    courses: z.array(teachingSchema),
  }),
});

const acknowledgementsSchema = (image: ImageFunction) =>
  z.object({
    firstName: z.string(),
    lastName: z.string().optional(),
    description: z.string().optional(),
    logoUrl: image().optional(),
  });

const acknowledgementsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/content/acknowledgements' }),
  schema: ({ image }) => z.array(acknowledgementsSchema(image)),
});

const dataSchema = (image: ImageFunction) =>
  z.object({
    title: z.string(),
    description: z.string(),
    link: z.url().optional(),
    imageUrl: image().optional(),
  });

const dataCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/content/data' }),
  schema: ({ image }) =>
    z.object({
      description: z.string(),
      data: z.array(dataSchema(image)),
    }),
});

const teamSchema = (image: ImageFunction) =>
  z.object({
    firstName: z.string(),
    lastName: z.string().optional(),
    role: z.string(),
    description: z.string(),
    website: z.url().optional(),
    imageUrl: image(),
  });

const teamCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/content/team' }),
  schema: ({ image }) => z.array(teamSchema(image)),
});

const cvCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/content/cv' }),
  schema: z.object({
    pdfUrl: z.string(),
  }),
});

export const collections = {
  home: homeCollection,
  social: socialCollection,
  research: researchCollection,
  grants: grantsCollection,
  teaching: teachingCollection,
  acknowledgements: acknowledgementsCollection,
  data: dataCollection,
  team: teamCollection,
  cv: cvCollection,
};
