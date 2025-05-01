'use client';

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'motion/react';
import { useEffect, useState } from 'react';
import ArrowRightIcon from '../../public/icons/arrow-right.svg';

type windowDimensions = {
  width: number;
  height: number;
};

export function ScrollToTop() {
  const [windowDimensions, setWindowDimensions] = useState<windowDimensions>({
    width: 0,
    height: 0,
  });

  const [documentHeight, setDocumentHeight] = useState<number>(0);

  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setDocumentHeight(
        Math.max(
          document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.clientHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight
        )
      );
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > windowDimensions.height * 2) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  });

  if (documentHeight < 2000) {
    return <div />;
  }
  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          initial={{ y: 100, opacity: 0, filter: 'blur(4px)' }}
          animate={{
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            transition: { duration: 0.6 },
          }}
          exit={{
            y: 100,
            opacity: 0,
            filter: 'blur(4px)',
            transition: { duration: 0.6 },
          }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 1 }}
          className="fixed right-6 bottom-6 z-10 flex size-10 select-none flex-col justify-center rounded-2xl bg-primary-800 font-semibold text-sm text-white shadow-sm hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-primary-800 focus-visible:outline-offset-2"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowRightIcon className="-rotate-90 mx-auto size-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
