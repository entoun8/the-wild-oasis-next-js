import Link from "next/link";

function DesktopNav({ session }) {
  return (
    <ul className="hidden md:flex gap-4 items-center">
      <li>
        <Link
          href="/cabins"
          className="text-primary-200 hover:text-accent-400 transition-all duration-300 font-medium px-4 py-2.5 rounded-lg hover:bg-primary-800/50 hover:shadow-md active:scale-95"
        >
          Cabins
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className="text-primary-200 hover:text-accent-400 transition-all duration-300 font-medium px-4 py-2.5 rounded-lg hover:bg-primary-800/50 hover:shadow-md active:scale-95"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/account"
          className="text-primary-200 hover:text-accent-400 transition-all duration-300 font-medium px-4 py-2.5 rounded-lg hover:bg-primary-800/50 hover:shadow-md active:scale-95 min-w-[120px] flex items-center justify-center"
        >
          {session?.user?.image ? (
            <div className="flex items-center gap-3">
              <img
                src={session.user.image}
                alt={session.user.name}
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
  );
}

export default DesktopNav;