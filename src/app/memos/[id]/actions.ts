"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function deleteMemo(formData: FormData) {
  const id = Number(formData.get("id"));

  if (!id) {
    throw new Error("Invalid Id");
  }

  await prisma.memo.delete({
    where: { id },
  });

  redirect("/memos");
}
