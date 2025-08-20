import { ActionError, defineAction, isInputError } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
    contact: defineAction({
        accept: 'form',
        input: z.object({
            email: z.string().email(),
            name: z.string(),
            message: z.string().nullable(),
        }),
        handler: async ({ email, name, message }) => {
            // make call to resend and return error if error
            console.log(`From ${name}<${email}>\n${message}`);
            return 'Success';
        },
    }),
};
