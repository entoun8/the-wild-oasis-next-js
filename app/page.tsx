import Image from "next/image";
import bg from "@/public/bg.png";

export default function Page() {
  return (
    <div className="relative h-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={bg}
          fill
          placeholder="blur"
          quality={80}
          className="object-cover opacity-30"
          alt="Mountains and forests with two cabins"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/60 via-primary-800/40 to-primary-900/80" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-primary-50 mb-8 tracking-tight font-light leading-tight">
          Welcome to <span className="text-accent-400 font-medium">paradise.</span>
        </h1>
        <p className="text-xl text-primary-200 mb-12 max-w-2xl mx-auto leading-relaxed">
          Escape to luxury cabins nestled in the heart of the Italian Dolomites, where nature meets comfort.
        </p>
        <a
          href="/cabins"
          className="btn-primary inline-flex items-center text-lg gap-3 group"
        >
          <span>Explore luxury cabins</span>
          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
}
