import Link from 'next/link';
import { BackButton } from '~/app/_components/back-button';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404',
};

export default function NotFound() {
  return (
    <div className="relative flex min-h-[calc(100dvh-5rem)] justify-center ">
      <div className="absolute inset-0 z-0 flex h-full w-full select-none items-center justify-center font-bold font-krypton text-[28rem] text-gray-200/40">
        404
      </div>
      <div className="z-10 flex w-full max-w-7xl flex-col items-center justify-center gap-y-8 md:gap-y-12">
        <h1 className="font-bold font-caveat text-5xl text-primary-900 md:text-8xl">
          Page ∈ ∅
        </h1>
        <p className="text-balance text-center text-gray-600 text-xl">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col items-center gap-y-6 md:flex-row md:gap-x-6">
          <BackButton />
          <Link
            href="/"
            className="flex items-center gap-x-2 bg-primary-800 px-5 py-3 font-semibold text-shadow text-white shadow-xs transition-all hover:bg-primary-900 hover:text-shadow-lg hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
          >
            <span>Go Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
