import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const jobs = defineCollection({
    loader: file('src/content/jobs.yaml'),
    schema: z.object({
        date: z.string(),
        position: z.string(),
        summary: z.string(),
        responsibilities: z.array(z.string()).nullable(),
    }),
});

const projects = defineCollection({
    loader: file('src/content/projects.yaml'),
    schema: z.object({
        position: z.string(),
        date: z.string(),
        url: z.string(),
        description: z.string(),
    }),
});

const sideProjects = defineCollection({
    loader: file('src/content/side_projects.yaml'),
    schema: z.object({
        date: z.string(),
        technologies: z.array(z.string()),
        url: z.string(),
        description: z.string(),
    }),
});

const books = defineCollection({
    loader: file('src/content/books.json'),
    schema: z.object({
        id: z.string(),
        title: z.string(),
        author: z.string(),
        published_date: z.number(),
        isbn: z.string(),
    }),
});
export const collections = { jobs, projects, sideProjects, books };
