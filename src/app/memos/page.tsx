import Link from "next/link";
import { getMemos } from "@/lib/memos";

export default function MemosPage() {
  const memos = getMemos();

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
