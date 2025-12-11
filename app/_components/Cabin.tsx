import Image from "next/image";
import TextExpander from "./TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import { CabinProps } from "../../types";

export default function Cabin({ cabin }: CabinProps) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="relative overflow-hidden rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-slate-700 shadow-2xl mb-16">
      {/* Hero Image Section */}
      <div className="relative h-96 lg:h-[500px] overflow-hidden">
        <Image
          fill
          src={image}
          alt={`Cabin ${name}`}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Floating Title */}
        <div className="absolute bottom-8 left-8 right-8">
          <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
              Cabin <span className="text-amber-400">{name}</span>
            </h1>
            <div className="flex items-center gap-4 text-slate-300">
              <div className="flex items-center gap-2">
                <UsersIcon className="h-5 w-5 text-amber-400" />
                <span>Up to {maxCapacity} guests</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-amber-400">
                  ${discount > 0 ? regularPrice - discount : regularPrice}
                </span>
                {discount > 0 && (
                  <span className="line-through text-slate-500 text-lg">
                    ${regularPrice}
                  </span>
                )}
                <span className="text-slate-400">/ night</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 lg:p-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Description */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">About this cabin</h2>
            <div className="text-lg text-slate-300 leading-relaxed">
              <TextExpander>{description || ''}</TextExpander>
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">What you'll love</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
                <div className="bg-amber-500/20 p-2 rounded-lg">
                  <UsersIcon className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Perfect for groups</h3>
                  <p className="text-slate-400">
                    Comfortably accommodates up to <span className="font-bold text-white">{maxCapacity}</span> guests
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
                <div className="bg-amber-500/20 p-2 rounded-lg">
                  <MapPinIcon className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Prime location</h3>
                  <p className="text-slate-400">
                    Located in the heart of the <span className="font-bold text-white">Italian Dolomites</span>
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
                <div className="bg-amber-500/20 p-2 rounded-lg">
                  <EyeSlashIcon className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Complete privacy</h3>
                  <p className="text-slate-400">
                    Privacy <span className="font-bold text-white">100%</span> guaranteed for your stay
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
