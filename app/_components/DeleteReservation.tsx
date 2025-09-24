"use client";

import { TrashIcon } from "@heroicons/react/24/solid";
import { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";
import { deleteBooking } from "../_lib/actions";

function DeleteReservation({ bookingId }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    if (confirm("Are you sure you want to delete this reservation?"))
      startTransition(() => deleteBooking(bookingId));
  }

  return (
    <button
      onClick={handleDelete}
      className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-primary-300 hover:text-red-400 hover:bg-red-900/20 border border-transparent hover:border-red-800/50 transition-all duration-200 text-sm font-medium group flex-1 md:flex-none min-h-[44px] min-w-[80px]"
    >
      {!isPending ? (
        <>
          <TrashIcon className="h-4 w-4 text-primary-400 group-hover:text-red-400 transition-colors" />
          <span>Delete</span>
        </>
      ) : (
        <SpinnerMini />
      )}
    </button>
  );
}

export default DeleteReservation;
