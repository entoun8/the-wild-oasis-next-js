import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin } from "@/app/_lib/data-service";
import Cabin from "@/app/_components/Cabin";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);

  return {
    title: `Cabin ${name}`,
  };
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Cabin cabin={cabin} />

        {/* Reservation Section */}
        <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 lg:p-12 shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Reserve Cabin <span className="text-amber-400">{cabin.name}</span> today
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Secure your perfect mountain getaway. Pay on arrival for maximum flexibility.
            </p>
          </div>

          <Suspense fallback={<Spinner />}>
            <Reservation cabin={cabin} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
