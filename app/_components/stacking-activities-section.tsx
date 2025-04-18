'use client';

import { cubicBezier, motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Activity } from './activity';

interface ActivityData {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  imageSrc: string;
  imageAlt: string;
  highlight?: string;
}

interface StackingActivitiesSectionProps {
  title: string;
  subtitle: string;
  activities: ActivityData[];
}

// Custom easing functions for animations
const luxuryEaseOut = cubicBezier(0.33, 1, 0.68, 1);
const silkyEaseInOut = cubicBezier(0.76, 0, 0.24, 1);
const springyDeceleration = cubicBezier(0.34, 1.56, 0.64, 1);
const softBounce = cubicBezier(0.22, 1.2, 0.36, 1);

export default function StackingActivitiesSection({
  title,
  subtitle,
  activities,
}: StackingActivitiesSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  // Use react-responsive to check viewport size
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isSmallHeight = useMediaQuery({ maxHeight: 899 });
  const useSimpleLayout = isMobile || isSmallHeight;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Calculate the section height based on layout
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const calculateHeight = () => {
        if (useSimpleLayout) {
          // For simple layout, just enough height for stacked cards
          return activities.length * 600 + 150;
        }

        // For animated layout, we need more scroll room
        const baseHeight = window.innerHeight * 0.6;
        const scrollPerCard = 800;
        return baseHeight + (activities.length - 1) * scrollPerCard + 150;
      };

      setContainerHeight(calculateHeight());

      const handleResize = () => setContainerHeight(calculateHeight());
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [activities.length, useSimpleLayout]);

  // Create all transforms outside the render loop
  const transformsArray = activities.map((_, index) => {
    const cardCount = activities.length;
    const segmentSize = 1 / cardCount;
    const animationSize = segmentSize * 0.65;

    const exactStart = index * segmentSize;
    const animationEnd = exactStart + animationSize;
    const nextStart = index < cardCount - 1 ? (index + 1) * segmentSize : 1;

    // Generate unique rotation pattern based on index
    const getRotationPattern = (idx: number) => {
      switch (idx % 4) {
        case 0:
          return {
            start: '4deg',
            mid1: '3.5deg',
            mid2: '3deg',
            mid3: '2.5deg',
            end1: '2deg',
            end2: '1.8deg',
          };
        case 1:
          return {
            start: '-4deg',
            mid1: '-3.5deg',
            mid2: '-3deg',
            mid3: '-2.5deg',
            end1: '-2deg',
            end2: '-1.8deg',
          };
        case 2:
          return {
            start: '3.5deg',
            mid1: '3deg',
            mid2: '2.7deg',
            mid3: '2.2deg',
            end1: '1.8deg',
            end2: '1.5deg',
          };
        case 3:
          return {
            start: '-3.5deg',
            mid1: '-3deg',
            mid2: '-2.7deg',
            mid3: '-2.2deg',
            end1: '-1.8deg',
            end2: '-1.5deg',
          };
        default:
          return {
            start: '0deg',
            mid1: '0deg',
            mid2: '0deg',
            mid3: '0deg',
            end1: '0deg',
            end2: '0deg',
          };
      }
    };

    const rotationPattern = getRotationPattern(index);

    return {
      // biome-ignore lint/correctness/useHookAtTopLevel:
      yTransform: useTransform(
        scrollYProgress,
        [exactStart, animationEnd],
        ['0px', '0px'],
        { ease: luxuryEaseOut }
      ),
      // biome-ignore lint/correctness/useHookAtTopLevel:
      opacityTransform: useTransform(
        scrollYProgress,
        [
          exactStart,
          exactStart + animationSize * 0.05,
          exactStart + animationSize * 0.1,
          exactStart + animationSize * 0.15,
          exactStart + animationSize * 0.2,
          exactStart + animationSize * 0.25,
          exactStart + animationSize * 0.3,
          exactStart + animationSize * 0.4,
          animationEnd,
          nextStart,
        ],
        [
          index === 0 ? 1 : 0,
          index === 0 ? 1 : 0.15,
          index === 0 ? 1 : 0.3,
          index === 0 ? 1 : 0.5,
          index === 0 ? 1 : 0.7,
          index === 0 ? 1 : 0.85,
          index === 0 ? 1 : 0.95,
          index === 0 ? 1 : 1,
          1,
          1,
        ],
        { ease: silkyEaseInOut }
      ),
      // biome-ignore lint/correctness/useHookAtTopLevel:
      blurTransform: useTransform(
        scrollYProgress,
        [
          exactStart,
          exactStart + animationSize * 0.05,
          exactStart + animationSize * 0.1,
          exactStart + animationSize * 0.15,
          exactStart + animationSize * 0.25,
          exactStart + animationSize * 0.35,
        ],
        [
          index === 0 ? '0px' : '8px',
          index === 0 ? '0px' : '6px',
          index === 0 ? '0px' : '4px',
          index === 0 ? '0px' : '2px',
          index === 0 ? '0px' : '1px',
          '0px',
        ],
        { ease: silkyEaseInOut }
      ),
      // biome-ignore lint/correctness/useHookAtTopLevel:
      scaleTransform: useTransform(
        scrollYProgress,
        [
          exactStart,
          exactStart + animationSize * 0.05,
          exactStart + animationSize * 0.1,
          exactStart + animationSize * 0.15,
          exactStart + animationSize * 0.2,
          exactStart + animationSize * 0.25,
          exactStart + animationSize * 0.3,
          exactStart + animationSize * 0.35,
          exactStart + animationSize * 0.4,
          exactStart + animationSize * 0.5,
          animationEnd,
          nextStart,
        ],
        [
          index === 0 ? 1 : 0.7,
          index === 0 ? 1 : 0.78,
          index === 0 ? 1 : 0.85,
          index === 0 ? 1 : 0.9,
          index === 0 ? 1 : 0.95,
          index === 0 ? 1 : 0.98,
          index === 0 ? 1 : 1.0,
          index === 0 ? 1 : 1.02,
          index === 0 ? 1 : 1.03,
          index === 0 ? 1 : 1.02,
          index === 0 ? 1 : 1.01,
          index === 0 ? 1 : 1.01,
        ],
        { ease: softBounce }
      ),
      // biome-ignore lint/correctness/useHookAtTopLevel:
      rotateTransform: useTransform(
        scrollYProgress,
        [
          exactStart,
          exactStart + animationSize * 0.1,
          exactStart + animationSize * 0.15,
          exactStart + animationSize * 0.25,
          exactStart + animationSize * 0.4,
          exactStart + animationSize * 0.6,
          exactStart + animationSize * 0.8,
          animationEnd,
          nextStart,
        ],
        [
          index === 0 ? '0deg' : rotationPattern.start,
          index === 0 ? '0deg' : rotationPattern.mid1,
          index === 0 ? '0deg' : rotationPattern.mid1,
          index === 0 ? '0deg' : rotationPattern.mid2,
          index === 0 ? '0deg' : rotationPattern.mid3,
          index === 0 ? '0deg' : rotationPattern.end1,
          index === 0 ? '0deg' : rotationPattern.end2,
          index === 0 ? '0deg' : rotationPattern.end2,
          index === 0 ? '0deg' : rotationPattern.end2,
        ],
        { ease: springyDeceleration }
      ),
    };
  });

  if (useSimpleLayout) {
    return (
      <section
        className="relative w-full pt-16 md:pt-24"
        style={{ height: 'auto' }}
      >
        <div className="flex flex-col items-center">
          <div className="mb-12 flex w-full max-w-7xl flex-col items-center">
            <div className="mb-8 flex w-full max-w-3xl flex-col items-center gap-5">
              <h2 className="text-pretty text-center font-semibold text-3xl text-primary-900 tracking-tighter md:text-4xl">
                {title}
              </h2>
              <p className="text-balance text-center font-bold font-caveat text-2xl text-gray-600 md:text-[28px]">
                {subtitle}
              </p>
            </div>
          </div>

          {/* Activity cards stacked directly with no styling */}
          <div className="flex w-full max-w-7xl flex-col">
            {activities.map((activity, index) => {
              const isEven = index % 2 === 1;
              return (
                <div key={index} className="w-full">
                  <Activity
                    title={activity.title}
                    description={activity.description}
                    linkText={activity.linkText}
                    linkHref={activity.linkHref}
                    imageSrc={activity.imageSrc}
                    imageAlt={activity.imageAlt}
                    highlight={activity.highlight}
                    isEven={isEven}
                  />
                </div>
              );
            })}
          </div>

          <div className="h-24" aria-hidden="true" />
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative w-full scroll-mt-16 pt-16 md:pt-24"
      style={{
        height: `${containerHeight}px`,
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
      }}
    >
      {/* Fixed content that stays in view during scrolling */}
      <div className="sticky top-20 z-10 flex flex-col items-center md:top-24">
        <div className="flex w-full max-w-7xl flex-col items-center px-8">
          <div className="mb-8 flex w-full max-w-3xl flex-col items-center gap-5 lg:mb-16">
            <h2 className="text-pretty text-center font-semibold text-3xl text-primary-900 tracking-tighter md:text-4xl">
              {title}
            </h2>
            <p className="text-balance text-center font-bold font-caveat text-2xl text-gray-600 md:text-[28px]">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Activity cards stack */}
        <div className="relative h-[500px] w-full max-w-7xl overflow-visible">
          {activities.map((activity, index) => {
            const isEven = index % 2 === 1;

            return (
              <motion.div
                key={index}
                className="absolute inset-0 will-change-transform"
                style={{
                  y: transformsArray[index].yTransform,
                  opacity: transformsArray[index].opacityTransform,
                  scale: transformsArray[index].scaleTransform,
                  rotate: transformsArray[index].rotateTransform,
                  filter: `blur(${transformsArray[index].blurTransform})`,
                  zIndex: index,
                  transformOrigin: 'center center',
                  perspective: '1200px',
                  backfaceVisibility: 'hidden',
                  transform: 'translate3d(0,0,0)',
                  transition: 'all 0.05s linear',
                }}
                initial={false}
              >
                <Activity
                  title={activity.title}
                  description={activity.description}
                  linkText={activity.linkText}
                  linkHref={activity.linkHref}
                  imageSrc={activity.imageSrc}
                  imageAlt={activity.imageAlt}
                  highlight={activity.highlight}
                  isEven={isEven}
                />
              </motion.div>
            );
          })}
        </div>

        <div
          className="h-32 sm:h-48 md:h-96 lg:h-48 xl:h-24"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
