"use client";

import { useState } from "react";
import { useActionState } from "react";
import type { UpdateMemoState } from "./actions";
import { updateMemo } from "./actions";

const initialState: UpdateMemoState = {};

type Memo = {
  id: number;
  title: string;
  content: string;
};

export default function EditMemoForm({ memo }: { memo: Memo }) {
  const [title, setTitle] = useState(memo.title);
  const [content, setContetnt] = useState(memo.content);
  const [state, formAction] = useActionState(updateMemo, initialState);

  return (
    <form action={formAction}>
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}

      <input type="hidden" name="id" value={memo.id} />
      <div>
        <label>
          Title
          <input
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Content
          <input
            name="content"
            value={content}
            onChange={(e) => setContetnt(e.target.value)}
          />
        </label>
      </div>

      <button type="submit">Save</button>
    </form>
  );
}
