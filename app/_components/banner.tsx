'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import XCloseIcon from '../../public/icons/x-close.svg';

export function Banner() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [hasScrolledEnough, setHasScrolledEnough] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const isSm = useMediaQuery({ query: '(max-width: 640px)' });

  // Set mounted to true after initial client-side render to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);

    // Initial visibility based on screen size
    if (!isSm) {
      setIsVisible(true);
    }
  }, [isSm]);

  useEffect(() => {
    // Only set up scroll listener after mounting
    if (mounted) {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setHasScrolledEnough(
          isSm ? scrollPosition > 2500 : scrollPosition > 1500
        );
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial scroll position

      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isSm, mounted]);

  // Update visibility for small screens based on scroll position (only after mounting)
  useEffect(() => {
    if (mounted) {
      setIsVisible(hasScrolledEnough);
    }
  }, [hasScrolledEnough, mounted]);

  // Different animation variants based on screen size
  const mobileAnimationVariants = {
    initial: {
      opacity: 0,
      y: 40,
      scale: 1,
      filter: 'blur(2px)',
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 1,
      filter: 'blur(2px)',
    },
  };

  const desktopAnimationVariants = {
    initial: {
      opacity: 0,
      y: 20,
      filter: 'blur(4px)',
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
    },
    exit: {
      opacity: 0,
      y: 10,
      filter: 'blur(4px)',
    },
  };

  // Avoid rendering until client-side hydration is complete
  if (!mounted) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <div
          className={`pointer-events-none fixed inset-x-0 bottom-0 ${isSm ? 'z-35' : 'sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8'}`}
        >
          <motion.div
            variants={isSm ? mobileAnimationVariants : desktopAnimationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              type: 'tween',
              ease: 'easeOut',
              duration: 0.6,
              ...(isSm ? {} : { delay: 1.8 }),
            }}
            className={`pointer-events-auto flex items-center justify-between gap-x-6 bg-primary-950 px-6 py-2.5 ${
              isSm ? '' : 'sm:rounded-xl sm:py-3 sm:pr-3.5 sm:pl-4'
            }`}
          >
            <p className="text-sm/6 text-white">
              <Link
                href="/"
                className="group relative inline-block hover:underline focus-visible:underline focus-visible:outline-0"
              >
                <strong className="font-semibold">
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
                  className="transition-transform group-focus-visible:translate-x-0.5"
                >
                  &rarr;
                </span>
              </Link>
            </p>
            <button
              type="button"
              className="-m-1.5 flex-none rounded-md p-1.5 text-white transition-colors hover:bg-primary-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-950"
              onClick={() => setIsVisible(false)}
            >
              <span className="sr-only">Dismiss</span>
              <XCloseIcon aria-hidden="true" className="size-5" />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
