'use client';

import { AnimatePresence, cubicBezier, motion, useScroll } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import type React from 'react';
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
  const [cardRefs, setCardRefs] = useState<Array<HTMLDivElement | null>>(
    new Array(activities.length).fill(null)
  );
  const [isClient, setIsClient] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

  // Update refs array when activities length changes
  useEffect(() => {
    setCardRefs(new Array(activities.length).fill(null));
  }, [activities.length]);

  // Ref callback function
  const updateCardRef = (element: HTMLDivElement | null, index: number) => {
    setCardRefs((prevRefs) => {
      const newRefs = [...prevRefs];
      newRefs[index] = element;
      return newRefs;
    });
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Media query detection
  const [useSimpleLayout, setUseSimpleLayout] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 767;
      const isSmallHeight = window.innerHeight <= 899;
      setUseSimpleLayout(isMobile || isSmallHeight);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll tracking
  const { scrollY } = useScroll({ target: containerRef });

  useEffect(() => {
    if (!isClient) {
      return;
    }

    let lastScrollY = 0;
    const unsubscribe = scrollY.on('change', (latest) => {
      const sectionHeight = window.innerHeight * 1.2;
      const newIndex = Math.min(
        activities.length - 1,
        Math.floor(latest / sectionHeight)
      );

      setScrollDirection(latest > lastScrollY ? 'down' : 'up');
      lastScrollY = latest;

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    });

    return () => unsubscribe();
  }, [scrollY, activities.length, activeIndex, isClient]);

  // Navigation
  const navigateToCard = (index: number) => {
    if (!containerRef.current) {
      return;
    }

    const targetPos = window.innerHeight * 1.2 * index;
    window.scrollTo({
      top: containerRef.current.offsetTop + targetPos,
      behavior: 'smooth',
    });

    setActiveIndex(index);

    // Focus the newly active card if it exists
    setTimeout(() => {
      if (cardRefs[index]) {
        cardRefs[index]?.focus();
      }
    }, 500);
  };

  // Focus handling for Tab navigation
  const handleFocus = (index: number) => {
    if (index !== activeIndex) {
      navigateToCard(index);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      if (activeIndex < activities.length - 1) {
        navigateToCard(activeIndex + 1);
      }
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      if (activeIndex > 0) {
        navigateToCard(activeIndex - 1);
      }
    }
  };

  // Server-side render placeholder
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

  // Simple layout for mobile/small screens
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
                    simpleLayout={true}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // Scroll-driven animated layout
  return (
    <section
      ref={containerRef}
      className="relative scroll-mt-24"
      style={{
        height: `${activities.length * 120}vh`,
      }}
      onKeyDown={handleKeyDown}
      aria-roledescription="carousel"
      aria-label={title}
    >
      <div className="sticky top-0 flex h-screen w-full flex-col pt-16 md:pt-20">
        {/* Header */}
        <div className="z-20 py-6 md:py-8">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-8">
            <div className="flex w-full max-w-3xl flex-col items-center gap-5">
              <h2 className="text-pretty text-center font-semibold text-3xl text-primary-900 tracking-tighter md:text-4xl">
                {title}
              </h2>
              <p className="text-balance text-center font-bold font-caveat text-2xl text-gray-600 md:text-[28px]">
                {subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Card animation container */}
        <div className="relative flex flex-1 items-center justify-center px-4">
          <AnimatePresence mode="sync">
            {/* biome-ignore lint/complexity/noExcessiveCognitiveComplexity: */}
            {activities.map((activity, index) => {
              const isEven = index % 2 === 1;
              // Instead of filtering out non-active, we'll render all but position them
              return (
                <motion.div
                  key={`activity-${index}`}
                  ref={(el) => updateCardRef(el, index)}
                  className="w-full max-w-7xl"
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    rotate: isEven ? '-6deg' : '6deg',
                    y: scrollDirection === 'down' ? 30 : -30,
                    filter: 'blur(10px)',
                    position: 'absolute',
                    zIndex: 1,
                  }}
                  animate={
                    index === activeIndex
                      ? {
                          opacity: 1,
                          scale: 1,
                          rotate: '0deg',
                          y: 0,
                          filter: 'blur(0px)',
                          position: 'relative',
                          zIndex: 10,
                          transition: {
                            opacity: { duration: 0.6, ease: silkyEaseInOut },
                            scale: { duration: 0.7, ease: softBounce },
                            rotate: { duration: 0.7, ease: luxuryEaseOut },
                            y: { duration: 0.6, ease: silkyEaseInOut },
                            filter: { duration: 0.5, ease: silkyEaseInOut },
                          },
                        }
                      : {
                          opacity: 0,
                          scale: 0.9,
                          rotate: isEven ? '4deg' : '-4deg',
                          y: scrollDirection === 'down' ? -30 : 30,
                          filter: 'blur(6px)',
                          position: 'absolute',
                          zIndex: 1,
                        }
                  }
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    rotate: isEven ? '6deg' : '-6deg',
                    y: scrollDirection === 'down' ? -30 : 30,
                    filter: 'blur(10px)',
                    position: 'absolute',
                    zIndex: 1,
                    transition: {
                      opacity: { duration: 1.0, ease: silkyEaseInOut },
                      scale: { duration: 1.1, ease: softBounce },
                      rotate: { duration: 1.1, ease: luxuryEaseOut },
                      y: { duration: 1.0, ease: silkyEaseInOut },
                      filter: { duration: 0.9, ease: silkyEaseInOut },
                    },
                  }}
                  onFocus={() => handleFocus(index)}
                  aria-label={`Activity ${index + 1} of ${activities.length}: ${activity.title}`}
                  style={{
                    display:
                      Math.abs(index - activeIndex) <= 1 ? 'block' : 'none', // Only render adjacent cards for performance
                    pointerEvents: index === activeIndex ? 'auto' : 'none', // Only active card can receive pointer events
                  }}
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
                    simpleLayout={false}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Hidden navigation buttons for tab sequence - Only render if not the last card */}
        <div className="sr-only">
          {activities.map((_, index) => (
            // Only show buttons for navigation that aren't the current card or immediately after the last card
            // This helps prevent tab trapping and allows focus to escape after the last card
            <button
              key={index}
              type="button"
              tabIndex={
                activeIndex === index ||
                (activeIndex === activities.length - 1 && index > activeIndex)
                  ? -1
                  : 0
              }
              onFocus={() => navigateToCard(index)}
              aria-label={`Go to activity ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation helper - updates when activeIndex changes */}
        <div className="sr-only" aria-live="polite">
          {isClient && (
            <div>{`Showing activity ${activeIndex + 1} of ${activities.length}. Use arrow keys to navigate.`}</div>
          )}
        </div>
      </div>
    </section>
  );
}
