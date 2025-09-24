import { auth } from "../_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

export default async function Reservation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  const session = await auth();

  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
      <div>
        <h3 className="text-xl font-bold text-white mb-6">Select your dates</h3>
        <DateSelector
          settings={settings}
          bookDates={bookedDates}
          cabin={cabin}
        />
      </div>
      <div>
        <h3 className="text-xl font-bold text-white mb-6">
          Complete your reservation
        </h3>
        {session?.user ? (
          <ReservationForm cabin={cabin} user={session.user} />
        ) : (
          <LoginMessage />
        )}
      </div>
    </div>
  );
}
