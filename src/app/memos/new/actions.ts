"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createMemo(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  if (!title || !content) {
    throw new Error("Title and content are required");
  }

  await prisma.memo.create({
    data: {
      title,
      content,
    },
  });

  redirect("/memos");
}
