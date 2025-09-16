import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-slate-600 transition-all duration-300 group overflow-hidden">
      <div className="relative h-56 mb-6 rounded-xl overflow-hidden">
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {discount > 0 && (
          <div className="absolute top-4 right-4 bg-amber-500 text-slate-900 px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
            Save ${discount}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="space-y-4">
        <h3 className="text-amber-400 font-bold text-xl tracking-wide">Cabin {name}</h3>

        <div className="flex items-center gap-3 text-slate-300">
          <UsersIcon className="h-5 w-5 text-amber-400 flex-shrink-0" />
          <span className="text-sm">
            For up to{" "}
            <span className="font-bold text-white">
              {maxCapacity}
            </span>{" "}
            guests
          </span>
        </div>

        <div className="flex items-baseline justify-between pt-2">
          <div className="flex items-baseline gap-2">
            {discount > 0 ? (
              <>
                <span className="text-2xl font-bold text-amber-400">
                  ${regularPrice - discount}
                </span>
                <span className="line-through text-slate-500 text-lg">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl font-bold text-amber-400">
                ${regularPrice}
              </span>
            )}
            <span className="text-slate-400 text-sm">/ night</span>
          </div>
        </div>

        <Link
          href={`/cabins/${id}`}
          className="w-full mt-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 group"
        >
          <span>Details & reservation</span>
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default CabinCard;
