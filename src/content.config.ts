import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const jobs = defineCollection({
    loader: file('src/content/jobs.yaml'),
    schema: z.object({
        date: z.string(),
        position: z.string(),
        summary: z.string(),
        responisibilites: z.array(z.string()),
    }),
});

const projects = defineCollection({
    loader: file('src/content/projects.yaml'),
    schema: z.object({
        date: z.string(),
        position: z.string(),
        summary: z.string(),
        responisibilites: z.array(z.string()),
    }),
});

const sideProjects = defineCollection({
    loader: file('src/content/side_projects.yaml'),
    schema: z.object({
        date: z.string(),
        position: z.string(),
        summary: z.string(),
        responisibilites: z.array(z.string()),
    }),
});

export const collections = { jobs };
