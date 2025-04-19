'use client';

import { cubicBezier, motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
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
const softBounce = cubicBezier(0.22, 1.2, 0.36, 1);

export default function StackingActivitiesSection({
  title,
  subtitle,
  activities,
}: StackingActivitiesSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // Add state for client-side rendering check
  const [isClient, setIsClient] = useState(false);
  // Track the current active card index to adjust z-indices
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Set isClient to true on component mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Use client-side only media queries
  const [useSimpleLayout, setUseSimpleLayout] = useState(false);

  // Move media query detection to useEffect to prevent hydration mismatch
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 767;
      const isSmallHeight = window.innerHeight <= 899;
      setUseSimpleLayout(isMobile || isSmallHeight);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fixed height for scroll container in animated mode
  const SCROLL_CONTAINER_HEIGHT = 8000;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Update active card based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const cardCount = activities.length;
      // Calculate which card should be active based on scroll position
      const segmentSize = 1 / cardCount;
      const newActiveIndex = Math.min(
        cardCount - 1,
        Math.floor(latest / segmentSize)
      );
      if (newActiveIndex !== activeCardIndex) {
        setActiveCardIndex(newActiveIndex);
      }
    });

    return () => unsubscribe();
  }, [activities.length, scrollYProgress, activeCardIndex]);

  // Create all transforms outside the render loop
  const transformsArray = activities.map((_, index) => {
    const cardCount = activities.length;

    // Divide scroll progress evenly between cards
    const segmentSize = 1 / cardCount;

    // Calculate start and end points for this card's animation
    const startProgress = index * segmentSize;
    const midProgress = startProgress + segmentSize * 0.5;
    const endProgress = (index + 1) * segmentSize;

    // Generate unique rotation pattern based on index
    const getRotationPattern = (idx: number) => {
      const baseRotation = idx % 2 === 0 ? 4 : -4;
      return {
        start: `${baseRotation}deg`,
        mid: `${baseRotation * 0.6}deg`,
        end: `${baseRotation * 0.3}deg`,
      };
    };

    const rotationPattern = getRotationPattern(index);

    return {
      opacityTransform: useTransform(
        scrollYProgress,
        [
          startProgress,
          startProgress + segmentSize * 0.1,
          startProgress + segmentSize * 0.2,
          endProgress,
        ],
        [index === 0 ? 1 : 0, index === 0 ? 1 : 0.7, index === 0 ? 1 : 1, 1],
        { ease: silkyEaseInOut }
      ),
      scaleTransform: useTransform(
        scrollYProgress,
        [
          startProgress,
          startProgress + segmentSize * 0.1,
          startProgress + segmentSize * 0.3,
          midProgress,
          endProgress - segmentSize * 0.3,
          endProgress,
        ],
        [
          index === 0 ? 1 : 0.85,
          index === 0 ? 1 : 0.9,
          index === 0 ? 1 : 0.95,
          index === 0 ? 1 : 1,
          index === 0 ? 1 : 1,
          index === 0 ? 1 : 1,
        ],
        { ease: softBounce }
      ),
      blurTransform: useTransform(
        scrollYProgress,
        [
          startProgress,
          startProgress + segmentSize * 0.1,
          startProgress + segmentSize * 0.2,
        ],
        [index === 0 ? '0px' : '4px', index === 0 ? '0px' : '2px', '0px'],
        { ease: silkyEaseInOut }
      ),
      rotateTransform: useTransform(
        scrollYProgress,
        [
          startProgress,
          startProgress + segmentSize * 0.2,
          midProgress,
          endProgress,
        ],
        [
          index === 0 ? '0deg' : rotationPattern.start,
          index === 0 ? '0deg' : rotationPattern.mid,
          index === 0 ? '0deg' : rotationPattern.end,
          index === 0 ? '0deg' : rotationPattern.end,
        ],
        { ease: luxuryEaseOut }
      ),
    };
  });

  // Initial server-side render with skeleton/placeholder
  if (!isClient) {
    return (
      <section className="relative w-full pt-16 md:pt-24">
        <div className="flex flex-col items-center">
          <div className="mb-8 flex w-full max-w-7xl flex-col items-center">
            <div className="flex w-full max-w-3xl flex-col items-center gap-5 px-4">
              <h2 className="text-pretty text-center font-semibold text-3xl text-primary-900 tracking-tighter md:text-4xl">
                {title}
              </h2>
              <p className="text-balance text-center font-bold font-caveat text-2xl text-gray-600 md:text-[28px]">
                {subtitle}
              </p>
            </div>
          </div>
          <div className="h-64 w-full animate-pulse bg-gray-100" />
        </div>
      </section>
    );
  }

  if (useSimpleLayout) {
    return (
      <section className="relative w-full pt-16 md:pt-24">
        <div className="flex flex-col items-center">
          <div className="mb-8 flex w-full max-w-7xl flex-col items-center">
            <div className="flex w-full max-w-3xl flex-col items-center gap-5 px-4">
              <h2 className="text-pretty text-center font-semibold text-3xl text-primary-900 tracking-tighter md:text-4xl">
                {title}
              </h2>
              <p className="text-balance text-center font-bold font-caveat text-2xl text-gray-600 md:text-[28px]">
                {subtitle}
              </p>
            </div>
          </div>

          {/* Activity cards stacked without gaps */}
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
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative w-full scroll-mt-16 pt-16 md:pt-24"
      style={{
        height: `${SCROLL_CONTAINER_HEIGHT}px`,
        scrollSnapAlign: 'start',
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
        <div className="relative h-150 w-full max-w-7xl overflow-visible">
          {/* Sort cards by active index for proper stacking order */}
          {[...activities].map((activity, originalIndex) => {
            const isEven = originalIndex % 2 === 1;

            // Calculate dynamic z-index
            // Active card should be on top (highest z-index)
            // Cards that will appear next should be below
            // Cards that have already been shown should be at the bottom
            const zIndexValue = (() => {
              if (originalIndex === activeCardIndex) {
                return activities.length; // Current card on top
              }
              if (originalIndex > activeCardIndex) {
                // Future cards: the closer to active, the higher z-index
                return activities.length - (originalIndex - activeCardIndex);
              }
              // Past cards: lowest z-index, but maintain order among themselves
              return originalIndex;
            })();

            return (
              <motion.div
                key={originalIndex}
                className="absolute inset-0 will-change-transform"
                style={{
                  opacity: transformsArray[originalIndex].opacityTransform,
                  scale: transformsArray[originalIndex].scaleTransform,
                  rotate: transformsArray[originalIndex].rotateTransform,
                  filter: `blur(${transformsArray[originalIndex].blurTransform})`,
                  zIndex: zIndexValue,
                  transformOrigin: 'center center',
                  perspective: '1200px',
                  backfaceVisibility: 'hidden',
                  transform: 'translate3d(0,0,0)',
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
      </div>
    </section>
  );
}
