import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date().transform((date) => date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }))
  }),
});

export const collections = {
  'blog': postsCollection,
};
