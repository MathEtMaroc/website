'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { cn } from '~/app/utils/cn';
import BounceCards from './bounce-cards';

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
  const isXS = useMediaQuery({ maxWidth: 639 });

  // Image sources for the cards
  const images = [
    '/images/defilement/1.jpg',
    '/images/defilement/2.jpg',
    '/images/defilement/3.png',
    '/images/defilement/4.JPG',
    '/images/defilement/6.JPG', // Position swapped with card 6
    '/images/defilement/5.JPG', // Position swapped with card 5
  ];

  // Captions for each image - title is required, subtitle is optional
  const imageCaptions = [
    { title: 'Math Competition', subtitle: 'Casablanca, 2023' },
    { title: 'Mathematical Workshop', subtitle: 'Rabat, 2022' },
    { title: 'Math Olympiad' }, // Example with only title
    { title: 'International Conference', subtitle: 'Al Akhawayn, 2023' },
    { title: 'Summer Camp', subtitle: 'Agadir, 2023' },
    { title: 'Collaboration Session', subtitle: 'Marrakech, 2024' },
  ];

  /**
   * Calculate layout values based on current screen size
   * Returns X-positions, container height, and scale factor
   */
  const getTranslateValues = () => {
    if (!mounted) {
      return { values: [0, 0, 0, 0, 0, 0], containerHeight: 500, scale: 1 };
    }

    let translateXValues: number[] = [];
    let containerHeight = 500;
    let scale = 1;

    if (isXL) {
      // Extra large screens (≥1280px)
      translateXValues = [-670, -400, -100, 270, 400, 630];
      containerHeight = 580;
      scale = 1.08;
    } else if (isLG) {
      // Large screens (1024px-1279px)
      translateXValues = [-520, -280, -50, 180, 350, 500];
      containerHeight = 520;
      scale = 1;
    } else if (isMD) {
      // Medium screens (768px-1023px)
      translateXValues = [-340, -190, -30, 140, 260, 350];
      containerHeight = 470;
      scale = 0.85;
    } else if (isSM) {
      // Small screens (640px-767px)
      translateXValues = [-160, -100, -20, 80, 150, 180];
      containerHeight = 400;
      scale = 0.7;
    } else {
      // Extra small screens (<640px)
      translateXValues = [-90, -60, -10, 50, 100, 130];
      containerHeight = 340;
      scale = 0.6;
    }

    return { values: translateXValues, containerHeight, scale };
  };

  const {
    values: translateXValues,
    containerHeight,
    scale,
  } = getTranslateValues();

  // Rotation angles for each card to create visual interest
  const rotations = [12, -8, 4, -5, 10, -7];

  // Vertical positioning for each card - varies by screen size
  let yOffsets = [-10, 30, -60, 60, 85, 20];

  // Adjust vertical offsets for smaller screens
  if (isMD || isSM) {
    yOffsets = [-10, 30, -60, 60, 65, 15];
  } else if (isXS) {
    yOffsets = [-10, 30, -60, 50, 50, 5];
  }

  // Combine positions and rotations into transform styles
  const transformStyles = translateXValues.map(
    (x, i) => `rotate(${rotations[i]}deg) translate(${x}px, ${yOffsets[i]}px)`
  );

  // Base card dimensions for optimal display
  const baseSizes = [
    { width: 420, height: 240 }, // Card 1: Wide rectangle
    { width: 280, height: 240 }, // Card 2: Smaller rectangle
    { width: 450, height: 280 }, // Card 3: Largest (focal point)
    { width: 320, height: 240 }, // Card 4: Medium rectangle
    { width: 280, height: 240 }, // Card 5: Matches card 2 size
    { width: 280, height: 280 }, // Card 6: Square format
  ];

  // Apply screen size scaling to card dimensions
  const cardSizes = baseSizes.map((size) => ({
    width: Math.round(size.width * scale),
    height: Math.round(size.height * scale),
  }));

  // Custom stacking order - higher number = higher priority
  const zIndexOrder = [1, 2, 5, 3, 4, 0];

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
      <div className="w-full max-w-7xl overflow-x-hidden overflow-y-visible px-4 sm:px-6 lg:px-8 xl:overflow-x-visible">
        <div
          className={cn(isXL ? '' : 'mx-auto', 'relative')}
          style={{ width: isXL ? '100%' : '95%' }}
        >
          <BounceCards
            className="w-full"
            images={images}
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
          />
        </div>
      </div>
    </section>
  );
}
