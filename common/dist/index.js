"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogContent = exports.createBlogInput = exports.signInInput = exports.signUpInput = void 0;
const zod_1 = require("zod");
exports.signUpInput = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(5),
});
exports.signInInput = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(5),
});
exports.createBlogInput = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
    published: zod_1.z.boolean(),
});
exports.updateBlogContent = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
    published: zod_1.z.boolean(),
    blogId: zod_1.z.string(),
});
