import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
    contact: defineAction({
        accept: 'form',
        input: z.object({
            email: z.string().email(),
            name: z.string(),
            message: z.string(),
        }),
        handler: async ({ email, name, message }) => {
            console.log(`From ${name}<${email}>\n${message}`);
            return 'success';
        },
    }),
};
