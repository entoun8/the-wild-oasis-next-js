import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div className="card">
      <div className="grid md:grid-cols-4 gap-6">
        <div className="relative h-32 md:h-auto">
          <img
            src={image}
            alt={`Cabin ${name}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h3 className="text-xl font-semibold text-primary-100">
              {numNights} nights in Cabin {name}
            </h3>
            {isPast(new Date(startDate)) ? (
              <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 uppercase text-xs font-semibold rounded-full border border-yellow-500/30">
                past
              </span>
            ) : (
              <span className="bg-green-500/20 text-green-400 px-3 py-1 uppercase text-xs font-semibold rounded-full border border-green-500/30">
                upcoming
              </span>
            )}
          </div>

          <p className="text-primary-300">
            {format(new Date(startDate), "EEE, MMM dd yyyy")} (
            {isToday(new Date(startDate))
              ? "Today"
              : formatDistanceFromNow(startDate)}
            ) → {format(new Date(endDate), "EEE, MMM dd yyyy")}
          </p>

          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-accent-400 font-semibold text-lg">${totalPrice}</span>
            </div>
            <div className="text-primary-300">
              {numGuests} guest{numGuests > 1 && "s"}
            </div>
          </div>

          <p className="text-xs text-primary-400">
            Booked {format(new Date(created_at), "MMM dd yyyy")}
          </p>
        </div>

        <div className="flex md:flex-col gap-2">
          <a
            href={`/account/reservations/edit/${id}`}
            className="btn-secondary flex-1 md:flex-none text-center inline-flex items-center justify-center gap-2 text-sm group"
          >
            <PencilSquareIcon className="h-4 w-4" />
            <span>Edit</span>
          </a>
          <DeleteReservation bookingId={id} />
        </div>
      </div>
    </div>
  );
}

export default ReservationCard;
