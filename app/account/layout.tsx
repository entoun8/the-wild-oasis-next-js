import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="min-h-full bg-[#10182b] lg:bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <SideNavigation />
          </div>
          <div className="lg:col-span-3">
            <div className="card">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
