"use server";

import { auth, signIn, signOut } from "@/app/_lib/auth";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";
import { SessionWithGuestId, BookingData } from "../../types";

export async function updateGuest(formData: FormData) {
  const session = await auth() as SessionWithGuestId | null;
  if (!session?.user?.guestId) throw new Error("You must be logged in");

  const nationalID = formData.get("nationalId") as string;
  const nationality = formData.get("nationality") as string;

  if (!nationality || nationality === "") {
    throw new Error("Please select a country");
  }

  const [nationalityName, countryFlag] = nationality.split("%");

  if (!nationalID || !/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provide a valid national ID (6-12 alphanumeric characters)");

  const updateData = { nationalId: nationalID, countryFlag, nationality: nationalityName };

  const { error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) {
    console.error("Supabase error:", error);
    throw new Error(`Guest could not be updated: ${error.message}`);
  }

  revalidatePath("/account/profile");
  redirect("/account/profile");
}

export async function createBooking(bookingData: BookingData, formData: FormData) {
  const session = await auth() as SessionWithGuestId | null;
  if (!session?.user?.guestId) throw new Error("you must be logged in");

  const observations = formData.get("observations") as string;
  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: Number(formData.get("numGuests")),
    observations: observations?.slice(0, 1000) || "",
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };

  const { error } = await supabase.from("bookings").insert([newBooking]);

  if (error) {
    console.error("Supabase error:", error);
    throw new Error(`Booking could not be created: ${error.message}`);
  }

  revalidatePath(`/cabins/${bookingData.cabinId}`);

  redirect("/cabins/thankyou");
}

export async function deleteBooking(bookingId: number) {
  const session = await auth() as SessionWithGuestId | null;
  if (!session?.user?.guestId) throw new Error("you must be logged in");

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId))
    throw new Error("you are not allowed to delete this booking");

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) {
    throw new Error("Booking could not be deleted");
  }

  revalidatePath("/account/reservations");
}

export async function updateBooking(formData: FormData) {
  const bookingId = Number(formData.get("bookingId"));

  const session = await auth() as SessionWithGuestId | null;
  if (!session?.user?.guestId) throw new Error("you must be logged in");

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId))
    throw new Error("you are not allowed to update this booking");

  const observations = formData.get("observations") as string;
  const updateData = {
    numGuests: Number(formData.get("numGuests")),
    observations: observations?.slice(0, 1000) || "",
  };

  const { error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", bookingId)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }

  revalidatePath("/account/reservations");
  revalidatePath(`/account/reservations/${bookingId}`);

  redirect("/account/reservations");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
