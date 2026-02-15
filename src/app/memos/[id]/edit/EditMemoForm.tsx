"use client";

import { useState } from "react";

type Memo = {
  id: number;
  title: string;
  content: string;
};

type Action = (formDara: FormData) => Promise<void>;

export default function EditMemoForm({
  memo,
  action,
}: {
  memo: Memo;
  action: Action;
}) {
  const [title, setTitle] = useState(memo.title);
  const [content, setContetnt] = useState(memo.content);

  return (
    <form action={action}>
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
