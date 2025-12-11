"use client";

import { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileMenuButton from "./MobileMenuButton";
import MobileNav from "./MobileNav";
import { NavigationProps } from "../../types";

export default function Navigation({ session }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <DesktopNav session={session} />
      <MobileMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <MobileNav session={session} isOpen={isOpen} onLinkClick={() => setIsOpen(false)} />
    </nav>
  );
}
