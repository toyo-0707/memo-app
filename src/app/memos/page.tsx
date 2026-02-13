import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function MemosPage() {
  const memos = await prisma.memo.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main>
      <h1>Memos</h1>

      <p>
        <Link href="/memos/new">Create new memo</Link>
      </p>

      <ul>
        {memos.map((m) => (
          <li key={m.id}>
            <Link href={`/memos/${m.id}`}>{m.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
