import Link from "next/link";
import { MobileNavProps } from "../../types";

function MobileNav({ session, isOpen, onLinkClick }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 right-0 bg-primary-900 border-t border-primary-800 md:hidden">
      <ul className="flex flex-col py-4">
        <li>
          <Link
            href="/cabins"
            className="block px-6 py-3 text-primary-200 hover:text-accent-400 hover:bg-primary-800/50 transition-all"
            onClick={onLinkClick}
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="block px-6 py-3 text-primary-200 hover:text-accent-400 hover:bg-primary-800/50 transition-all"
            onClick={onLinkClick}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="block px-6 py-3 text-primary-200 hover:text-accent-400 hover:bg-primary-800/50 transition-all"
            onClick={onLinkClick}
          >
            {session?.user?.image ? (
              <div className="flex items-center gap-3">
                <img
                  src={session.user.image}
                  alt={session.user.name || ""}
                  referrerPolicy="no-referrer"
                  className="h-8 w-8 rounded-full ring-2 ring-accent-400/30"
                />
                <span>Guest area</span>
              </div>
            ) : (
              <span>Guest area</span>
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;