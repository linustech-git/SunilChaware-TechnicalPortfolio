import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const archive = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/archive" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  archive,
};
