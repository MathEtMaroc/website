'use client';

import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { cn } from '~/app/utils/cn';

// Regex constants for transform manipulation
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
  link?: string; // Optional URL to navigate to when card is clicked
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
      link: 'https://youtu.be/OG-XbsHcRFM',
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
      zIndex: 3,
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
      zIndex: 4,
    },
    {
      id: 5,
      imageSrc: '/images/defilement/5.JPG',
      caption: {
        title: 'Title',
        subtitle: 'Location, 20XX',
      },
      link: '/test',
      baseSize: { width: 280, height: 280 },
      baseRotation: -7,
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
      yPositions = [-10, 30, -50, 50, 75, 15];
      containerHeight = 550;
      scale = 1;
    } else if (isLG) {
      // Large screens (1024px-1279px) - all images slightly smaller
      xPositions = [-460, -280, -50, 180, 350, 480];
      yPositions = [-10, 20, -50, 50, 75, 15];
      containerHeight = 520;
      scale = 0.92;
    } else if (isMD) {
      // Medium screens (768px-1023px)
      xPositions = [-340, -190, -30, 140, 260, 350];
      yPositions = [-10, 30, -60, 60, 65, 15];
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
            animationDelay={0.3}
            animationStagger={0.08}
            easeType="elastic.out(1, 0.5)"
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
  easeType: string;
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
  animationStagger = 0.06,
  easeType = 'elastic.out(1, 0.8)',
  transformStyles,
  zIndexOrder,
  enableHover = false,
  cards,
}: BounceCardsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initial animation when component mounts
  useEffect(() => {
    // Ensure references are reset when the component mounts
    cardsRef.current = new Array(images.length).fill(null);

    // Animate cards in with stagger effect
    gsap.fromTo(
      '.card',
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: animationStagger,
        ease: easeType,
        delay: animationDelay,
        onComplete: () => {
          // Mark animations as initialized after initial animations complete
          setIsInitialized(true);
        },
      }
    );

    // Cleanup GSAP animations on unmount
    return () => {
      gsap.killTweensOf('.card');
    };
  }, [animationDelay, animationStagger, easeType, images.length]);

  // Pre-initialize transform states for all cards to ensure first hover works
  useEffect(() => {
    if (isInitialized && enableHover) {
      // Set initial transform values for all cards
      cardsRef.current.forEach((card, idx) => {
        if (!card) {
          return;
        }
        // Store the original transform as a data attribute for reference
        card.dataset.originalTransform = transformStyles[idx] || 'none';
        // Explicitly set initial transform via GSAP to ensure proper animation tracking
        gsap.set(card, {
          transform: transformStyles[idx] || 'none',
          scale: 1,
          immediateRender: true,
        });
      });
    }
  }, [isInitialized, enableHover, transformStyles]);

  // Manage z-index when a card is hovered
  useEffect(() => {
    if (hoveredIndex === null) {
      return;
    }

    // Bring hovered card to front, push others back based on distance
    cardsRef.current.forEach((card, idx) => {
      if (!card) {
        return;
      }

      if (idx === hoveredIndex) {
        // Hovered card gets highest z-index (below navbar z-40)
        gsap.set(card, { zIndex: 25 });
      } else {
        // Cards further from hovered card get progressively lower z-indices
        const distance = Math.abs(hoveredIndex - idx);
        gsap.set(card, { zIndex: 15 - distance * 2 });
      }
    });
  }, [hoveredIndex]);

  // Reset z-index ordering when no card is hovered
  useEffect(() => {
    if (hoveredIndex !== null) {
      return;
    }

    cardsRef.current.forEach((card, idx) => {
      if (!card) {
        return;
      }

      let zIndex: number;
      if (zIndexOrder && zIndexOrder.length === images.length) {
        // Use provided custom z-index order
        const priority = zIndexOrder[idx];
        zIndex = 10 + priority * 2;
      } else {
        // Default: center cards have higher z-index
        const centerDistance = Math.abs((images.length - 1) / 2 - idx);
        zIndex = 10 - centerDistance * 2;
      }

      gsap.set(card, { zIndex });
    });
  }, [hoveredIndex, images.length, zIndexOrder]);

  /**
   * Removes rotation from transform string and adds 0deg rotation
   */
  const getNoRotationTransform = useCallback((transformStr: string): string => {
    if (ROTATE_REGEX.test(transformStr)) {
      return transformStr.replace(ROTATE_REGEX, 'rotate(0deg)');
    }

    if (transformStr === 'none') {
      return 'rotate(0deg)';
    }

    return `${transformStr} rotate(0deg)`;
  }, []);

  /**
   * Adjusts the X translation to move an element toward the center
   */
  const moveTowardCenter = useCallback(
    (transformStr: string, moveAmount: number): string => {
      // Extract current X translation value if it exists
      const match = transformStr.match(TRANSLATE_REGEX);

      if (match) {
        const currentX = Number.parseFloat(match[1]);
        const newX = currentX + moveAmount;

        // Preserve the y-translation if it exists
        if (transformStr.includes(',')) {
          return transformStr.replace(TRANSLATE_REGEX, `translate(${newX}px`);
        }

        return transformStr.replace(TRANSLATE_REGEX, `translate(${newX}px`);
      }

      // If no translation exists, add one
      if (transformStr === 'none') {
        return `translate(${moveAmount}px, 0px)`;
      }

      // Add translation to existing transform
      return `${transformStr} translate(${moveAmount}px, 0px)`;
    },
    []
  );

  /**
   * Adds X offset to an existing transform string
   */
  const getPushedTransform = useCallback(
    (baseTransform: string, offsetX: number): string => {
      const match = baseTransform.match(TRANSLATE_REGEX);

      if (match) {
        const currentX = Number.parseFloat(match[1]);
        const newX = currentX + offsetX;

        // Preserve the y-translation if it exists
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

  /**
   * Manages card movements when a card is hovered
   * Now just sets the hoveredIndex state, actual animations are handled by the hover effect
   */
  const _pushSiblings = (hoveredIdx: number) => {
    if (!enableHover || !isInitialized) {
      return;
    }

    setHoveredIndex(hoveredIdx);
    // Animation now handled by the useEffect watching hoveredIndex
  };

  /**
   * Resets all cards to their original positions and scales
   * Now just clears the hoveredIndex state, actual animations are handled by the hover effect
   */
  const _resetSiblings = () => {
    if (!enableHover || !isInitialized) {
      return;
    }

    setHoveredIndex(null);
    // Animation now handled by the useEffect watching hoveredIndex
  };

  // Enhanced effect to handle hover animations based on hoveredIndex changes
  useEffect(() => {
    // Skip if not initialized or hover not enabled
    if (!isInitialized || !enableHover) {
      return;
    }

    // If no card is hovered, reset all cards to original positions
    if (hoveredIndex === null) {
      cardsRef.current.forEach((card, i) => {
        if (!card) {
          return;
        }

        gsap.killTweensOf(card);
        const baseTransform = transformStyles[i] || 'none';

        gsap.to(card, {
          transform: baseTransform,
          scale: 1,
          duration: 0.4,
          ease: 'back.out(1.4)',
          overwrite: 'auto',
          immediateRender: false,
        });
      });
      return;
    }

    // Handle the hover animation for all cards based on which one is hovered
    // biome-ignore lint/complexity/noExcessiveCognitiveComplexity:
    cardsRef.current.forEach((card, i) => {
      if (!card) {
        return;
      }

      gsap.killTweensOf(card);
      const baseTransform = transformStyles[i] || 'none';

      if (i === hoveredIndex) {
        // Handle the hovered card
        let finalTransform = getNoRotationTransform(baseTransform);

        // Screen-size responsive positioning for different cards
        if (hoveredIndex === 0) {
          // Card 1: Move right on hover - based on containerHeight
          let moveAmount: number;
          if (containerHeight >= 520) {
            moveAmount = 100; // For XL and LG screens
          } else if (containerHeight >= 470) {
            moveAmount = 70; // For MD screens
          } else {
            moveAmount = 30; // For SM and smaller screens
          }
          finalTransform = moveTowardCenter(finalTransform, moveAmount);
        } else if (hoveredIndex === images.length - 1) {
          // Card 6: Move left on hover - based on containerHeight
          let moveAmount: number;
          if (containerHeight >= 520) {
            moveAmount = -60; // For XL and LG screens
          } else if (containerHeight >= 470) {
            moveAmount = -45; // For MD screens
          } else if (containerHeight >= 400) {
            moveAmount = -30; // For SM screens
          } else {
            moveAmount = -20; // For XS screens
          }
          finalTransform = moveTowardCenter(finalTransform, moveAmount);
        } else if (hoveredIndex === images.length - 2) {
          // Card 5: Move left on hover - based on containerHeight
          let moveAmount: number;
          if (containerHeight >= 520) {
            moveAmount = -50; // For XL and LG screens
          } else if (containerHeight >= 470) {
            moveAmount = -40; // For MD screens
          } else if (containerHeight >= 400) {
            moveAmount = -25; // For SM screens
          } else {
            moveAmount = -15; // For XS screens
          }
          finalTransform = moveTowardCenter(finalTransform, moveAmount);
        } else if (hoveredIndex === images.length - 3) {
          // Card 4: Slight left movement - based on containerHeight
          let moveAmount: number;
          if (containerHeight >= 520) {
            moveAmount = -50; // For XL and LG screens
          } else if (containerHeight >= 470) {
            moveAmount = -35; // For MD screens
          } else if (containerHeight >= 400) {
            moveAmount = -20; // For SM screens
          } else {
            moveAmount = -10; // For XS screens
          }
          finalTransform = moveTowardCenter(finalTransform, moveAmount);
        } else if (hoveredIndex === 2) {
          // Card 3: Minimal left movement (center card) - based on containerHeight
          let moveAmount: number;
          if (containerHeight >= 520) {
            moveAmount = -25; // For XL and LG screens
          } else if (containerHeight >= 470) {
            moveAmount = -20; // For MD screens
          } else {
            moveAmount = -10; // For SM and smaller screens
          }
          finalTransform = moveTowardCenter(finalTransform, moveAmount);
        }

        // Animate the hovered card
        gsap.to(card, {
          transform: finalTransform,
          scale: 1.05,
          duration: 0.4,
          ease: 'back.out(1.4)',
          overwrite: 'auto',
          immediateRender: false,
        });
      } else {
        // Handle non-hovered cards (pushed away)
        const direction = i < hoveredIndex ? -1 : 1;

        // Screen-size responsive push intensity based on containerHeight
        let pushIntensity: number;
        if (containerHeight >= 520) {
          pushIntensity = 80; // For XL and LG screens
        } else if (containerHeight >= 470) {
          pushIntensity = 65; // For MD screens
        } else if (containerHeight >= 400) {
          pushIntensity = 50; // For SM screens
        } else {
          pushIntensity = 40; // For XS screens
        }

        // Push cards farther based on distance from hovered card
        const distance = Math.abs(hoveredIndex - i);
        // Cap the maximum push distance
        const offset = direction * Math.min(pushIntensity + distance * 8, 120);
        const pushedTransform = getPushedTransform(baseTransform, offset);

        // Add slight delay based on distance for cascading effect
        const delay = distance * 0.05;

        gsap.to(card, {
          transform: pushedTransform,
          scale: 0.97,
          duration: 0.4,
          ease: 'back.out(1.3)',
          delay,
          overwrite: 'auto',
          immediateRender: false,
        });
      }
    });
  }, [
    hoveredIndex,
    isInitialized,
    enableHover,
    images.length,
    transformStyles,
    getNoRotationTransform,
    moveTowardCenter,
    getPushedTransform,
    containerHeight,
  ]);

  // Define event handlers after the functions they use - but don't include function references in deps
  const handleMouseEnter = useCallback(
    (idx: number) => {
      // Clear any pending reset timeout
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
        resetTimeoutRef.current = null;
      }

      // Only process if we're initialized
      if (!isInitialized) {
        return;
      }

      setHoveredIndex(idx);

      // Inline the pushSiblings logic instead of calling the function
      if (!enableHover || !isInitialized) {
        return;
      }

      // Rest of pushSiblings logic is handled implicitly through the effects
      // that react to hoveredIndex changes
    },
    [isInitialized, enableHover]
  );

  const handleMouseLeave = useCallback(() => {
    // Only process if we're initialized
    if (!isInitialized) {
      return;
    }

    // Short delay prevents flickering during transitions between cards
    resetTimeoutRef.current = setTimeout(() => {
      // Inline the core resetSiblings logic
      if (!enableHover || !isInitialized) {
        return;
      }
      setHoveredIndex(null);
      // Rest handled by effects
    }, 50);
  }, [isInitialized, enableHover]);

  const handleContainerMouseLeave = useCallback(() => {
    // Only process if we're initialized
    if (!isInitialized) {
      return;
    }

    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
      resetTimeoutRef.current = null;
    }

    // Inline just the essential part of resetSiblings
    if (enableHover && isInitialized) {
      setHoveredIndex(null);
    }
  }, [isInitialized, enableHover]);

  // Create refs for all cards together up front
  useEffect(() => {
    // Initialize empty refs array of correct length
    cardsRef.current = new Array(images.length).fill(null);
  }, [images.length]);

  // Manual hover management to fix first hover issue
  useEffect(() => {
    if (!isInitialized || !enableHover) {
      return;
    }

    // Force GSAP to recognize the initial state for proper animation
    const elements = cardsRef.current;
    const handlers: (() => void)[] = [];

    elements.forEach((element, idx) => {
      if (!element) {
        return;
      }

      // Apply clear transform once to ensure GSAP has a baseline
      gsap.set(element, { clearProps: 'transform' });
      gsap.set(element, {
        transform: transformStyles[idx] || 'none',
        scale: 1,
      });

      // Create handlers with proper closure for each card
      const enterHandler = () => handleMouseEnter(idx);
      const leaveHandler = handleMouseLeave;

      // Store handlers for cleanup
      handlers.push(enterHandler);
      handlers.push(leaveHandler);

      // Add event listeners directly to ensure they're properly attached
      element.addEventListener('mouseenter', enterHandler);
      element.addEventListener('mouseleave', leaveHandler);
    });

    // Clean up all event listeners on unmount or when dependencies change
    return () => {
      elements.forEach((element, idx) => {
        if (!element) {
          return;
        }
        // Only remove event listeners if the element exists and the handlers were created
        if (idx * 2 < handlers.length && idx * 2 + 1 < handlers.length) {
          element.removeEventListener('mouseenter', handlers[idx * 2]);
          element.removeEventListener('mouseleave', handlers[idx * 2 + 1]);
        }
      });
    };
  }, [
    isInitialized,
    enableHover,
    transformStyles,
    handleMouseEnter,
    handleMouseLeave,
  ]);

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
      {/* biome-ignore lint/complexity/noExcessiveCognitiveComplexity: */}
      {cards.map((cardData, idx) => {
        const cardSize = cardSizes[idx];

        // Calculate initial z-index based on card data
        const initialZIndex = 10 + cardData.zIndex * 2;

        // Common styling and behavior props without the role and ref
        const commonStyle = {
          width: `${cardSize.width}px`,
          height: `${cardSize.height}px`,
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          transform: transformStyles[idx] || 'none',
          zIndex: initialZIndex,
          transition: 'box-shadow 0.3s ease',
        };

        // Card content that's the same regardless of wrapping element
        const cardContent = (
          <>
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
                  transition={{ duration: 0.4, ease: 'easeOut' }}
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
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: hoveredIndex === idx ? 1 : 0,
                        y: hoveredIndex === idx ? 0 : 10,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                        delay: 0.1,
                      }}
                    >
                      {cardData.caption.title}
                    </motion.p>
                    {/* Optional subtitle with staggered animation */}
                    {cardData.caption.subtitle && (
                      <motion.span
                        className="text-xs text-zinc-300"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{
                          opacity: hoveredIndex === idx ? 1 : 0,
                          y: hoveredIndex === idx ? 0 : 8,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: 'easeOut',
                          delay: 0.2,
                        }}
                      >
                        {cardData.caption.subtitle}
                      </motion.span>
                    )}
                  </div>
                </motion.div>
              </>
            )}
          </>
        );

        // Conditionally render as link or div based on whether link is provided
        if (cardData.link) {
          return (
            <div
              role="img"
              key={cardData.id}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              className={cn(
                `card card-${idx}`,
                'absolute cursor-pointer overflow-hidden border-8 border-white'
              )}
              style={commonStyle}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
              onTouchStart={() => handleMouseEnter(idx)}
            >
              <Link
                href={cardData.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full w-full"
                aria-label={`View details about ${cardData.caption.title}`}
              >
                {cardContent}
              </Link>
            </div>
          );
        }

        // No link - render regular div
        return (
          <div
            key={cardData.id}
            role="img"
            ref={(el) => {
              cardsRef.current[idx] = el;
            }}
            className={cn(
              `card card-${idx}`,
              'absolute overflow-hidden border-8 border-white'
            )}
            style={commonStyle}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
            onTouchStart={() => handleMouseEnter(idx)}
          >
            {cardContent}
          </div>
        );
      })}
    </div>
  );
}
