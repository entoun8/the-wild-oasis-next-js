"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const activeFilter = searchParams.get("capacity") ?? "all";

  const handleFilter = (filter: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex justify-center mb-8 px-4">
      <div className="inline-flex flex-col sm:flex-row bg-slate-900/50 border border-slate-700 rounded-xl p-1 shadow-lg backdrop-blur-sm gap-1 sm:gap-0 w-full sm:w-auto max-w-md sm:max-w-none">
        <button
          onClick={() => handleFilter("all")}
          className={`px-4 sm:px-6 py-2.5 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
            activeFilter === "all"
              ? "bg-amber-500 text-slate-900 shadow-md"
              : "text-slate-300 hover:bg-slate-800 hover:text-white"
          }`}
        >
          All cabins
        </button>
        <button
          onClick={() => handleFilter("small")}
          className={`px-4 sm:px-6 py-2.5 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
            activeFilter === "small"
              ? "bg-amber-500 text-slate-900 shadow-md"
              : "text-slate-300 hover:bg-slate-800 hover:text-white"
          }`}
        >
          <span className="sm:hidden">Small</span>
          <span className="hidden sm:inline">Small (1-3)</span>
        </button>
        <button
          onClick={() => handleFilter("medium")}
          className={`px-4 sm:px-6 py-2.5 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
            activeFilter === "medium"
              ? "bg-amber-500 text-slate-900 shadow-md"
              : "text-slate-300 hover:bg-slate-800 hover:text-white"
          }`}
        >
          <span className="sm:hidden">Medium</span>
          <span className="hidden sm:inline">Medium (4-7)</span>
        </button>
        <button
          onClick={() => handleFilter("large")}
          className={`px-4 sm:px-6 py-2.5 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
            activeFilter === "large"
              ? "bg-amber-500 text-slate-900 shadow-md"
              : "text-slate-300 hover:bg-slate-800 hover:text-white"
          }`}
        >
          <span className="sm:hidden">Large</span>
          <span className="hidden sm:inline">Large (8+)</span>
        </button>
      </div>
    </div>
  );
}
