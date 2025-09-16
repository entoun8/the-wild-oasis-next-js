import CabinCard from "../_components/CabinCard";
import { getCabins } from "../_lib/data-service";

export default async function CabinsList({ filter }) {
  const cabins = await getCabins();

  let displayedCabins;

  if (filter === "all") displayedCabins = cabins;
  if (filter === "small")
    displayedCabins = cabins.filter((c) => c.maxCapacity <= 3);
  else if (filter === "medium")
    displayedCabins = cabins.filter(
      (c) => c.maxCapacity >= 4 && c.maxCapacity <= 7
    );
  else if (filter === "large")
    displayedCabins = cabins.filter((c) => c.maxCapacity >= 8);

  return (
    <div className="max-w-7xl mx-auto">
      {displayedCabins.length > 0 ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {displayedCabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      ) : (
        <div className="max-w-lg mx-auto text-center bg-slate-900/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-12 shadow-xl">
          <div className="mb-6">
            <svg className="w-16 h-16 text-slate-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 21l4-4 4 4" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">No cabins found</h3>
          <p className="text-slate-300 text-lg mb-6">
            No cabins match your current filter selection.
          </p>
          <p className="text-slate-400 mb-8">
            Try adjusting your filter or check back soon for our luxury accommodations!
          </p>
          <a href="/" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold px-8 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block">
            Return Home
          </a>
        </div>
      )}
    </div>
  );
}
