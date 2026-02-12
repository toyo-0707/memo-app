"use client";

import { useState } from "react";

export default function NewMemoForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // 今はDBがないので「送信できたこと」を確認するだけ
    console.log("Create memo:", { title, content });

    alert("Saved (mock)! Check console.");
    setTitle("");
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Title
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Leran Next.js"
          />
        </label>
      </div>

      <div>
        <label>
          Content
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your memo..."
          />
        </label>
      </div>

      <button type="submit">Create</button>
    </form>
  );
}
