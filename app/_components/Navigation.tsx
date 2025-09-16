import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex gap-8 items-center">
        <li>
          <Link
            href="/cabins"
            className="text-primary-200 hover:text-accent-400 transition-colors duration-200 font-medium px-4 py-2 rounded-lg hover:bg-primary-800/30"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-primary-200 hover:text-accent-400 transition-colors duration-200 font-medium px-4 py-2 rounded-lg hover:bg-primary-800/30"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="text-primary-200 hover:text-accent-400 transition-colors duration-200 font-medium px-4 py-2 rounded-lg hover:bg-primary-800/30"
          >
            Guest area
          </Link>
        </li>
      </ul>
    </nav>
  );
}
