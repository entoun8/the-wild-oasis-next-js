import { Suspense } from "react";
import CabinsList from "../_components/CabinsList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";

export const metadata = {
  title: "Cabins",
};

export default async function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";

  return (
    <div className="h-full flex flex-col max-w-7xl mx-auto px-6 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl lg:text-5xl font-light text-accent-400 leading-tight">
          Our <span className="font-medium">Luxury Cabins</span>
        </h1>
        <p className="text-lg text-primary-200 leading-relaxed max-w-3xl mx-auto">
          Cozy yet luxurious cabins, located right in the heart of the Italian
          Dolomites. Imagine waking up to beautiful mountain views, spending
          your days exploring the dark forests around, or just relaxing in your
          private hot tub under the stars. Enjoy nature's beauty in your own
          little home away from home. The perfect spot for a peaceful, calm
          vacation. Welcome to paradise.
        </p>
        <Filter />
        <Suspense fallback={<Spinner />} key={filter}>
          <CabinsList filter={filter} />
        </Suspense>
      </div>
    </div>
  );
}
