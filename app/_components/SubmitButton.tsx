"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ children, pendingLabel }) {
  const { pending } = useFormStatus();

  return (
    <button className="btn-primary" disabled={pending}>
      {pending ? pendingLabel : children}
    </button>
  );
}
