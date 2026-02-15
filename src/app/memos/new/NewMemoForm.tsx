"use client";

import { useActionState } from "react";
import { createMemo } from "./actions";
import type { CreateMemoState } from "./actions";

const initialState: CreateMemoState = {};

export default function NewMemoForm() {
  const [state, formAction] = useActionState(createMemo, initialState);

  return (
    <form action={formAction} className="space-y-6">
      {state.error && (
        <div className="rounded-md bg-red-50 p-3 text-sm text-red-600">
          {state.error}
        </div>
      )}

      <div className="space-y-2">
        <label className="text-sm font-medium">
          Title
          <input
            type="text"
            name="title"
            className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </label>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">
          Content
          <textarea
            name="content"
            rows={5}
            className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </label>
      </div>

      <button
        type="submit"
        className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
      >
        Create
      </button>
    </form>
  );
}
