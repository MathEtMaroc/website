'use client';

import Link from 'next/link';
import { socials } from '../_data/socials';

export default function FloatingSocials() {
  return (
    <>
      {/* Mobile: Horizontal at bottom */}
      <div className="fixed bottom-8 left-1/2 z-40 flex -translate-x-1/2 flex-col gap-y-6 lg:hidden">
        <nav className="flex flex-row gap-x-4 rounded-full bg-white/80 backdrop-blur px-4 py-3 shadow-sm border border-gray-200/50 hover:bg-white/95 transition-all">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              aria-label={`Follow us on ${social.name}`}
              title={social.name}
            >
              <span className="size-6 flex items-center justify-center">
                {social.icon}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Desktop: Vertical sidebar on left */}
      <div className="hidden lg:fixed lg:left-8 lg:top-1/2 lg:z-40 lg:flex lg:-translate-y-1/2 lg:flex-col lg:gap-y-6">
        <nav className="flex flex-col gap-y-4 rounded-full bg-white/80 backdrop-blur px-3 py-4 shadow-sm border border-gray-200/50 hover:bg-white/95 transition-all">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              aria-label={`Follow us on ${social.name}`}
              title={social.name}
            >
              <span className="size-6 flex items-center justify-center">
                {social.icon}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
