import { Suspense } from "react";
import CabinsList from "../_components/CabinsList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";
import { PageProps, CabinFilter } from "../../types";

export const metadata = {
  title: "Cabins",
};

export default async function Page({ searchParams }: PageProps) {
  const filter: CabinFilter = (searchParams?.capacity as CabinFilter) ?? "all";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-slate-900/50 to-transparent py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-light text-white leading-tight mb-6">
            Our <span className="font-bold text-amber-400">Luxury Cabins</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-12">
            Cozy yet luxurious cabins, located right in the heart of the Italian
            Dolomites. Imagine waking up to beautiful mountain views, spending
            your days exploring the dark forests around, or just relaxing in
            your private hot tub under the stars. Enjoy nature's beauty in your
            own little home away from home. The perfect spot for a peaceful,
            calm vacation. Welcome to paradise.
          </p>
          <Filter />
        </div>
      </div>

      {/* Cabins Grid Section */}
      <div className="px-6 pb-16">
        <Suspense fallback={<Spinner />} key={filter}>
          <CabinsList filter={filter} />
          <ReservationReminder />
        </Suspense>
      </div>
    </div>
  );
}
