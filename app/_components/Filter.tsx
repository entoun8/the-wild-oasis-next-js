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
    <div className="flex justify-center mb-8">
      <div className="inline-flex bg-slate-900/50 border border-slate-700 rounded-xl p-1 shadow-lg backdrop-blur-sm">
        <button
          onClick={() => handleFilter("all")}
          className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${
            activeFilter === "all"
              ? "bg-amber-500 text-slate-900 shadow-md"
              : "text-slate-300 hover:bg-slate-800 hover:text-white"
          }`}
        >
          All cabins
        </button>
        <button
          onClick={() => handleFilter("small")}
          className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${
            activeFilter === "small"
              ? "bg-amber-500 text-slate-900 shadow-md"
              : "text-slate-300 hover:bg-slate-800 hover:text-white"
          }`}
        >
          Small (1-3)
        </button>
        <button
          onClick={() => handleFilter("medium")}
          className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${
            activeFilter === "medium"
              ? "bg-amber-500 text-slate-900 shadow-md"
              : "text-slate-300 hover:bg-slate-800 hover:text-white"
          }`}
        >
          Medium (4-7)
        </button>
        <button
          onClick={() => handleFilter("large")}
          className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${
            activeFilter === "large"
              ? "bg-amber-500 text-slate-900 shadow-md"
              : "text-slate-300 hover:bg-slate-800 hover:text-white"
          }`}
        >
          Large (8+)
        </button>
      </div>
    </div>
  );
}
