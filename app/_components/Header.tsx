import Navigation from '@/app/_components/Navigation';
import Logo from '@/app/_components/Logo';
import { auth } from "@/app/_lib/auth";

async function Header() {
  const session = await auth();

  return (
    <header className='border-b border-primary-800/40 backdrop-blur-md bg-primary-900/90 supports-[backdrop-filter]:bg-primary-900/70 sticky top-0 z-50 shadow-lg shadow-primary-950/30'>
      <div className='flex justify-between items-center max-w-7xl mx-auto px-6 sm:px-8 py-2'>
        <Logo />
        <Navigation session={session as any} />
      </div>
    </header>
  );
}

export default Header;
