import Link from "next/link";

export default function Home() {
  return (
    <main className="space-y-10 py-16 text-center">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Simple Memo App</h1>
        <p className="text-gray-600">
          A minimal full-stack memo application built with Next.js, Prisma, and
          PostgreSQL.
        </p>
      </div>

      <div className="flex justify-center gap-4">
        <Link
          href="/memos"
          className="rounded-md bg-black px-6 py-3 text-sm text-white hover:bg-gray-800"
        >
          View Memos
        </Link>

        <Link
          href="/memos/new"
          className="rounded-md border px-6 py-3 text-sm hover:bg-gray-50"
        >
          Create Memo
        </Link>
      </div>

      <div className="pt-10 text-sm text-gray-400">
        Built for learning modern full-stack development.
      </div>
    </main>
  );
}
