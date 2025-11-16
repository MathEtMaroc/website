'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import type { PartnerWithDescription } from '~/app/_data/partners-descriptions';
import ArrowRightIcon from '../../public/icons/arrow-right.svg';
import { cn } from '~/app/utils/cn';

interface PartnersCarouselProps {
  partners: PartnerWithDescription[];
}

export default function PartnersCarousel({ partners }: PartnersCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const carousel = carouselRef.current;
    if (!scrollContainer || !carousel) return;

    // Clone all items for infinite scroll effect
    const items = Array.from(scrollContainer.children);
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      scrollContainer.appendChild(clone);
    });

    let scrollPosition = 0;
    const totalWidth = scrollContainer.scrollWidth;
    let isAnimating = true;
    let intervalId: NodeJS.Timeout | null = null;

    const scroll = () => {
      if (isAnimating) {
        scrollPosition += 0.5;
        if (scrollPosition >= totalWidth / 2) {
          scrollPosition = 0;
        }
        scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      }
    };

    intervalId = setInterval(scroll, 5);

    // Pause on hover - attach to carousel wrapper
    carousel.addEventListener('mouseenter', () => {
      isAnimating = false;
    });

    carousel.addEventListener('mouseleave', () => {
      isAnimating = true;
    });

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden" ref={carouselRef}>
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-primary-900 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-primary-900 to-transparent pointer-events-none" />

      <ul
        ref={scrollContainerRef}
        className="flex gap-x-8 lg:gap-x-12 xl:gap-x-16 will-change-transform"
      >
        {partners.map((partner) => (
          <li key={partner.name} className="flex-shrink-0">
            <Link
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center h-20 w-44 outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
              title={partner.name}
            >
              <Image
                src={partner.image}
                alt={partner.name}
                width={440}
                height={80}
                className={cn(
                  'h-20 w-auto object-contain transition-all duration-200 group-hover:opacity-50 group-hover:blur-[2px]',
                  partner.preserveColor ? '' : 'brightness-0 invert',
                )}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-transparent p-2 text-center">
                <span className="inline-flex items-center font-semibold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  Visit Site
                  <ArrowRightIcon className="ml-1.5 size-4" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
