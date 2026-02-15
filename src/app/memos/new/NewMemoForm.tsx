"use client";

import { useActionState } from "react";
import { createMemo } from "./actions";
import type { CreateMemoState } from "./actions";

const initialState: CreateMemoState = {};

export default function NewMemoForm() {
  const [state, formAction] = useActionState(createMemo, initialState);

  return (
    <form action={formAction}>
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}

      <div>
        <label>
          Title
          <input type="text" name="title" />
        </label>
      </div>

      <div>
        <label>
          Content
          <textarea name="content" />
        </label>
      </div>

      <button type="submit">Create</button>
    </form>
  );
}
