import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    draft: z.boolean(),
    tags: z.array(z.string()).optional(),
    coverImage: z.string().optional(),
    coverImageAlt: z.string().optional()
  }),
});

const staticSchema = defineCollection({
  schema: z.object({
    title: z.string()
  })
});

const worksSchema = defineCollection({
  schema: z.object({
    title: z.string()
  })
});

const upcomingSchema = defineCollection({
  schema: z.object({
    title: z.string(),
    status: z.string(),
    pinned: z.boolean()
  })
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'posts': blogCollection,
  'static': staticSchema,
  'works': worksSchema,
  'upcoming': upcomingSchema
};