'use client';

import { useInView } from 'motion/react';
import type { SpringOptions } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { AnimatedNumber } from './motion-primitives/animated-number';

export type AnimatedStatProps = {
  targetValue: number;
  suffix?: string;
  className?: string; // For the outer div container
  title: string;
  ddClassName?: string; // For the <dd> element wrapping the number
  springOptions?: SpringOptions; // Add springOptions prop
};

export default function AnimatedStat({
  targetValue,
  suffix,
  className,
  title,
  ddClassName,
  springOptions,
}: AnimatedStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Trigger when the element enters the viewport, only once
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [valueToAnimate, setValueToAnimate] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Start the animation by setting the target value
      setValueToAnimate(targetValue);
    }
  }, [isInView, targetValue]);

  return (
    // Apply className to the container div and attach the ref
    <div ref={ref} className={className}>
      <dt className="text-pretty font-semibold text-gray-900 text-lg">
        {title}
      </dt>
      {/* Apply ddClassName to the <dd> element */}
      <dd className={ddClassName}>
        {/* Use the imported AnimatedNumber component */}
        <AnimatedNumber value={valueToAnimate} springOptions={springOptions} />
        {suffix}
      </dd>
    </div>
  );
}
