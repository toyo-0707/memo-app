"use client";

export default function NewMemoForm({
  action,
}: {
  action: (formData: FormData) => void;
}) {
  return (
    <form action={action}>
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
