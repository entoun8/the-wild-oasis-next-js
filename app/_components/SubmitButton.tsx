"use client";

import { useFormStatus } from "react-dom";
import { SubmitButtonProps } from "../../types";

export default function SubmitButton({ children, pendingLabel }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button className="btn-primary" disabled={pending}>
      {pending ? pendingLabel : children}
    </button>
  );
}
