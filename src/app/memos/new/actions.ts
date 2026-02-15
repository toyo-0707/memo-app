"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { memoSchema } from "@/lib/validation";

export type CreateMemoState = {
  error?: string;
};

export async function createMemo(
  _prevState: CreateMemoState,
  formData: FormData,
): Promise<CreateMemoState> {
  const raw = {
    title: String(formData.get("title") ?? ""),
    content: String(formData.get("content") ?? ""),
  };

  const parsed = memoSchema.safeParse(raw);

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid input" };
  }

  await prisma.memo.create({ data: parsed.data });

  redirect("/memos");
}
