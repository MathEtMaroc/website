'use client';

import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import * as Accordion from '@radix-ui/react-accordion';
import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import BracketsEllipsesIcon from '../../public/icons/brackets-ellipses.svg';
import BuildingIcon from '../../public/icons/building.svg';
import CalendarIcon from '../../public/icons/calendar.svg';
import FlagIcon from '../../public/icons/flag.svg';
import InfinityIcon from '../../public/icons/infinity.svg';
import PresentationChartIcon from '../../public/icons/presentation-chart.svg';
import StarsIcon from '../../public/icons/stars.svg';
import SunriseIcon from '../../public/icons/sunrise.svg';
import TrophyIcon from '../../public/icons/trophy.svg';

const actions = [
  {
    name: 'Math & Maroc Competition',
    description: 'Mathematics competition for university students',
    href: '/competition',
    icon: TrophyIcon,
  },
  {
    name: 'MTYM',
    description: 'Mathematics research competition for high school students',
    href: '/mtym',
    icon: StarsIcon,
  },
  {
    name: 'Think AI Hackathon',
    description: 'Artificial intelligence competition for university students',
    href: '/hackathon',
    icon: BracketsEllipsesIcon,
  },
  {
    name: 'Summer Camp',
    description:
      'A week-long camp for middle school students focused on mathematics and science',
    href: '/summer-camp',
    icon: SunriseIcon,
  },
  {
    name: 'Moroccan day of mathematics',
    description: 'The largest mathematics event in Morocco',
    href: '/moroccan-day',
    icon: CalendarIcon,
  },
];

const divisions = [
  {
    name: 'Olympiads',
    description: "Maths' Olympiads preparation",
    href: '/olympiads',
    icon: InfinityIcon,
  },
  {
    name: 'Orientation',
    description:
      'Making content to give more insight to young Moroccans about their career prospects',
    href: '/orientation',
    icon: FlagIcon,
  },
  {
    name: 'Conferences',
    description: 'Mathematical conferences in person and online',
    href: '/conferences',
    icon: PresentationChartIcon,
  },
  {
    name: 'Prepa',
    description: 'Initiatives to help CPGE students all over Morocco',
    href: '/prepa',
    icon: BuildingIcon,
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [initialRender, setInitialRender] = useState(true);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(
    'actions'
  );

  const isSm = useMediaQuery({ query: '(max-width: 640px)' });

  // Refs for menu items to get their positions
  const actionsRef = useRef<HTMLDivElement>(null);
  const divisionsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  // Reset initialRender when mobile menu closes
  useEffect(() => {
    if (!mobileMenuOpen) {
      setInitialRender(true);
    }
  }, [mobileMenuOpen]);

  // Handle accordion changes
  const handleAccordionChange = (value: string) => {
    if (value && value !== activeAccordion) {
      setActiveAccordion(value);
      setInitialRender(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 flex h-20 w-full flex-col items-center justify-center bg-transparent">
      <nav className="flex w-full max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
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
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <nav
            ref={actionsRef}
            className="relative"
            onMouseEnter={() => setActiveItem('actions')}
            onMouseLeave={() => setActiveItem(null)}
          >
            <button
              type="button"
              className="group flex items-center gap-x-1 font-semibold text-base text-gray-600 outline-none"
            >
              Our Programs
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-600 transition-transform duration-200 group-data-[state=open]:rotate-180"
              />
            </button>

            <AnimatePresence>
              {activeItem === 'actions' && (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                    filter: 'blur(2px)',
                  }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.95, filter: 'blur(2px)' }}
                  transition={{ duration: 0.25 }}
                  className="-translate-x-1/2 absolute left-1/2 z-50 mt-3 w-[26rem] overflow-hidden rounded-xl bg-white shadow-[0px_2px_2px_-1px_rgba(10,13,18,0.04),0px_4px_6px_-2px_rgba(10,13,18,0.03),0px_12px_16px_-4px_rgba(10,13,18,0.08)] outline outline-gray-200 outline-offset-[-1px]"
                >
                  <div className="flex flex-col gap-0.5 p-3">
                    {actions.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-start gap-3 rounded-lg p-3 hover:bg-gray-50"
                      >
                        <div className="relative h-7 w-7 overflow-hidden">
                          <item.icon
                            aria-hidden="true"
                            className="absolute top-[2px] left-[2px] size-6 text-primary-800"
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-1">
                          <Link
                            href={item.href}
                            className="block font-semibold text-gray-900 text-lg"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="text-base text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>

          <nav
            ref={divisionsRef}
            className="relative"
            onMouseEnter={() => setActiveItem('divisions')}
            onMouseLeave={() => setActiveItem(null)}
          >
            <button
              type="button"
              className="group flex items-center gap-x-1 font-semibold text-base text-gray-600 outline-none"
            >
              Our Divisions
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-600 transition-transform duration-200 group-data-[state=open]:rotate-180"
              />
            </button>

            <AnimatePresence>
              {activeItem === 'divisions' && (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                    filter: 'blur(2px)',
                  }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.95, filter: 'blur(2px)' }}
                  transition={{ duration: 0.25 }}
                  className="absolute right-0 z-50 mt-3 mr-[-4rem] w-screen max-w-[32rem] overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5"
                >
                  <div className="p-4">
                    {divisions.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex gap-x-3 rounded-lg p-4 hover:bg-gray-50"
                      >
                        <div className="flex size-12 flex-none items-center justify-center rounded-full bg-primary-50">
                          <item.icon
                            aria-hidden="true"
                            className="size-6 text-primary-800"
                          />
                        </div>
                        <div className="flex-auto">
                          <Link
                            href={item.href}
                            className="block font-semibold text-gray-900 text-lg"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-base text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>

          <nav ref={aboutRef} className="relative">
            <Link
              href="/about"
              className="font-semibold text-base text-gray-600"
            >
              Who We Are
            </Link>
          </nav>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
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
                    initial={
                      isSm ? { opacity: 0, scale: 0.95, y: 20 } : { x: '100%' }
                    }
                    animate={isSm ? { opacity: 1, scale: 1, y: 0 } : { x: 0 }}
                    exit={
                      isSm ? { opacity: 0, scale: 0.95, y: 20 } : { x: '100%' }
                    }
                    transition={
                      isSm
                        ? { type: 'spring', bounce: 0.2, duration: 0.5 }
                        : { type: 'spring', bounce: 0.1, duration: 0.4 }
                    }
                    className={`fixed z-50 overflow-y-auto bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10 ${
                      isSm
                        ? '-translate-y-1/2 inset-x-4 top-1/2 max-h-[96vh] rounded-2xl shadow-xl'
                        : 'inset-y-0 right-0 w-full sm:max-w-sm'
                    }`}
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
                      <Dialog.Close className="rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </Dialog.Close>
                    </div>
                    <div className="mt-6 flow-root">
                      <div className="-my-6">
                        <div className="space-y-2 py-6">
                          <Accordion.Root
                            type="single"
                            collapsible
                            defaultValue="actions"
                            onValueChange={handleAccordionChange}
                          >
                            <div className="space-y-2">
                              <Link
                                href="/"
                                className="mb-2 flex w-full items-center rounded-lg py-3 pl-3 font-semibold text-base/7 text-gray-900"
                              >
                                Home
                              </Link>

                              <Accordion.Item value="actions" className="mb-2">
                                <Accordion.Trigger className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 font-semibold text-base/7 text-gray-900">
                                  Our Programs
                                  <ChevronDownIcon
                                    aria-hidden="true"
                                    className="size-5 flex-none text-gray-400 transition-transform duration-200 group-data-[state=open]:rotate-180"
                                  />
                                </Accordion.Trigger>
                                <Accordion.Content asChild>
                                  <motion.div
                                    initial={
                                      initialRender ||
                                      activeAccordion === 'actions'
                                        ? false
                                        : {
                                            opacity: 0,
                                            scale: 0.95,
                                            filter: 'blur(4px)',
                                            y: -10,
                                          }
                                    }
                                    animate={{
                                      opacity: 1,
                                      scale: 1,
                                      filter: 'blur(0px)',
                                      y: 0,
                                    }}
                                    exit={{
                                      opacity: 0,
                                      scale: 0.95,
                                      filter: 'blur(4px)',
                                      y: -10,
                                    }}
                                    onAnimationComplete={() => {
                                      if (initialRender) {
                                        setInitialRender(false);
                                      }
                                    }}
                                    transition={{
                                      duration: 0.4,
                                      ease: 'easeInOut',
                                      opacity: { duration: 0.3 },
                                      scale: { duration: 0.3 },
                                      filter: { duration: 0.2 },
                                      y: { duration: 0.3 },
                                    }}
                                    className="mt-2 space-y-1 overflow-hidden p-2"
                                  >
                                    {actions.map((item) => (
                                      <div
                                        key={item.name}
                                        className="flex items-start gap-3 rounded-lg p-3 hover:bg-gray-50"
                                      >
                                        <div className="relative h-7 w-7 overflow-hidden">
                                          <item.icon
                                            aria-hidden="true"
                                            className="absolute top-[2px] left-[2px] size-6 text-primary-800"
                                          />
                                        </div>
                                        <div className="flex flex-1 flex-col gap-1">
                                          <Link
                                            href={item.href}
                                            className="block font-semibold text-gray-900 text-lg"
                                          >
                                            {item.name}
                                          </Link>
                                          <p className="text-base text-gray-600">
                                            {item.description}
                                          </p>
                                        </div>
                                      </div>
                                    ))}
                                  </motion.div>
                                </Accordion.Content>
                              </Accordion.Item>

                              <Accordion.Item
                                value="divisions"
                                className="mb-2"
                              >
                                <Accordion.Trigger className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 font-semibold text-base/7 text-gray-900">
                                  Our Divisions
                                  <ChevronDownIcon
                                    aria-hidden="true"
                                    className="size-5 flex-none text-gray-400 transition-transform duration-200 group-data-[state=open]:rotate-180"
                                  />
                                </Accordion.Trigger>
                                <Accordion.Content asChild>
                                  <motion.div
                                    initial={
                                      initialRender ||
                                      activeAccordion === 'divisions'
                                        ? false
                                        : {
                                            opacity: 0,
                                            scale: 0.95,
                                            filter: 'blur(4px)',
                                            y: -10,
                                          }
                                    }
                                    animate={{
                                      opacity: 1,
                                      scale: 1,
                                      filter: 'blur(0px)',
                                      y: 0,
                                    }}
                                    exit={{
                                      opacity: 0,
                                      scale: 0.95,
                                      filter: 'blur(4px)',
                                      y: -10,
                                    }}
                                    onAnimationComplete={() => {
                                      if (initialRender) {
                                        setInitialRender(false);
                                      }
                                    }}
                                    transition={{
                                      duration: 0.4,
                                      ease: 'easeInOut',
                                      opacity: { duration: 0.3 },
                                      scale: { duration: 0.3 },
                                      filter: { duration: 0.2 },
                                      y: { duration: 0.3 },
                                    }}
                                    className="mt-2 space-y-1 overflow-hidden p-2"
                                  >
                                    {divisions.map((item) => (
                                      <div
                                        key={item.name}
                                        className="flex items-start gap-3 rounded-lg p-3 hover:bg-gray-50"
                                      >
                                        <div className="relative h-7 w-7 overflow-hidden">
                                          <item.icon
                                            aria-hidden="true"
                                            className="absolute top-[2px] left-[2px] size-6 text-primary-800"
                                          />
                                        </div>
                                        <div className="flex flex-1 flex-col gap-1">
                                          <Link
                                            href={item.href}
                                            className="block font-semibold text-gray-900 text-lg"
                                          >
                                            {item.name}
                                          </Link>
                                          <p className="text-base text-gray-600">
                                            {item.description}
                                          </p>
                                        </div>
                                      </div>
                                    ))}
                                  </motion.div>
                                </Accordion.Content>
                              </Accordion.Item>

                              <div className="mt-2">
                                <Link
                                  href="/about"
                                  className="flex w-full items-center rounded-lg py-3 pl-3 font-semibold text-base/7 text-gray-900"
                                >
                                  Who We Are
                                </Link>
                              </div>
                            </div>
                          </Accordion.Root>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
