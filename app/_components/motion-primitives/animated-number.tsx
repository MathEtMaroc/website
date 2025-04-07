'use client';
import {
  type SpringOptions,
  motion,
  useSpring,
  useTransform,
} from 'motion/react';
import { useEffect } from 'react';
import { cn } from '~/app/utils/cn';

export type AnimatedNumberProps = {
  value: number;
  className?: string;
  springOptions?: SpringOptions;
};

export function AnimatedNumber({
  value,
  className,
  springOptions,
}: AnimatedNumberProps) {
  const spring = useSpring(value, springOptions);

  const display = useTransform(spring, (current) => {
    const rounded = Math.round(current);
    if (rounded >= 10000) {
      return `${Math.round(rounded / 1000)}k`;
    }
    return rounded.toLocaleString();
  });

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return (
    <motion.span className={cn('tabular-nums', className)}>
      {display}
    </motion.span>
  );
}
