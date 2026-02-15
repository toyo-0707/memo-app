"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { memoSchema } from "@/lib/validation";

export type UpdateMemoState = { error?: string };

export async function updateMemo(
  _prevState: UpdateMemoState,
  formData: FormData,
): Promise<UpdateMemoState> {
  const id = Number(formData.get("id"));
  const raw = {
    title: String(formData.get("title") ?? ""),
    content: String(formData.get("content") ?? ""),
  };

  const parsed = memoSchema.safeParse(raw);

  if (!Number.isFinite(id)) throw Error("invalid Error");
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid input" };
  }

  await prisma.memo.update({
    where: { id },
    data: parsed.data,
  });

  redirect("/memos");
}
