import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <p>
        <Link href="/memos">Go to memos</Link>
      </p>
    </main>
  );
}
