import ReservationCard from "@/app/_components/ReservationCard";
import { auth } from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/data-service";

export const metadata = {
  title: "Reservations",
};

export default async function Page() {
  const session = await auth();
  const bookings = await getBookings((session as any)?.user?.guestId || 0);

  return (
    <div>
      <h1 className="text-3xl font-light text-accent-400 mb-8">
        Your <span className="font-medium">Reservations</span>
      </h1>

      {bookings.length === 0 ? (
        <div className="text-center py-12">
          <div className="bg-transparent lg:bg-primary-800/30 rounded-lg p-8 border-0 lg:border border-primary-700 max-w-md mx-auto">
            <p className="text-lg text-primary-200 mb-6">
              You have no reservations yet.
            </p>
            <p className="text-primary-300 mb-8">
              Start planning your perfect getaway!
            </p>
            <a
              className="btn-primary inline-flex items-center gap-3"
              href="/cabins"
            >
              <span>Explore luxury cabins</span>
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {bookings.map((booking) => (
            <ReservationCard booking={booking} key={booking.id} />
          ))}
        </div>
      )}
    </div>
  );
}
