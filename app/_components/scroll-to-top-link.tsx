'use client';

import ArrowRightIcon from '../../public/icons/arrow-right.svg';

export default function ScrollToTopLink() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="flex items-center gap-x-2 font-semibold text-primary-200 transition-colors hover:text-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-100 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
    >
      <span>Back to top</span>
      <ArrowRightIcon className="-rotate-90 size-4" />
    </button>
  );
}
