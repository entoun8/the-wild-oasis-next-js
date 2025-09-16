function Spinner() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-slate-700 border-t-amber-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-amber-400 rounded-full animate-spin animation-delay-75 opacity-60"></div>
        </div>
        <p className="text-slate-400 animate-pulse text-lg font-medium">Loading cabins...</p>
      </div>
    </div>
  );
}

export default Spinner;
