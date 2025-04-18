'use client';

import * as Accordion from '@radix-ui/react-accordion';
import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'motion/react';
import { useMotionTemplate, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import useBoundedScroll from '~/app/utils/use-bounded-scroll';

import { cn } from '~/app/utils/cn';
import BracketsEllipsesIcon from '../../public/icons/brackets-ellipses.svg';
import BuildingIcon from '../../public/icons/building.svg';
import CalendarIcon from '../../public/icons/calendar.svg';
import ChevronDownIcon from '../../public/icons/chevron-down.svg';
import FlagIcon from '../../public/icons/flag.svg';
import InfinityIcon from '../../public/icons/infinity.svg';
import MenuIcon from '../../public/icons/menu.svg';
import PresentationChartIcon from '../../public/icons/presentation-chart.svg';
import StarsIcon from '../../public/icons/stars.svg';
import SunriseIcon from '../../public/icons/sunrise.svg';
import TrophyIcon from '../../public/icons/trophy.svg';
import XCloseIcon from '../../public/icons/x-close.svg';

/**
 * Animation variants for desktop dropdown menus
 * Handles appearance and disappearance with blur effect and scaling
 */
const dropdownVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
  },
};

/**
 * Animation variants for mobile menu
 * Adapts behavior based on screen size:
 * - For small screens (isSm): Appears from center with scaling
 * - For larger screens: Slides in from right side
 */
const mobileMenuVariants = {
  hidden: (isSm: boolean) =>
    isSm ? { opacity: 0, scale: 0.95, y: 20 } : { x: '100%' },
  visible: (isSm: boolean) =>
    isSm ? { opacity: 1, scale: 1, y: 0 } : { x: 0 },
};

/**
 * Animation variants for accordion content in mobile menu
 * Handles smooth appearance with opacity and height changes
 */
const accordionContentVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    overflow: 'hidden',
    filter: 'blur(0px)',
    transition: {
      height: {
        duration: 0.3,
        ease: [0.32, 0.72, 0, 1], // Custom easing for natural motion
      },
      opacity: {
        duration: 0.15,
      },
    },
  },
  visible: {
    opacity: 1,
    height: 'auto',
    overflow: 'visible',
    filter: 'blur(0px)',
    transition: {
      height: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1], // Custom easing for natural motion
      },
      opacity: {
        duration: 0.2,
        delay: 0.1,
      },
    },
  },
};

// Staggered children animation for accordion content items
const staggeredChildrenVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const staggeredContainerVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  visible: {
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.08,
    },
  },
};

const dropdownButtonStyles =
  'group flex items-center gap-x-1 font-semibold text-base text-gray-600 outline-none transition-colors hover:text-gray-900 focus:text-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 px-2 py-1';
const mobileNavLinkStyles =
  'flex w-full items-center py-3 pl-3 font-semibold text-base/7 text-gray-900 transition-all hover:text-primary-600';
const mobileAccordionTriggerStyles =
  'group flex w-full items-center justify-between py-2 pr-3.5 pl-3 font-semibold text-base/7 text-gray-900 transition-all hover:text-primary-600';

const actions = [
  {
    name: 'Math & Maroc Competition',
    description: 'Mathematics competition for university students',
    href: '#',
    icon: TrophyIcon,
  },
  {
    name: 'MTYM',
    description: 'Mathematics research competition for high school students',
    href: '#',
    icon: StarsIcon,
  },
  {
    name: 'Think AI Hackathon',
    description: 'Artificial intelligence competition for university students',
    href: '#',
    icon: BracketsEllipsesIcon,
  },
  {
    name: 'Summer Camp',
    description:
      'A week-long camp for middle school students focused on mathematics and science',
    href: '#',
    icon: SunriseIcon,
  },
  {
    name: 'Moroccan day of mathematics',
    description: 'The largest mathematics event in Morocco',
    href: '#',
    icon: CalendarIcon,
  },
];

const divisions = [
  {
    name: 'Olympiads',
    description: "Maths' Olympiads preparation",
    href: '#',
    icon: InfinityIcon,
  },
  {
    name: 'Orientation',
    description:
      'Making content to give more insight to young Moroccans about their career prospects',
    href: '#',
    icon: FlagIcon,
  },
  {
    name: 'Conferences',
    description: 'Mathematical conferences in person and online',
    href: '#',
    icon: PresentationChartIcon,
  },
  {
    name: 'Prepa',
    description: 'Initiatives to help CPGE students all over Morocco',
    href: '#',
    icon: BuildingIcon,
  },
];

function ActionItem({
  item,
  className,
  tabIndex = 0,
  isMobile = false,
  isScrolled = false,
}: {
  item: (typeof actions)[0];
  className?: string;
  tabIndex?: number;
  isMobile?: boolean;
  isScrolled?: boolean;
}) {
  return (
    <Link
      href={item.href}
      className={cn(
        'group flex items-start gap-3 p-3 transition-all',
        !isMobile &&
          isScrolled &&
          'hover:bg-gradient-to-r hover:from-white/90 hover:to-white/75 hover:shadow-sm',
        !isMobile && !isScrolled && 'hover:bg-gray-50',
        (isMobile || !isScrolled) && 'hover:text-primary-600',
        className
      )}
      tabIndex={tabIndex}
    >
      <div className="relative h-7 w-7 overflow-hidden">
        <item.icon
          aria-hidden="true"
          className="absolute top-[2px] left-[2px] size-6 text-primary-800 transition-colors group-hover:text-primary-600"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <span className="block font-semibold text-gray-900 text-lg transition-colors group-hover:text-primary-600">
          {item.name}
        </span>
        <p className="text-base text-gray-600">{item.description}</p>
      </div>
    </Link>
  );
}

function DivisionListItem({
  item,
  className,
  tabIndex = 0,
  isMobile = false,
  isScrolled = false,
}: {
  item: (typeof divisions)[0];
  className?: string;
  tabIndex?: number;
  isMobile?: boolean;
  isScrolled?: boolean;
}) {
  return (
    <Link
      href={item.href}
      className={cn(
        'group flex gap-x-3 p-4 transition-all',
        !isMobile &&
          isScrolled &&
          'hover:bg-gradient-to-r hover:from-white/90 hover:to-white/75 hover:shadow-sm',
        !isMobile && !isScrolled && 'hover:bg-gray-50',
        (isMobile || !isScrolled) && 'hover:text-primary-600',
        className
      )}
      tabIndex={tabIndex}
    >
      <div className="flex size-12 flex-none items-center justify-center rounded-full bg-primary-50 transition-colors group-hover:bg-primary-100">
        <item.icon
          aria-hidden="true"
          className="size-6 text-primary-800 transition-colors group-hover:text-primary-600"
        />
      </div>
      <div className="flex-auto">
        <span className="block font-semibold text-gray-900 text-lg transition-colors group-hover:text-primary-600">
          {item.name}
        </span>
        <p className="mt-1 text-base text-gray-600">{item.description}</p>
      </div>
    </Link>
  );
}

/**
 * Main Navbar component with responsive behavior and glassmorphic effects
 * Features:
 * - Adaptive size and appearance based on scroll position
 * - Dropdown menus for Programs and Divisions
 * - Mobile-responsive design with animated slide-in menu
 * - Keyboard navigation support
 * - Glassmorphic effect that intensifies on scroll
 */
export function Navbar() {
  // State for tracking mobile menu and accordion state
  const [mobileState, setMobileState] = useState({
    isOpen: false,
    activeAccordion: '', // Currently active accordion section
  });
  const [activeDesktopItem, setActiveDesktopItem] = useState<string | null>(
    null
  );
  const [mouseLeaveTimeoutId, setMouseLeaveTimeoutId] =
    useState<NodeJS.Timeout | null>(null);

  // Refs for handling keyboard navigation and focus management
  const programsButtonRef = React.useRef<HTMLButtonElement>(null);
  const divisionsButtonRef = React.useRef<HTMLButtonElement>(null);
  const programsDropdownRef = React.useRef<HTMLDivElement>(null);
  const divisionsDropdownRef = React.useRef<HTMLDivElement>(null);
  const lastFocusedElementRef = React.useRef<HTMLElement | null>(null);

  // Media query for responsive behavior
  const isSm = useMediaQuery({ query: '(max-width: 640px)' });

  // Animation values for navbar resizing on scroll
  const { immediateScrollProgress, scrollYBoundedProgressDelayed } =
    useBoundedScroll(80);

  // Determine if navbar is in glassmorphic mode (scrolled)
  const isScrolledMotion = useTransform(
    immediateScrollProgress,
    (value) => value > 0.05
  );

  // State to track the current scroll status
  const [isScrolled, setIsScrolled] = useState(false);

  // Update isScrolled state when the motion value changes
  React.useEffect(() => {
    const unsubscribe = isScrolledMotion.on('change', (latest) => {
      setIsScrolled(latest);
    });

    return () => unsubscribe();
  }, [isScrolledMotion]);

  // Motion values for glassmorphic effect based on scroll position
  const bgOpacityProgress = useTransform(
    immediateScrollProgress,
    [0, 0.05, 0.15, 1],
    [1, 0.98, 0.97, 0.95]
  );

  const blurPixelsProgress = useTransform(
    immediateScrollProgress,
    [0, 0.05, 0.15, 1],
    [4, 10, 16, 25]
  );

  const borderOpacityProgress = useTransform(
    immediateScrollProgress,
    [0, 0.1, 1],
    [0.05, 0.1, 0.5]
  );

  const shadowOpacityProgress = useTransform(
    immediateScrollProgress,
    [0, 0.1, 1],
    [0.07, 0.12, 0.18]
  );

  const shadowSmallOpacityProgress = useTransform(
    immediateScrollProgress,
    [0, 0.1, 1],
    [0.04, 0.07, 0.12]
  );

  // Motion templates for dropdown styling
  const dropdownBackground = useMotionTemplate`rgba(255, 255, 255, ${bgOpacityProgress})`;
  const dropdownBlur = useMotionTemplate`blur(${blurPixelsProgress}px)`;
  const dropdownBorderColor = useMotionTemplate`rgba(229, 231, 235, ${borderOpacityProgress})`;
  const dropdownShadow = useMotionTemplate`0 4px 24px -2px rgba(0, 0, 0, ${shadowOpacityProgress}), 0 2px 8px -1px rgba(0, 0, 0, ${shadowSmallOpacityProgress})`;

  // Memoized styles to prevent unnecessary re-renders
  const dropdownStyles = React.useMemo(
    () => ({
      backgroundColor: dropdownBackground,
      backdropFilter: dropdownBlur,
      borderColor: dropdownBorderColor,
      boxShadow: dropdownShadow,
    }),
    [dropdownBackground, dropdownBlur, dropdownBorderColor, dropdownShadow]
  );

  const mobileMenuStyles = React.useMemo(
    () => ({
      backgroundColor: dropdownBackground,
      backdropFilter: dropdownBlur,
      borderColor: dropdownBorderColor,
      boxShadow: isSm ? dropdownShadow : 'none',
    }),
    [
      dropdownBackground,
      dropdownBlur,
      dropdownBorderColor,
      dropdownShadow,
      isSm,
    ]
  );

  /**
   * Handles opening and closing the mobile menu
   */
  const handleMobileMenuChange = (isOpen: boolean) => {
    setMobileState((prev) => ({
      ...prev,
      isOpen,
    }));
  };

  /**
   * Handles opening and closing accordion sections in mobile menu
   * Updates the active accordion state when a new section is selected
   */
  const handleAccordionChange = (value: string) => {
    setMobileState((prev) => ({
      ...prev,
      activeAccordion: value,
    }));
  };

  const handleMouseEnter = (item: string) => {
    if (mouseLeaveTimeoutId) {
      clearTimeout(mouseLeaveTimeoutId);
      setMouseLeaveTimeoutId(null);
    }
    setActiveDesktopItem(item);
  };

  const handleMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      setActiveDesktopItem(null);
    }, 150);

    setMouseLeaveTimeoutId(timeoutId);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent,
    type: 'actions' | 'divisions'
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveDesktopItem(activeDesktopItem === type ? null : type);

      lastFocusedElementRef.current = e.currentTarget as HTMLElement;
    } else if (e.key === 'Escape' && activeDesktopItem === type) {
      e.preventDefault();
      setActiveDesktopItem(null);
    }
  };

  React.useEffect(() => {
    const handleFocusOut = (e: FocusEvent) => {
      if (activeDesktopItem) {
        const dropdownRef =
          activeDesktopItem === 'actions'
            ? programsDropdownRef.current
            : divisionsDropdownRef.current;

        const relatedTarget = e.relatedTarget as Node;

        if (
          dropdownRef &&
          !dropdownRef.contains(relatedTarget) &&
          relatedTarget !== programsButtonRef.current &&
          relatedTarget !== divisionsButtonRef.current
        ) {
          setActiveDesktopItem(null);
        }
      }
    };

    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [activeDesktopItem]);

  return (
    <motion.header
      style={{
        height: useTransform(
          scrollYBoundedProgressDelayed,
          [0, 1],
          ['5rem', '3.5rem']
        ),
        backgroundColor: useMotionTemplate`rgba(255, 255, 255, ${useTransform(
          immediateScrollProgress,
          [0, 1],
          [0, 0.6]
        )})`,
        backdropFilter: useMotionTemplate`blur(${useTransform(
          immediateScrollProgress,
          [0, 1],
          [0, 6]
        )}px)`,
        boxShadow: useMotionTemplate`0 4px 6px -1px rgba(0, 0, 0, ${useTransform(
          immediateScrollProgress,
          [0, 1],
          [0, 0.05]
        )}), 0 2px 4px -1px rgba(0, 0, 0, ${useTransform(
          immediateScrollProgress,
          [0, 1],
          [0, 0.05]
        )})`,
        borderBottom: useMotionTemplate`1px solid rgba(229, 231, 235, ${useTransform(
          immediateScrollProgress,
          [0, 1],
          [0, 0.5]
        )})`,
      }}
      className="sticky top-0 z-40 flex w-full flex-col items-center justify-center transition-all duration-150"
    >
      <motion.nav
        style={{
          paddingTop: useTransform(
            scrollYBoundedProgressDelayed,
            [0, 1],
            ['1.5rem', '0.5rem']
          ),
          paddingBottom: useTransform(
            scrollYBoundedProgressDelayed,
            [0, 1],
            ['1.5rem', '0.5rem']
          ),
        }}
        className="flex w-full max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Math Maroc</span>
            <motion.div
              style={{
                scale: useTransform(
                  scrollYBoundedProgressDelayed,
                  [0, 1],
                  [1, 0.85]
                ),
              }}
              className="focus-visible:outline-2 focus-visible:outline-primary-500"
            >
              <Image
                alt="Math Maroc Logo"
                src="/logo.webp"
                width={136}
                height={48}
                priority
                className="h-12 w-auto"
              />
            </motion.div>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => handleMobileMenuChange(true)}
            className="-m-2.5 inline-flex items-center justify-center p-2.5 text-gray-700 transition-colors hover:bg-gray-100 hover:text-primary-600"
            aria-label="Open main menu"
          >
            <MenuIcon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <nav
            className="relative"
            onMouseEnter={() => handleMouseEnter('actions')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              ref={programsButtonRef}
              type="button"
              className={dropdownButtonStyles}
              aria-expanded={activeDesktopItem === 'actions'}
              aria-controls="programs-dropdown"
              id="programs-menu-button"
              onClick={() =>
                setActiveDesktopItem(
                  activeDesktopItem === 'actions' ? null : 'actions'
                )
              }
              onKeyDown={(e) => handleKeyDown(e, 'actions')}
            >
              Our Programs
              <ChevronDownIcon
                aria-hidden="true"
                className={cn(
                  'size-5 flex-none text-gray-600 transition-transform duration-200 group-hover:text-gray-900',
                  activeDesktopItem === 'actions' && 'rotate-180'
                )}
              />
            </button>

            <AnimatePresence>
              {activeDesktopItem === 'actions' && (
                <motion.div
                  ref={programsDropdownRef}
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.25 }}
                  style={dropdownStyles}
                  className="-translate-x-1/2 absolute left-1/2 z-50 mt-3 w-[26rem] overflow-hidden border"
                  id="programs-dropdown"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="programs-menu-button"
                  onMouseEnter={() => {
                    if (mouseLeaveTimeoutId) {
                      clearTimeout(mouseLeaveTimeoutId);
                      setMouseLeaveTimeoutId(null);
                    }
                  }}
                  onMouseLeave={handleMouseLeave}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                      e.preventDefault();
                      setActiveDesktopItem(null);
                      programsButtonRef.current?.focus();
                    } else if (
                      e.key === 'Tab' &&
                      !e.shiftKey &&
                      e.target === e.currentTarget.querySelector('a:last-child')
                    ) {
                      setActiveDesktopItem(null);
                    } else if (
                      e.key === 'Tab' &&
                      e.shiftKey &&
                      e.target ===
                        e.currentTarget.querySelector('a:first-child')
                    ) {
                      e.preventDefault();
                      setActiveDesktopItem(null);
                      programsButtonRef.current?.focus();
                    }
                  }}
                >
                  <div className="flex flex-col gap-0.5 p-3">
                    {actions.map((item) => (
                      <ActionItem
                        key={item.name}
                        item={item}
                        isMobile={false}
                        isScrolled={isScrolled}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>

          <nav
            className="relative"
            onMouseEnter={() => handleMouseEnter('divisions')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              ref={divisionsButtonRef}
              type="button"
              className={dropdownButtonStyles}
              aria-expanded={activeDesktopItem === 'divisions'}
              aria-controls="divisions-dropdown"
              id="divisions-menu-button"
              onClick={() =>
                setActiveDesktopItem(
                  activeDesktopItem === 'divisions' ? null : 'divisions'
                )
              }
              onKeyDown={(e) => handleKeyDown(e, 'divisions')}
            >
              Our Divisions
              <ChevronDownIcon
                aria-hidden="true"
                className={cn(
                  'size-5 flex-none text-gray-600 transition-transform duration-200 group-hover:text-gray-900',
                  activeDesktopItem === 'divisions' && 'rotate-180'
                )}
              />
            </button>

            <AnimatePresence>
              {activeDesktopItem === 'divisions' && (
                <motion.div
                  ref={divisionsDropdownRef}
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.25 }}
                  style={dropdownStyles}
                  className="absolute right-0 z-50 mt-3 mr-[-4rem] w-screen max-w-[32rem] overflow-hidden border ring-1 ring-gray-900/5"
                  id="divisions-dropdown"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="divisions-menu-button"
                  onMouseEnter={() => {
                    if (mouseLeaveTimeoutId) {
                      clearTimeout(mouseLeaveTimeoutId);
                      setMouseLeaveTimeoutId(null);
                    }
                  }}
                  onMouseLeave={handleMouseLeave}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                      e.preventDefault();
                      setActiveDesktopItem(null);
                      divisionsButtonRef.current?.focus();
                    } else if (
                      e.key === 'Tab' &&
                      !e.shiftKey &&
                      e.target === e.currentTarget.querySelector('a:last-child')
                    ) {
                      setActiveDesktopItem(null);
                    } else if (
                      e.key === 'Tab' &&
                      e.shiftKey &&
                      e.target ===
                        e.currentTarget.querySelector('a:first-child')
                    ) {
                      e.preventDefault();
                      setActiveDesktopItem(null);
                      divisionsButtonRef.current?.focus();
                    }
                  }}
                >
                  <div className="p-4">
                    {divisions.map((item) => (
                      <DivisionListItem
                        key={item.name}
                        item={item}
                        isMobile={false}
                        isScrolled={isScrolled}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>

          <div className="relative">
            <Link href="#" className={dropdownButtonStyles}>
              Who We Are
            </Link>
          </div>
        </div>

        {/* Mobile menu with animated height transitions */}
        <AnimatePresence>
          {mobileState.isOpen && (
            <Dialog.Root
              open={mobileState.isOpen}
              onOpenChange={handleMobileMenuChange}
            >
              <Dialog.Portal forceMount>
                <Dialog.Overlay asChild>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                  />
                </Dialog.Overlay>
                <Dialog.Content asChild>
                  <motion.div
                    custom={isSm}
                    variants={mobileMenuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={
                      isSm
                        ? { type: 'spring', bounce: 0.1, duration: 0.5 }
                        : { type: 'spring', bounce: 0.05, duration: 0.4 }
                    }
                    style={mobileMenuStyles}
                    className={cn(
                      'fixed z-50 overflow-y-auto border px-6 py-6 sm:ring-1 sm:ring-gray-900/10',
                      isSm
                        ? '-translate-y-1/2 inset-x-4 top-1/2 max-h-[96vh]'
                        : 'inset-y-0 right-0 w-full sm:max-w-sm'
                    )}
                  >
                    <Dialog.Title className="sr-only">
                      Navigation Menu
                    </Dialog.Title>
                    <div className="flex items-center justify-between">
                      <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Math Maroc</span>
                        <Image
                          alt="Math Maroc Logo"
                          src="/logo.webp"
                          width={136}
                          height={48}
                          priority
                          className="h-12 w-auto"
                        />
                      </Link>
                      <Dialog.Close
                        className="p-2.5 text-gray-700 transition-colors hover:bg-gray-100 hover:text-primary-600"
                        aria-label="Close menu"
                      >
                        <XCloseIcon aria-hidden="true" className="size-6" />
                      </Dialog.Close>
                    </div>

                    {/* Mobile menu content with smoother layout animations */}
                    <motion.div
                      className="mt-6 flow-root"
                      layout="position"
                      layoutRoot
                      transition={{
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1], // Custom spring-like easing without bounce
                      }}
                    >
                      <motion.div className="-my-6">
                        <motion.div
                          className="space-y-2 py-6"
                          layout="position"
                        >
                          <Accordion.Root
                            type="single"
                            collapsible
                            onValueChange={handleAccordionChange}
                          >
                            <motion.div
                              className="space-y-2"
                              transition={{
                                duration: 0.35,
                                ease: [0.25, 1, 0.5, 1],
                              }}
                            >
                              <Link
                                href="/"
                                className={cn('mb-2', mobileNavLinkStyles)}
                              >
                                Home
                              </Link>

                              <Accordion.Item value="actions" className="mb-2">
                                <Accordion.Header>
                                  <Accordion.Trigger
                                    className={mobileAccordionTriggerStyles}
                                  >
                                    Our Programs
                                    <ChevronDownIcon
                                      aria-hidden="true"
                                      className="size-5 flex-none text-gray-400 transition-transform duration-300 ease-out group-hover:text-primary-600 group-data-[state=open]:rotate-180"
                                    />
                                  </Accordion.Trigger>
                                </Accordion.Header>
                                <Accordion.Content asChild>
                                  <motion.div
                                    className="overflow-hidden bg-transparent"
                                    initial={accordionContentVariants.hidden}
                                    animate={accordionContentVariants.visible}
                                    exit={accordionContentVariants.hidden}
                                    layout="position"
                                  >
                                    <div className="mt-2 space-y-1 p-2">
                                      <motion.div
                                        className="space-y-1"
                                        variants={staggeredContainerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                      >
                                        {actions.map((item) => (
                                          <motion.div
                                            key={item.name}
                                            variants={staggeredChildrenVariants}
                                          >
                                            <ActionItem
                                              item={item}
                                              isMobile={true}
                                              isScrolled={isScrolled}
                                            />
                                          </motion.div>
                                        ))}
                                      </motion.div>
                                    </div>
                                  </motion.div>
                                </Accordion.Content>
                              </Accordion.Item>

                              <Accordion.Item
                                value="divisions"
                                className="mb-2"
                              >
                                <Accordion.Header>
                                  <Accordion.Trigger
                                    className={mobileAccordionTriggerStyles}
                                  >
                                    Our Divisions
                                    <ChevronDownIcon
                                      aria-hidden="true"
                                      className="size-5 flex-none text-gray-400 transition-transform duration-300 ease-out group-hover:text-primary-600 group-data-[state=open]:rotate-180"
                                    />
                                  </Accordion.Trigger>
                                </Accordion.Header>
                                <Accordion.Content asChild>
                                  <motion.div
                                    className="overflow-hidden bg-transparent"
                                    initial={accordionContentVariants.hidden}
                                    animate={accordionContentVariants.visible}
                                    exit={accordionContentVariants.hidden}
                                    layout="position"
                                  >
                                    <div className="mt-2 space-y-1 p-2">
                                      <motion.div
                                        className="space-y-1"
                                        variants={staggeredContainerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                      >
                                        {divisions.map((item) => (
                                          <motion.div
                                            key={item.name}
                                            variants={staggeredChildrenVariants}
                                          >
                                            <ActionItem
                                              item={item}
                                              isMobile={true}
                                              isScrolled={isScrolled}
                                            />
                                          </motion.div>
                                        ))}
                                      </motion.div>
                                    </div>
                                  </motion.div>
                                </Accordion.Content>
                              </Accordion.Item>

                              {/* Separate from layout animations to prevent bouncing */}
                              <div className="mt-2">
                                <Link href="#" className={mobileNavLinkStyles}>
                                  Who We Are
                                </Link>
                              </div>
                            </motion.div>
                          </Accordion.Root>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.header>
  );
}
