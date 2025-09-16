function Spinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <div className="spinner"></div>
        <p className="text-primary-300 animate-pulse">Loading...</p>
      </div>
    </div>
  );
}

export default Spinner;
