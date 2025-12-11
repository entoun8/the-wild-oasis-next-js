import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data-service";

export const metadata = {
  title: "Update Profile",
};

export default async function Page() {
  const session = await auth();
  const guest = await getGuest(session?.user?.email || "");

  return (
    <div>
      <h1 className="text-3xl font-light text-accent-400 mb-6">
        Update your <span className="font-medium">guest profile</span>
      </h1>

      <p className="text-lg mb-8 text-primary-200 leading-relaxed">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm guest={guest!}>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-lg text-primary-100 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
          defaultCountry={guest?.nationality || ""}
        />
      </UpdateProfileForm>
    </div>
  );
}
