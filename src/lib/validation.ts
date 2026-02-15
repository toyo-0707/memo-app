import { z } from "zod";

export const memoSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
});

export type MemoInput = z.infer<typeof memoSchema>;
