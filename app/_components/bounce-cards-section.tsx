'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { cn } from '~/app/utils/cn';

// Transform manipulation regexes
const ROTATE_REGEX = /rotate\([\s\S]*?\)/;
const TRANSLATE_REGEX = /translate\(([-0-9.]+)px/;
const TRANSLATE_Y_REGEX = /translate\([^,]+,\s*([^)]+)\)/;

/**
 * Defines the structure for image captions
 */
interface Caption {
  title: string;
  subtitle?: string; // Optional subtitle
}

/**
 * Comprehensive card interface that combines all properties for each card
 */
interface Card {
  id: number; // Unique identifier (index)
  imageSrc: string; // Path to image file
  caption: Caption; // Title and optional subtitle
  baseSize: {
    // Base size before scaling
    width: number;
    height: number;
  };
  baseRotation: number; // Base rotation in degrees
  zIndex: number; // Z-index priority (higher = more visible)
}

/**
 * A responsive section displaying card images in an interactive layout
 * Adapts card sizes, positions, and hover effects based on screen size
 */
export default function BounceCardsSection() {
  // Use state to prevent hydration mismatch
  const [mounted, setMounted] = useState(false);

  // Update mounted state after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  // Media queries for responsive layout adjustments
  const isXL = useMediaQuery({ minWidth: 1280 });
  const isLG = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
  const isMD = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSM = useMediaQuery({ minWidth: 640, maxWidth: 767 });

  // Comprehensive card data with all properties in one place
  const cards: Card[] = [
    {
      id: 0,
      imageSrc: '/images/defilement/1.jpg',
      caption: {
        title: 'Morocco Delegation at IMO',
        subtitle: 'Oslo, 2022',
      },
      baseSize: { width: 380, height: 220 },
      baseRotation: 12,
      zIndex: 1,
    },
    {
      id: 1,
      imageSrc: '/images/defilement/2.jpg',
      caption: {
        title: 'Title',
        subtitle: 'Location, 20XX',
      },
      baseSize: { width: 280, height: 240 },
      baseRotation: -8,
      zIndex: 2,
    },
    {
      id: 2,
      imageSrc: '/images/defilement/3.png',
      caption: {
        title: 'Podcast : Study in the US',
      },
      baseSize: { width: 450, height: 280 },
      baseRotation: 4,
      zIndex: 5,
    },
    {
      id: 3,
      imageSrc: '/images/defilement/4.JPG',
      caption: {
        title: 'Title',
        subtitle: 'Location, 20XX',
      },
      baseSize: { width: 320, height: 240 },
      baseRotation: -5,
      zIndex: 4,
    },
    {
      id: 4,
      imageSrc: '/images/defilement/6.JPG',
      caption: {
        title: 'Title',
        subtitle: 'Location, 20XX',
      },
      baseSize: { width: 280, height: 240 },
      baseRotation: 10,
      zIndex: 3,
    },
    {
      id: 5,
      imageSrc: '/images/defilement/5.JPG',
      caption: {
        title: 'Title',
        subtitle: 'Location, 20XX',
      },
      baseSize: { width: 280, height: 280 },
      baseRotation: -10,
      zIndex: 0,
    },
  ];

  /**
   * Calculate layout values based on current screen size
   * Returns X-positions, container height, and scale factor
   */
  const getLayoutValues = () => {
    if (!mounted) {
      return {
        xPositions: new Array(cards.length).fill(0),
        yPositions: new Array(cards.length).fill(0),
        containerHeight: 500,
        scale: 1,
      };
    }

    let xPositions: number[] = [];
    let yPositions: number[] = [];
    let containerHeight = 500;
    let scale = 1;

    if (isXL) {
      // Extra large screens (≥1280px) - more compact layout with smaller images
      xPositions = [-525, -370, -90, 230, 370, 525];
      yPositions = [-10, 30, -70, 50, 75, 15];
      containerHeight = 550;
      scale = 1;
    } else if (isLG) {
      // Large screens (1024px-1279px) - all images slightly smaller
      xPositions = [-460, -280, -50, 180, 350, 480];
      yPositions = [-10, 20, -70, 50, 75, 15];
      containerHeight = 520;
      scale = 0.92;
    } else if (isMD) {
      // Medium screens (768px-1023px)
      xPositions = [-340, -190, -30, 140, 260, 350];
      yPositions = [-10, 30, -80, 60, 65, 15];
      containerHeight = 470;
      scale = 0.85;
    } else if (isSM) {
      // Small screens (640px-767px)
      xPositions = [-160, -100, -20, 80, 150, 180];
      yPositions = [-10, 30, -60, 60, 65, 15];
      containerHeight = 400;
      scale = 0.7;
    } else {
      // Extra small screens (<640px)
      xPositions = [-90, -60, -10, 50, 100, 130];
      yPositions = [-10, 30, -60, 50, 50, 5];
      containerHeight = 340;
      scale = 0.6;
    }

    return { xPositions, yPositions, containerHeight, scale };
  };

  const { xPositions, yPositions, containerHeight, scale } = getLayoutValues();

  // Generate transform styles by combining rotations with positions
  const transformStyles = cards.map(
    (card, i) =>
      `rotate(${card.baseRotation}deg) translate(${xPositions[i]}px, ${yPositions[i]}px)`
  );

  // Apply screen size scaling to card dimensions
  const cardSizes = cards.map((card) => ({
    width: Math.round(card.baseSize.width * scale),
    height: Math.round(card.baseSize.height * scale),
  }));

  // Extract z-index order from cards
  const zIndexOrder = cards.map((card) => card.zIndex);

  // Extract image sources from cards
  const imageSources = cards.map((card) => card.imageSrc);

  // Extract captions from cards
  const imageCaptions = cards.map((card) => card.caption);

  // Before client-side hydration is complete, render a placeholder
  if (!mounted) {
    return (
      <section className="flex w-full justify-center">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div style={{ height: containerHeight }} />
        </div>
      </section>
    );
  }

  return (
    <section className="flex w-full justify-center">
      <div
        className={cn(
          'w-full max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8 xl:overflow-visible'
        )}
      >
        <div
          className={cn(isXL ? '' : 'mx-auto', 'relative')}
          style={{ width: isXL ? '100%' : '95%' }}
        >
          <BounceCards
            className="w-full"
            images={imageSources}
            cardSizes={cardSizes}
            containerWidth={'100%'}
            containerHeight={containerHeight}
            animationDelay={0.1}
            animationStagger={0.1}
            transformStyles={transformStyles}
            zIndexOrder={zIndexOrder}
            enableHover={true}
            imageCaptions={imageCaptions}
            cards={cards}
          />
        </div>
      </div>
    </section>
  );
}

/**
 * Props for the BounceCards component
 */
interface BounceCardsProps {
  className?: string;
  images: string[];
  cardSizes: { width: number; height: number }[];
  containerWidth: number | string;
  containerHeight: number;
  animationDelay: number;
  animationStagger: number;
  transformStyles: string[];
  zIndexOrder: number[];
  enableHover: boolean;
  imageCaptions: Caption[];
  cards: Card[]; // Pass the full card data for reference
}

/**
 * A component that displays cards with images in a flowing, interactive layout.
 * Cards can be configured with custom sizes, positions, and hover effects.
 */
function BounceCards({
  className = '',
  images,
  cardSizes,
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.08,
  transformStyles,
  zIndexOrder,
  enableHover = false,
  cards,
}: BounceCardsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Set animation complete after a short delay
  useEffect(() => {
    const totalAnimationTime =
      animationDelay + animationStagger * cards.length + 0.5;

    const timeout = setTimeout(() => {
      setAnimationComplete(true);
    }, totalAnimationTime * 1000);

    return () => clearTimeout(timeout);
  }, [animationDelay, animationStagger, cards.length]);

  const getNoRotationTransform = useCallback((transformStr: string): string => {
    if (ROTATE_REGEX.test(transformStr)) {
      return transformStr.replace(ROTATE_REGEX, 'rotate(0deg)');
    }

    if (transformStr === 'none') {
      return 'rotate(0deg)';
    }

    return `${transformStr} rotate(0deg)`;
  }, []);

  const moveTowardCenter = useCallback(
    (transformStr: string, moveAmount: number): string => {
      const match = transformStr.match(TRANSLATE_REGEX);

      if (match) {
        const currentX = Number.parseFloat(match[1]);
        const newX = currentX + moveAmount;

        if (transformStr.includes(',')) {
          return transformStr.replace(TRANSLATE_REGEX, `translate(${newX}px`);
        }

        return transformStr.replace(TRANSLATE_REGEX, `translate(${newX}px`);
      }

      if (transformStr === 'none') {
        return `translate(${moveAmount}px, 0px)`;
      }

      return `${transformStr} translate(${moveAmount}px, 0px)`;
    },
    []
  );

  const getPushedTransform = useCallback(
    (baseTransform: string, offsetX: number): string => {
      const match = baseTransform.match(TRANSLATE_REGEX);

      if (match) {
        const currentX = Number.parseFloat(match[1]);
        const newX = currentX + offsetX;

        if (baseTransform.includes(',')) {
          const yMatch = baseTransform.match(TRANSLATE_Y_REGEX);
          if (yMatch) {
            return baseTransform.replace(
              TRANSLATE_REGEX,
              `translate(${newX}px`
            );
          }
        }

        return baseTransform.replace(TRANSLATE_REGEX, `translate(${newX}px`);
      }

      if (baseTransform === 'none') {
        return `translate(${offsetX}px)`;
      }

      return `${baseTransform} translate(${offsetX}px)`;
    },
    []
  );

  // Helper function to calculate zIndex without nested ternaries
  const getZIndex = useCallback(
    (hoveredIdx: number | null, cardIdx: number, baseZIndex: number) => {
      if (hoveredIdx === null) {
        return 10 + baseZIndex * 2;
      }

      if (hoveredIdx === cardIdx) {
        return 25;
      }

      return 15 - Math.abs(hoveredIdx - cardIdx) * 2;
    },
    []
  );

  // Function to determine the transform for a hovered card
  const getTransformForHoveredCard = useCallback(
    // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: <>
    (hoveredIdx: number, baseTransform: string) => {
      let finalTransform = getNoRotationTransform(baseTransform);

      // Position adjustments based on which card is hovered
      if (hoveredIdx === 0) {
        let moveAmount = 30;
        if (containerHeight >= 520) {
          moveAmount = 100;
        } else if (containerHeight >= 470) {
          moveAmount = 70;
        }
        finalTransform = moveTowardCenter(finalTransform, moveAmount);
      } else if (hoveredIdx === images.length - 1) {
        let moveAmount = -20;
        if (containerHeight >= 520) {
          moveAmount = -60;
        } else if (containerHeight >= 470) {
          moveAmount = -45;
        } else if (containerHeight >= 400) {
          moveAmount = -30;
        }
        finalTransform = moveTowardCenter(finalTransform, moveAmount);
      } else if (hoveredIdx === images.length - 2) {
        let moveAmount = -15;
        if (containerHeight >= 520) {
          moveAmount = -50;
        } else if (containerHeight >= 470) {
          moveAmount = -40;
        } else if (containerHeight >= 400) {
          moveAmount = -25;
        }
        finalTransform = moveTowardCenter(finalTransform, moveAmount);
      } else if (hoveredIdx === images.length - 3) {
        let moveAmount = -10;
        if (containerHeight >= 520) {
          moveAmount = -50;
        } else if (containerHeight >= 470) {
          moveAmount = -35;
        } else if (containerHeight >= 400) {
          moveAmount = -20;
        }
        finalTransform = moveTowardCenter(finalTransform, moveAmount);
      } else if (hoveredIdx === 2) {
        let moveAmount = -10;
        if (containerHeight >= 520) {
          moveAmount = -25;
        } else if (containerHeight >= 470) {
          moveAmount = -20;
        }
        finalTransform = moveTowardCenter(finalTransform, moveAmount);
      }

      return finalTransform;
    },
    [containerHeight, images.length, getNoRotationTransform, moveTowardCenter]
  );

  // Helper function to calculate transform without nested ternaries
  const getCardTransform = useCallback(
    (hoveredIdx: number | null, cardIdx: number, baseTransform: string) => {
      if (hoveredIdx === null) {
        return baseTransform;
      }

      if (hoveredIdx === cardIdx) {
        return getTransformForHoveredCard(cardIdx, baseTransform);
      }

      // Calculate push amount based on container height
      let pushBase = 40;
      if (containerHeight >= 520) {
        pushBase = 80;
      } else if (containerHeight >= 470) {
        pushBase = 65;
      } else if (containerHeight >= 400) {
        pushBase = 50;
      }

      const direction = cardIdx < hoveredIdx ? -1 : 1;
      const distance = Math.min(
        pushBase + Math.abs(hoveredIdx - cardIdx) * 8,
        120
      );

      return getPushedTransform(baseTransform, direction * distance);
    },
    [containerHeight, getTransformForHoveredCard, getPushedTransform]
  );

  const handleMouseEnter = useCallback(
    (idx: number) => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
        resetTimeoutRef.current = null;
      }

      if (!animationComplete || !enableHover) {
        return;
      }

      setHoveredIndex(idx);
    },
    [animationComplete, enableHover]
  );

  const handleMouseLeave = useCallback(() => {
    if (!animationComplete || !enableHover) {
      return;
    }

    resetTimeoutRef.current = setTimeout(() => {
      setHoveredIndex(null);
    }, 50);
  }, [animationComplete, enableHover]);

  const handleContainerMouseLeave = useCallback(() => {
    if (!animationComplete || !enableHover) {
      return;
    }

    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
      resetTimeoutRef.current = null;
    }

    setHoveredIndex(null);
  }, [animationComplete, enableHover]);

  return (
    <div
      role="img"
      ref={containerRef}
      className={cn('relative flex items-center justify-center', className)}
      style={{
        width: containerWidth,
        height: containerHeight,
      }}
      onMouseLeave={handleContainerMouseLeave}
    >
      {/* biome-ignore lint/complexity/noExcessiveCognitiveComplexity: <> */}
      {cards.map((cardData, idx) => {
        const cardSize = cardSizes[idx];
        const baseTransform = transformStyles[idx] || 'none';
        const delay = animationDelay + idx * animationStagger;

        return (
          <motion.div
            key={cardData.id}
            initial={{
              opacity: 0,
              filter: 'blur(4px)',
              zIndex: cardData.zIndex,
            }}
            animate={{
              transform: getCardTransform(hoveredIndex, idx, baseTransform),
              opacity: 1,
              filter: 'blur(0px)',
              zIndex: getZIndex(hoveredIndex, idx, zIndexOrder[idx]),
            }}
            transition={{
              transform: {
                type: 'spring',
                damping: animationComplete ? 25 : 12,
                stiffness: animationComplete ? 300 : 120,
                mass: animationComplete ? 1 : 1.2,
                delay: animationComplete ? 0 : delay,
                velocity: animationComplete ? 0 : 2,
              },
              filter: {
                duration: 0.4,
                delay: animationComplete ? 0 : delay,
              },
              opacity: {
                duration: 0.6,
                delay: animationComplete ? 0 : delay,
              },
              zIndex: { delay: 0.05 },
            }}
            className={cn(
              `card card-${idx}`,
              'absolute overflow-hidden border-8 border-white'
            )}
            style={{
              width: `${cardSize.width}px`,
              height: `${cardSize.height}px`,
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              transformOrigin: 'center center',
            }}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
            onTouchStart={() => handleMouseEnter(idx)}
          >
            <Image
              key={`image-${cardData.id}`}
              className="h-full w-full object-cover"
              src={cardData.imageSrc}
              alt={cardData.caption.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
            {cardData.caption && (
              <>
                {/* Gradient overlay for better caption readability */}
                <motion.div
                  key={`overlay-${cardData.id}`}
                  className="pointer-events-none absolute bottom-0 left-0 h-[60%] w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredIndex === idx ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
                {/* Animated caption container */}
                <motion.div
                  key={`caption-container-${cardData.id}`}
                  className="absolute bottom-0 left-0 w-full px-5 py-4"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredIndex === idx ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <div className="flex flex-col items-start gap-0.5 font-krypton">
                    {/* Caption title - larger when no subtitle */}
                    <motion.p
                      className={cn(
                        'font-semibold text-white',
                        cardData.caption.subtitle ? 'text-sm' : 'text-base'
                      )}
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{
                        opacity: hoveredIndex === idx ? 1 : 0,
                        y: hoveredIndex === idx ? 0 : 10,
                        scale: hoveredIndex === idx ? 1 : 0.9,
                      }}
                      transition={{
                        type: 'spring',
                        damping: 10,
                        stiffness: 140,
                        delay: hoveredIndex === idx ? 0.1 : 0,
                      }}
                    >
                      {cardData.caption.title}
                    </motion.p>
                    {/* Optional subtitle with staggered animation */}
                    {cardData.caption.subtitle && (
                      <motion.span
                        className="text-xs text-zinc-300"
                        initial={{ opacity: 0, y: 8, scale: 0.9 }}
                        animate={{
                          opacity: hoveredIndex === idx ? 1 : 0,
                          y: hoveredIndex === idx ? 0 : 8,
                          scale: hoveredIndex === idx ? 1 : 0.9,
                        }}
                        transition={{
                          type: 'spring',
                          damping: 8,
                          stiffness: 120,
                          delay: hoveredIndex === idx ? 0.2 : 0,
                        }}
                      >
                        {cardData.caption.subtitle}
                      </motion.span>
                    )}
                  </div>
                </motion.div>
              </>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
