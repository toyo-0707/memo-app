"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function updateMemo(formData: FormData) {
  const id = Number(formData.get("id"));
  const title = String(formData.get("title"));
  const content = String(formData.get("content"));

  if (!Number.isFinite(id)) throw Error("invalid Error");
  if (!title || !content) throw Error("Title and content are required");

  await prisma.memo.update({
    where: { id },
    data: { title, content },
  });

  redirect("/memos");
}
