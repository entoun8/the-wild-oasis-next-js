import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative">
        <Image
          src={logo}
          height="48"
          width="48"
          alt="The Wild Oasis logo"
          quality={100}
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <span className="text-xl font-bold text-primary-100 group-hover:text-accent-400 transition-colors duration-200">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
