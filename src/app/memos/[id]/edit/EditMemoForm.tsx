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
    <form action={formAction} className="space-y-6">
      {state.error && (
        <div className="rounded-md bg-red-50 p-3 text-sm text-red-600">
          {state.error}
        </div>
      )}

      <input type="hidden" name="id" value={memo.id} />
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Title
          <input
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </label>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">
          Content
          <textarea
            name="content"
            value={content}
            onChange={(e) => setContetnt(e.target.value)}
            rows={5}
            className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </label>
      </div>

      <button
        type="submit"
        className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
      >
        Save
      </button>
    </form>
  );
}
