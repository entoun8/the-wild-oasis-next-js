import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MobileMenuButtonProps } from "../../types";

function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <button
      className="md:hidden p-2 text-primary-200 hover:text-accent-400 transition-colors"
      onClick={onClick}
    >
      {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
    </button>
  );
}

export default MobileMenuButton;