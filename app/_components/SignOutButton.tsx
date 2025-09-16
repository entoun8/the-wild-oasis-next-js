import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';

function SignOutButton() {
  return (
    <button className='flex items-center gap-3 py-3 px-4 rounded-lg text-primary-200 hover:text-red-400 hover:bg-red-900/20 transition-all duration-200 font-medium w-full group border border-transparent hover:border-red-800/50'>
      <ArrowRightOnRectangleIcon className='h-5 w-5 text-primary-400 group-hover:text-red-400 transition-colors duration-200' />
      <span>Sign out</span>
    </button>
  );
}

export default SignOutButton;
