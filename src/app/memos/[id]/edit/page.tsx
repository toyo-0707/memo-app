import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import EditMemoForm from "./EditMemoForm";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditMemoPage({ params }: Props) {
  const { id } = await params;
  const memoId = Number(id);

  if (!Number.isFinite(memoId)) notFound();

  const memo = await prisma.memo.findUnique({ where: { id: memoId } });

  if (!memo) notFound();

  return (
    <main>
      <EditMemoForm memo={memo} />
    </main>
  );
}
