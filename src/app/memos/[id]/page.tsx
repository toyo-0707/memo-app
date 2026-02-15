import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { deleteMemo } from "./actions";
import Link from "next/link";

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
    <main className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold">{memo.title}</h1>
          <p className="mt-1 text-xs text-gray-500">Memo ID: {memo.id}</p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={`/memos/${memo.id}/edit`}
            className="rounded-md border px-3 py-2 text-sm hover:bg-gray-50"
          >
            Edit
          </Link>

          <form action={deleteMemo}>
            <input type="hidden" name="id" value={memo.id} />
            <button
              type="submit"
              className="rounded-md bg-red-600 px-3 py-2 text-sm text-white hover:bg-red-700"
            >
              Delete
            </button>
          </form>
        </div>
      </div>

      <div className="rounded-md border p-4">
        <p className="whitespace-pre-wrap text-sm leading-6">{memo.content}</p>
      </div>

      <div>
        <Link href="/memos" className="text-sm hover:underline">
          ← Back to memos
        </Link>
      </div>
    </main>
  );
}
