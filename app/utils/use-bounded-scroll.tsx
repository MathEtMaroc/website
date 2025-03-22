'use client';

import {
  type MotionValue,
  useMotionValue,
  useScroll,
  useTransform,
} from 'motion/react';
import { useEffect } from 'react';

interface UseBoundedScrollReturn {
  scrollYBounded: MotionValue<number>;
  scrollYBoundedProgress: MotionValue<number>;
  immediateScrollProgress: MotionValue<number>;
  scrollYBoundedProgressDelayed: MotionValue<number>;
}

/**
 * Hook that provides bounded scroll values and progress
 * @param threshold - The maximum scroll value to track
 * @returns Object containing bounded scroll values and progress
 */
export default function useBoundedScroll(
  threshold: number
): UseBoundedScrollReturn {
  const { scrollY } = useScroll();
  const scrollYBounded = useMotionValue(0);
  const scrollYBoundedProgress = useTransform(
    scrollYBounded,
    [0, threshold],
    [0, 1]
  );

  // Add a delayed transform that only kicks in after 75% of the scroll threshold
  const scrollYBoundedProgressDelayed = useTransform(
    scrollYBoundedProgress,
    [0, 0.75, 1],
    [0, 0, 1]
  );

  // Immediate scroll progress (no delay or interpolation)
  const immediateScrollProgress = useTransform(
    scrollY,
    [0, threshold],
    [0, 1],
    { clamp: true }
  );

  useEffect(() => {
    return scrollY.on('change', (current) => {
      const previous = scrollY.getPrevious() || 0;
      const diff = current - previous;
      const newScrollYBounded = scrollYBounded.get() + diff;

      // Clamp the value between 0 and threshold
      scrollYBounded.set(Math.min(Math.max(newScrollYBounded, 0), threshold));
    });
  }, [threshold, scrollY, scrollYBounded]);

  return {
    scrollYBounded,
    scrollYBoundedProgress,
    immediateScrollProgress,
    scrollYBoundedProgressDelayed,
  };
}
