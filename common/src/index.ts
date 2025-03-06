import { z } from "zod";

export const signUpInput = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(5),
});

export const signInInput = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

export const createBlogInput = z.object({
  title: z.string(),
  content: z.string(),
  published: z.boolean(),
});

export const updateBlogContent = z.object({
  title: z.string(),
  content: z.string(),
  published: z.boolean(),
  blogId: z.string(),
});

export type TsignUpInput = z.infer<typeof signUpInput>;
export type TsignInInput = z.infer<typeof signInInput>;
export type TcreateBlogInput = z.infer<typeof createBlogInput>;
export type TupdateBlogContent = z.infer<typeof updateBlogContent>;
