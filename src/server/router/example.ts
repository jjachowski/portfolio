import { createRouter } from './context';
import { z } from 'zod';

export const exampleRouter = createRouter()
  .query('hello', {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? 'world'}`,
      };
    },
  })
  .query('getAll', {
    async resolve({ ctx }) {
      return await ctx.prisma.blogPost.findMany();
    },
  });

export const blogPostRouter = createRouter()
  .query('posts', {
    async resolve({ ctx }) {
      return await ctx.prisma.blogPost.findMany();
    },
  })
  .query('post', {
    input: z.object({ id: z.number() }),
    async resolve({ ctx, input }) {
      console.log('CTXXXXX:', ctx);
      return await ctx.prisma.blogPost.findFirst({ where: { id: input.id } });
    },
  });
