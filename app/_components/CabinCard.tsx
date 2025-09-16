import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="card group hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative h-48 mb-4">
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
        />
        {discount > 0 && (
          <div className="absolute top-3 right-3 bg-accent-500 text-primary-900 px-3 py-1 rounded-full text-sm font-semibold">
            Save ${discount}
          </div>
        )}
      </div>

      <div className="space-y-4">
        <h3 className="text-accent-400 font-semibold text-xl">Cabin {name}</h3>

        <div className="flex items-center gap-2 text-primary-300">
          <UsersIcon className="h-5 w-5 text-primary-400" />
          <span>
            For up to{" "}
            <span className="font-semibold text-primary-200">
              {maxCapacity}
            </span>{" "}
            guests
          </span>
        </div>

        <div className="flex items-baseline justify-between">
          <div className="flex items-baseline gap-2">
            {discount > 0 ? (
              <>
                <span className="text-2xl font-semibold text-accent-400">
                  ${regularPrice - discount}
                </span>
                <span className="line-through text-primary-500">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl font-semibold text-accent-400">
                ${regularPrice}
              </span>
            )}
            <span className="text-primary-400">/ night</span>
          </div>
        </div>

        <Link
          href={`/cabins/${id}`}
          className="btn-primary w-full text-center inline-flex items-center justify-center gap-2 group"
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
