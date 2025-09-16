import Navigation from '@/app/_components/Navigation';
import Logo from '@/app/_components/Logo';

function Header() {
  return (
    <header className='border-b border-primary-800/50 backdrop-blur-sm bg-primary-900/30 sticky top-0 z-50'>
      <div className='flex justify-between items-center max-w-7xl mx-auto px-6 py-4'>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
