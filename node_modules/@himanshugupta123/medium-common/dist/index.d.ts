import { z } from "zod";
export declare const signUpInput: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    password: string;
}, {
    name: string;
    email: string;
    password: string;
}>;
export declare const signInInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const createBlogInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    published: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    published: boolean;
}, {
    title: string;
    content: string;
    published: boolean;
}>;
export declare const updateBlogContent: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    published: z.ZodBoolean;
    blogId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    published: boolean;
    blogId: string;
}, {
    title: string;
    content: string;
    published: boolean;
    blogId: string;
}>;
export type TsignUpInput = z.infer<typeof signUpInput>;
export type TsignInInput = z.infer<typeof signInInput>;
export type TcreateBlogInput = z.infer<typeof createBlogInput>;
export type TupdateBlogContent = z.infer<typeof updateBlogContent>;
