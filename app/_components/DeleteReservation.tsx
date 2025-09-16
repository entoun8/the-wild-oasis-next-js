import { TrashIcon } from '@heroicons/react/24/solid';

function DeleteReservation({ bookingId }) {
  return (
    <button className='flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-primary-300 hover:text-red-400 hover:bg-red-900/20 border border-transparent hover:border-red-800/50 transition-all duration-200 text-sm font-medium group flex-1 md:flex-none'>
      <TrashIcon className='h-4 w-4 text-primary-400 group-hover:text-red-400 transition-colors' />
      <span>Delete</span>
    </button>
  );
}

export default DeleteReservation;
