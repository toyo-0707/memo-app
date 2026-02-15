import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function MemosPage() {
  const memos = await prisma.memo.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Memos</h1>
          <p className="text-sm text-gray-500">Your latest notes</p>
        </div>

        <Link
          href="/memos/new"
          className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
        >
          New Memo
        </Link>
      </div>

      {memos.length === 0 ? (
        <div className="rounded-md border p-6 text-sm text-gray-600">
          No memos yet. Create your first memo.
        </div>
      ) : (
        <ul className="space-y-3">
          {memos.map((m) => (
            <li key={m.id}>
              <Link
                href={`/memos/${m.id}`}
                className="block rounded-md border p-4 hover:bg-gray-50"
              >
                <div className="font-medium">{m.title}</div>
                <div className="mt-1 text-xs text-gray-500">#{m.id}</div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
