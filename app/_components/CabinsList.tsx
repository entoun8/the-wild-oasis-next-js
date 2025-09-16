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
    <div className="flex-1 flex items-center justify-center">
      {displayedCabins.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      ) : (
        <div className="card max-w-md mx-auto text-center">
          <p className="text-primary-300 text-lg mb-6">
            No cabins available at the moment.
          </p>
          <p className="text-primary-400 mb-8">
            Check back soon for our luxury accommodations!
          </p>
          <a href="/" className="btn-secondary">
            Return Home
          </a>
        </div>
      )}
    </div>
  );
}
