export default function UpdateProfileForm({ children }) {
  const countryFlag = "pt.jpg";

  return (
    <form className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-primary-200">
            Full name
          </label>
          <input
            disabled
            className="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-lg text-primary-100 placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-60"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-primary-200">
            Email address
          </label>
          <input
            disabled
            className="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-lg text-primary-100 placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-60"
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor="nationality"
            className="block text-sm font-medium text-primary-200"
          >
            Where are you from?
          </label>
          <img
            src={countryFlag}
            alt="Country flag"
            className="h-6 rounded border border-primary-600"
          />
        </div>

        {children}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="nationalID"
          className="block text-sm font-medium text-primary-200"
        >
          National ID number
        </label>
        <input
          name="nationalID"
          className="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-lg text-primary-100 placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
          placeholder="Enter your national ID number"
        />
      </div>

      <div className="flex justify-end pt-6">
        <button className="btn-primary">Update profile</button>
      </div>
    </form>
  );
}
