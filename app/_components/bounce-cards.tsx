'use client';

import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

// Add at the top level, with other constants/interfaces
const ROTATE_REGEX = /rotate\([\s\S]*?\)/;
const TRANSLATE_REGEX = /translate\(([-0-9.]+)px/;
const TRANSLATE_Y_REGEX = /translate\([^,]+,\s*([^)]+)\)/;

/**
 * Defines the size properties for a card
 */
interface CardSize {
  width: number;
  height: number;
}

/**
 * Defines the structure for image captions
 */
interface Caption {
  title: string;
  subtitle?: string; // Optional subtitle
}

/**
 * Props for the BounceCards component
 */
interface BounceCardsProps {
  className?: string;
  images?: string[];
  cardSizes?: CardSize[];
  containerWidth?: number | string;
  containerHeight?: number;
  animationDelay?: number;
  animationStagger?: number;
  easeType?: string;
  transformStyles?: string[];
  zIndexOrder?: number[]; // Custom z-index ordering (higher number = higher priority)
  enableHover?: boolean;
  imageCaptions?: Caption[];
}

/**
 * A component that displays cards with images in a flowing, interactive layout.
 * Cards can be configured with custom sizes, positions, and hover effects.
 */
export default function BounceCards({
  className = '',
  images = [],
  cardSizes,
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = 'elastic.out(1, 0.8)',
  transformStyles = [
    'rotate(10deg) translate(-170px)',
    'rotate(-7deg) translate(-85px)',
    'rotate(3deg)',
    'rotate(-5deg) translate(85px)',
    'rotate(8deg) translate(170px)',
  ],
  zIndexOrder,
  enableHover = false,
  imageCaptions = [],
}: BounceCardsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
      }
    );

    // Cleanup GSAP animations on unmount
    return () => {
      gsap.killTweensOf('.card');
    };
  }, [animationDelay, animationStagger, easeType, images.length]);

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
  const getNoRotationTransform = (transformStr: string): string => {
    if (ROTATE_REGEX.test(transformStr)) {
      return transformStr.replace(ROTATE_REGEX, 'rotate(0deg)');
    }

    if (transformStr === 'none') {
      return 'rotate(0deg)';
    }

    return `${transformStr} rotate(0deg)`;
  };

  /**
   * Adjusts the X translation to move an element toward the center
   */
  const moveTowardCenter = (
    transformStr: string,
    moveAmount: number
  ): string => {
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
  };

  /**
   * Adds X offset to an existing transform string
   */
  const getPushedTransform = (
    baseTransform: string,
    offsetX: number
  ): string => {
    const match = baseTransform.match(TRANSLATE_REGEX);

    if (match) {
      const currentX = Number.parseFloat(match[1]);
      const newX = currentX + offsetX;

      // Preserve the y-translation if it exists
      if (baseTransform.includes(',')) {
        const yMatch = baseTransform.match(TRANSLATE_Y_REGEX);
        if (yMatch) {
          return baseTransform.replace(TRANSLATE_REGEX, `translate(${newX}px`);
        }
      }

      return baseTransform.replace(TRANSLATE_REGEX, `translate(${newX}px`);
    }

    if (baseTransform === 'none') {
      return `translate(${offsetX}px)`;
    }

    return `${baseTransform} translate(${offsetX}px)`;
  };

  /**
   * Manages card movements when a card is hovered
   */
  const pushSiblings = (hoveredIdx: number) => {
    if (!enableHover) {
      return;
    }

    setHoveredIndex(hoveredIdx);

    // biome-ignore lint/complexity/noExcessiveCognitiveComplexity:
    images.forEach((_, i) => {
      const card = cardsRef.current[i];
      if (!card) {
        return;
      }

      gsap.killTweensOf(card);
      const baseTransform = transformStyles[i] || 'none';

      if (i === hoveredIdx) {
        // Handle the hovered card
        let finalTransform = getNoRotationTransform(baseTransform);

        // Screen-size responsive positioning for different cards
        if (hoveredIdx === 0) {
          // Card 1: Move significantly right on XL screens
          const cardWidth = card.offsetWidth;
          let moveAmount: number;
          if (cardWidth > 400) {
            moveAmount = 280;
          } else if (cardWidth < 250) {
            moveAmount = 160;
          } else {
            moveAmount = 140;
          }
          finalTransform = moveTowardCenter(finalTransform, moveAmount);
        } else if (hoveredIdx === images.length - 1) {
          // Card 6: Move left on hover
          const cardWidth = card.offsetWidth;
          let moveAmount: number;
          if (cardWidth > 400) {
            moveAmount = -200;
          } else if (cardWidth < 250) {
            moveAmount = -180;
          } else {
            moveAmount = -160;
          }
          finalTransform = moveTowardCenter(finalTransform, moveAmount);
        } else if (hoveredIdx === images.length - 2) {
          // Card 5: Move left on hover
          const cardWidth = card.offsetWidth;
          let moveAmount: number;
          if (cardWidth > 400) {
            moveAmount = -120;
          } else if (cardWidth < 250) {
            moveAmount = -100;
          } else {
            moveAmount = -90;
          }
          finalTransform = moveTowardCenter(finalTransform, moveAmount);
        } else if (hoveredIdx === images.length - 3) {
          // Card 4: Slight left movement
          const cardWidth = card.offsetWidth;
          let moveAmount: number;
          if (cardWidth > 400) {
            moveAmount = -80;
          } else if (cardWidth < 250) {
            moveAmount = -60;
          } else {
            moveAmount = -40;
          }
          finalTransform = moveTowardCenter(finalTransform, moveAmount);
        } else if (hoveredIdx === 2) {
          // Card 3: Minimal left movement (center card)
          const cardWidth = card.offsetWidth;
          const moveAmount = cardWidth > 400 ? -30 : -20;
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
        const direction = i < hoveredIdx ? -1 : 1;
        const cardWidth = card?.offsetWidth || 400;

        // Screen-size responsive push intensity
        let pushIntensity: number;
        if (cardWidth > 400) {
          pushIntensity = 150;
        } else if (cardWidth < 250) {
          pushIntensity = 140;
        } else {
          pushIntensity = 130;
        }

        // Push cards farther based on distance from hovered card
        const distance = Math.abs(hoveredIdx - i);
        const offset = direction * (pushIntensity + distance * 10);
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
  };

  const handleMouseEnter = (idx: number) => {
    // Clear any pending reset timeout
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
      resetTimeoutRef.current = null;
    }

    setHoveredIndex(idx);
    pushSiblings(idx);
  };

  function handleMouseLeave() {
    // Short delay prevents flickering during transitions between cards
    resetTimeoutRef.current = setTimeout(() => {
      resetSiblings();
    }, 50);
  }

  const handleContainerMouseLeave = () => {
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
      resetTimeoutRef.current = null;
    }

    // Immediately reset all cards when leaving container
    resetSiblings();
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
      resetSiblings();
    };
  }, []);

  /**
   * Resets all cards to their original positions and scales
   */
  const resetSiblings = () => {
    if (!enableHover) {
      return;
    }

    setHoveredIndex(null);

    images.forEach((_, i) => {
      const card = cardsRef.current[i];
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
  };

  return (
    <div
      role="img"
      ref={containerRef}
      className={`relative flex items-center justify-center ${className}`}
      style={{
        width: containerWidth,
        height: containerHeight,
      }}
      onMouseLeave={handleContainerMouseLeave}
    >
      {/* biome-ignore lint/complexity/noExcessiveCognitiveComplexity: */}
      {images.map((src, idx) => {
        const cardSize = cardSizes?.[idx]
          ? cardSizes[idx]
          : { width: 200, height: cardSizes?.[idx]?.height || 'auto' };

        // Calculate initial z-index based on provided order or default center priority
        let initialZIndex: number;
        if (zIndexOrder && zIndexOrder.length === images.length) {
          initialZIndex = 10 + zIndexOrder[idx] * 2;
        } else {
          initialZIndex = 10 - Math.abs((images.length - 1) / 2 - idx) * 2;
        }

        return (
          <div
            role="img"
            key={idx}
            ref={(el) => {
              cardsRef.current[idx] = el;
            }}
            className={`card card-${idx} absolute overflow-hidden border-8 border-white`}
            style={{
              width: `${cardSize.width}px`,
              height: `${cardSize.height}px`,
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              transform: transformStyles[idx] || 'none',
              zIndex: initialZIndex,
              transition: 'box-shadow 0.3s ease',
            }}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
            onTouchStart={() => handleMouseEnter(idx)}
          >
            <Image
              className="h-full w-full object-cover"
              src={src}
              alt={`card-${idx}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
            {imageCaptions[idx] && (
              <>
                {/* Gradient overlay for better caption readability */}
                <motion.div
                  className="pointer-events-none absolute bottom-0 left-0 h-[60%] w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredIndex === idx ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
                {/* Animated caption container */}
                <motion.div
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
                      className={`font-semibold ${imageCaptions[idx].subtitle ? 'text-sm' : 'text-base'} text-white`}
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
                      {imageCaptions[idx].title}
                    </motion.p>
                    {/* Optional subtitle with staggered animation */}
                    {imageCaptions[idx].subtitle && (
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
                        {imageCaptions[idx].subtitle}
                      </motion.span>
                    )}
                  </div>
                </motion.div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
