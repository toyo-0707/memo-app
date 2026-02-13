import NewMemoForm from "./NewMemoForm";

import { createMemo } from "./actions";

export default function NewMemoPage() {
  return (
    <main>
      <h1>New Memo</h1>
      <NewMemoForm action={createMemo} />
    </main>
  );
}
