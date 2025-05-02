'use client';

import ArrowLeftIcon from '../../public/icons/arrow-left.svg';

export const BackButton = () => {
  return (
    <button
      type="button"
      onClick={() => window.history.back()}
      className="flex items-center gap-x-2 border border-gray-950/10 bg-white px-5 py-3 font-semibold text-gray-800 shadow-xs outline-none transition-all hover:bg-gray-50 hover:shadow focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
    >
      <ArrowLeftIcon className="size-5" />
      <span>Go Back</span>
    </button>
  );
};
