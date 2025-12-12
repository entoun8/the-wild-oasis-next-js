export interface Cabin {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
  description?: string;
}

export interface Guest {
  id: number;
  created_at?: string;
  fullName: string;
  email: string;
  nationality: string;
  nationalId: string;
  countryFlag: string;
}

export interface Booking {
  id: number;
  created_at: string;
  startDate: string;
  endDate: string;
  numNights: number;
  numGuests: number;
  totalPrice: number;
  guestId: number;
  cabinId: number;
  status?: string;
  cabins?: {
    name: string;
    image: string;
  };
}

export interface Settings {
  id: number;
  minBookingLength: number;
  maxBookingLength: number;
  maxGuestsPerBooking: number;
  breakfastPrice: number;
}

export interface Country {
  name: string;
  flag: string;
}

export interface ReservationRange {
  from?: Date;
  to?: Date;
}

export type CabinFilter = 'all' | 'small' | 'medium' | 'large';

export interface BookingFormData {
  startDate: string;
  endDate: string;
  numGuests: number;
  observations?: string;
}

export interface GuestFormData {
  fullName: string;
  email: string;
  nationality: string;
  nationalId: string;
  countryFlag: string;
}

export interface CabinCardProps {
  cabin: Cabin;
}

export interface CabinsListProps {
  filter: CabinFilter;
}

export interface FilterProps {
  filter: CabinFilter;
}

export interface DateSelectorProps {
  settings: Settings;
  bookedDates: Date[];
  cabin: Cabin;
}

export interface ReservationFormProps {
  cabin: Cabin;
  user: {
    name: string;
    email: string;
    image: string;
    guestId?: number;
  };
}

export interface ReservationContextType {
  range: ReservationRange;
  setRange: (range: ReservationRange) => void;
  resetRange: () => void;
}

export interface ReservationProviderProps {
  children: React.ReactNode;
}

export interface PageProps {
  searchParams?: {
    capacity?: CabinFilter;
    [key: string]: string | string[] | undefined;
  };
}

export interface CabinPageProps {
  params: Promise<{
    cabinId: string;
  }>;
}

export interface CabinProps {
  cabin: Cabin;
}

export interface ReservationProps {
  cabin: Cabin;
}

export interface TextExpanderProps {
  children: string;
}

export interface SubmitButtonProps {
  children: React.ReactNode;
  pendingLabel: string;
}

export interface DeleteReservationProps {
  bookingId: number;
}

export interface SessionUser {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  guestId?: number;
}

export interface NavigationProps {
  session: { user: SessionUser } | null;
}

export interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export interface MobileNavProps {
  session: { user: SessionUser } | null;
  isOpen: boolean;
  onLinkClick: () => void;
}

export interface ReservationCardProps {
  booking: Booking & { observations?: string };
}

export interface SelectCountryProps {
  defaultCountry: string;
  name: string;
  id: string;
  className: string;
}

export interface UpdateProfileFormProps {
  guest: Guest;
  children: React.ReactNode;
}

export interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface AuthUser {
  email?: string | null;
  name?: string | null;
  image?: string | null;
}

export interface AuthSession {
  user: AuthUser & { guestId?: number };
}

export interface AuthCallbacks {
  authorized: ({ auth, request }: { auth: any; request: any }) => boolean;
  signIn: ({ user }: { user: AuthUser }) => Promise<boolean>;
  session: ({ session }: { session: AuthSession }) => Promise<AuthSession>;
}

export interface SessionWithGuestId {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    guestId: number;
  };
}

export interface BookingData {
  startDate: Date | undefined;
  endDate: Date | undefined;
  numNights: number;
  cabinPrice: number;
  cabinId: number;
}