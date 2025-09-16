"use client";

import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="card h-fit sticky top-24">
      <ul className="space-y-2">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.name}>
              <Link
                className={`flex items-center gap-3 py-3 px-4 rounded-lg font-medium group transition-all duration-200 ${
                  isActive
                    ? "text-accent-50 bg-accent-600 hover:bg-accent-700"
                    : "text-primary-200 hover:text-primary-100 hover:bg-primary-700/50"
                }`}
                href={link.href}
              >
                <span className={`transition-colors duration-200 ${
                  isActive
                    ? "text-accent-50"
                    : "text-primary-400 group-hover:text-accent-400"
                }`}>
                  {link.icon}
                </span>
                <span>{link.name}</span>
              </Link>
            </li>
          );
        })}

        <li className="pt-4 mt-4 border-t border-primary-700">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
