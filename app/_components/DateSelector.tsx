"use client";

import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";
import { DateSelectorProps, ReservationRange } from "../../types";

function isAlreadyBooked(range: ReservationRange, datesArr: Date[]): boolean {
  return (
    !!range &&
    !!range.from &&
    !!range.to &&
    (datesArr || []).some((date) =>
      isWithinInterval(date, { start: range.from!, end: range.to! })
    )
  );
}

function DateSelector({ settings, cabin, bookedDates }: DateSelectorProps) {
  const { range, setRange, resetRange } = useReservation();

  const displayedRange = isAlreadyBooked(range, bookedDates) ? { from: undefined, to: undefined } : range;

  const { regularPrice, discount } = cabin;
  const numNights = displayedRange.from && displayedRange.to
    ? differenceInDays(displayedRange.to, displayedRange.from)
    : 0;
  const cabinPrice = numNights * (regularPrice - discount);

  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="max-w-4xl mx-auto bg-primary-900 rounded-xl border border-primary-700/50 shadow-xl overflow-hidden">
      <div className="p-6 bg-gradient-to-b from-primary-800/50 to-primary-900">
        <DayPicker
          className="place-self-center"
          mode="range"
          selected={displayedRange as any}
          onSelect={(range: any) => setRange(range || { from: undefined, to: undefined })}
          min={minBookingLength + 1}
          max={maxBookingLength}
          fromMonth={new Date()}
          fromDate={new Date()}
          toYear={new Date().getFullYear() + 5}
          captionLayout="dropdown"
          numberOfMonths={2}
          disabled={(curDate) =>
            isPast(curDate) ||
            (bookedDates || []).some((date) => isSameDay(date, curDate))
          }
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 py-5 bg-gradient-to-r from-accent-500 to-accent-400 text-primary-900"  >
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <div className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl font-bold">${regularPrice - discount}</span>
                <span className="line-through font-semibold text-primary-800/70 text-lg">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl font-bold">${regularPrice}</span>
            )}
            <span className="text-sm font-medium">/night</span>
          </div>

          {numNights ? (
            <>
              <div className="flex items-center gap-2">
                <div className="bg-primary-900/20 px-3 py-1.5 rounded-lg">
                  <span className="text-xl font-bold">&times; {numNights}</span>
                </div>
                <span className="text-sm font-medium">
                  {numNights === 1 ? 'night' : 'nights'}
                </span>
              </div>

              <div className="flex items-center gap-2 ml-auto">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-3xl font-bold">${cabinPrice}</span>
              </div>
            </>
          ) : null}
        </div>

        {(range?.from || range?.to) ? (
          <button
            className="bg-primary-900/20 hover:bg-primary-900/30 border border-primary-900/30 py-2.5 px-5 text-sm font-semibold rounded-lg transition-all duration-200 hover:scale-105"
            onClick={resetRange}
          >
            Clear dates
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
