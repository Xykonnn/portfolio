import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    status: z.enum(['live', 'wip', 'concept']),
    url: z.string().optional(),
    tech: z.array(z.string()).optional(),
    order: z.number().optional(),
  }),
});

export const collections = { projects };
