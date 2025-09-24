import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest Area",
};

export default async function Page() {
  const session = await auth();
  const firstName = session?.user?.name.split(" ").at(0);

  return (
    <div>
      <h1 className="text-3xl font-light text-accent-400 mb-8">
        Welcome, <span className="font-medium">{firstName}</span>
      </h1>
      <div className="space-y-6 text-primary-200">
        <p className="text-lg">
          Manage your reservations and profile information from your dashboard.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-primary-800/30 rounded-lg p-6 border border-primary-700">
            <h3 className="font-semibold text-accent-400 mb-2">Quick Stats</h3>
            <p className="text-primary-300">No active reservations</p>
          </div>
          <div className="bg-primary-800/30 rounded-lg p-6 border border-primary-700">
            <h3 className="font-semibold text-accent-400 mb-2">
              Account Status
            </h3>
            <p className="text-primary-300">Profile complete</p>
          </div>
        </div>
      </div>
    </div>
  );
}
