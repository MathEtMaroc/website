'use client';

import { XMarkIcon } from '@heroicons/react/20/solid';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export function Banner() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [hasScrolledEnough, setHasScrolledEnough] = useState<boolean>(false);
  const isSm = useMediaQuery({ query: '(max-width: 640px)' });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 600) {
        setHasScrolledEnough(true);
      } else {
        setHasScrolledEnough(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update visibility based on screen size and scroll position
  useEffect(() => {
    setIsVisible(isSm && hasScrolledEnough);
  }, [isSm, hasScrolledEnough]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-35 sm:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 10, filter: 'blur(2px)' }}
            transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 1,
            }}
            className="pointer-events-auto flex items-center justify-between gap-x-6 bg-primary-950 px-6 py-2.5"
          >
            <p className="text-sm/6 text-white">
              <a
                href="/"
                className="group outline-none transition-colors focus-visible:rounded focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-primary-950"
              >
                <strong className="font-semibold group-hover:underline group-focus-visible:underline">
                  Moroccan Day of Mathematics 2025
                </strong>
                <svg
                  viewBox="0 0 2 2"
                  aria-hidden="true"
                  className="mx-2 inline size-0.5 fill-current"
                >
                  <circle r={1} cx={1} cy={1} />
                </svg>
                Join us in Ifrane from June 11 – 16&nbsp;
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5"
                >
                  &rarr;
                </span>
              </a>
            </p>
            <button
              type="button"
              className="-m-1.5 flex-none rounded-md p-1.5 text-white transition-colors hover:bg-primary-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-950"
              onClick={() => setIsVisible(false)}
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon aria-hidden="true" className="size-5" />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
