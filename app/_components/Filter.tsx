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
    <div>
      <button
        onClick={() => handleFilter("all")}
        className={activeFilter === "all" ? "bg-accent-500 text-primary-50" : "hover:bg-primary-700"}
      >
        All cabins
      </button>
      <button
        onClick={() => handleFilter("small")}
        className={activeFilter === "small" ? "bg-accent-500 text-primary-50" : "hover:bg-primary-700"}
      >
        Small
      </button>
      <button
        onClick={() => handleFilter("medium")}
        className={activeFilter === "medium" ? "bg-accent-500 text-primary-50" : "hover:bg-primary-700"}
      >
        Medium
      </button>
      <button
        onClick={() => handleFilter("large")}
        className={activeFilter === "large" ? "bg-accent-500 text-primary-50" : "hover:bg-primary-700"}
      >
        Large
      </button>
    </div>
  );
}
