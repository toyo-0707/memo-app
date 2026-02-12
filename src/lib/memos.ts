export type Memo = {
  id: number;
  title: string;
  content: string;
};

const MEMOS: Memo[] = [
  {
    id: 1,
    title: "Learn Next.js",
    content: "Today I learned about Server and Client Components.",
  },
  {
    id: 2,
    title: "Build Memo App",
    content: "Next step: add a database and authentication.",
  },
  {
    id: 3,
    title: "Aim for Global Engineer",
    content: "I will practice writing README in English.",
  },
];

export function getMemos(): Memo[] {
  return MEMOS;
}

export function getMemoById(id: number): Memo | undefined {
  return MEMOS.find((m) => m.id === id);
}
