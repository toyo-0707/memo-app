import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function MemoDetailPage({ params }: Props) {
  const { id } = await params;
  const memoId = Number(id);

  if (!Number.isFinite(memoId)) {
    notFound();
  }

  const memo = await prisma.memo.findUnique({
    where: { id: memoId },
  });

  if (!memo) {
    notFound();
  }

  return (
    <main>
      <h1>{memo.title}</h1>
      <p>{memo.content}</p>
    </main>
  );
}
