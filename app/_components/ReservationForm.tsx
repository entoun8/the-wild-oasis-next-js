"use client";

import { differenceInDays } from "date-fns";
import { useReservation } from "./ReservationContext";
import { createBooking } from "../_lib/actions";
import SubmitButton from "./SubmitButton";
import { ReservationFormProps } from "../../types";

function ReservationForm({ cabin, user }: ReservationFormProps) {
  const { range, resetRange } = useReservation();
  const { maxCapacity, regularPrice, discount, id } = cabin;

  const startDate = range?.from;
  const endDate = range?.to;

  const numNights = startDate && endDate ? differenceInDays(endDate, startDate) : 0;
  const cabinPrice = numNights * (regularPrice - discount);

  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinPrice,
    cabinId: id,
  };

  const createBookingWithData = createBooking.bind(null, bookingData);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gradient-to-r from-primary-800 to-primary-700 text-primary-100 px-6 py-4 rounded-t-xl border-b border-primary-600/30">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Logged in as</span>
          </div>
          <div className="flex gap-3 items-center">
            <img
              referrerPolicy="no-referrer"
              className="h-8 w-8 rounded-full ring-2 ring-accent-400/30"
              src={user.image}
              alt={user.name}
            />
            <span className="font-semibold">{user.name}</span>
          </div>
        </div>
      </div>

      <form
        action={async (formData) => {
          resetRange();
          await createBookingWithData(formData);
        }}
        className="bg-primary-900 p-8 rounded-b-xl border-x border-b border-primary-700/50 shadow-xl space-y-6"
      >
        <div className="space-y-3">
          <label htmlFor="numGuests" className="block text-primary-200 font-medium text-lg">
            How many guests?
          </label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-4 py-3 bg-primary-800/50 text-primary-100 w-full border border-primary-700 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-accent-400 transition-all"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-3">
          <label htmlFor="observations" className="block text-primary-200 font-medium text-lg">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            rows={4}
            className="px-4 py-3 bg-primary-800/50 text-primary-100 w-full border border-primary-700 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-accent-400 transition-all resize-none"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        {!(startDate && endDate) ? (
          <div className="text-center py-4">
            <p className="text-primary-400 text-lg">📅 Start by selecting dates above</p>
          </div>
        ) : (
          <div className="pt-4">
            <SubmitButton pendingLabel="Reserving">Reserve now</SubmitButton>
          </div>
        )}
      </form>
    </div>
  );
}

export default ReservationForm;
