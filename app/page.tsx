import Image from 'next/image';
import Link from 'next/link';
import AnimatedStat from '~/app/_components/animated-stat';
import StackingActivitiesSection from '~/app/_components/stacking-activities-section';
import ArrowRightIcon from '../public/icons/arrow-right.svg';
import HeartHandIcon from '../public/icons/heart-hand.svg';
import BounceCardsSection from './_components/bounce-cards-section';

const partners: { name: string; image: string; href: string }[] = [
  {
    name: 'Adria',
    image: '/images/partners/adria.png',
    href: '#',
  },
  {
    name: 'UM6P',
    image: '/images/partners/um6p.svg',
    href: '#',
  },
  {
    name: 'Evasan',
    image: '/images/partners/evasan.png',
    href: '#',
  },
  {
    name: 'Royal Air Maroc',
    image: '/images/partners/ram.svg',
    href: '#',
  },
];

const stats: { title: string; number: number; suffix?: string }[] = [
  {
    title: 'Members & volunteers',
    number: 100,
    suffix: '+',
  },
  {
    title: 'Participants in the last 12 months',
    number: 500,
    suffix: '+',
  },
  {
    title: 'Divisions',
    number: 14,
    suffix: '+',
  },
  {
    title: 'Followers on social media',
    number: 50000,
    suffix: '+',
  },
];

const activities = [
  {
    title: 'Moroccan Day of Mathematics',
    description:
      'Lorem ipsum dolor sit amet consectetur. Viverra rutrum vestibulum pulvinar in scelerisque aenean non tristique. Aliquet nulla mi mauris malesuada amet pharetra vel. Imperdiet eu enim sed commodo commodo elit vel.',
    linkText: 'Explore MDM',
    linkHref: '/',
    imageSrc: '/images/activities/mdm.png',
    imageAlt: 'Moroccan Day of Mathematics',
    highlight: 'coming later this year !',
  },
  {
    title: 'Moroccan Tournament of Young Mathematicians',
    description:
      'Lorem ipsum dolor sit amet consectetur. Viverra rutrum vestibulum pulvinar in scelerisque aenean non tristique. Aliquet nulla mi mauris malesuada amet pharetra vel. Imperdiet eu enim sed commodo commodo elit vel.',
    linkText: 'Explore MTYM',
    linkHref: '/',
    imageSrc: '/images/activities/mtym.jpg',
    imageAlt: 'Moroccan Tournament of Young Mathematicians',
  },
  {
    title: 'Maths & Maroc Competition',
    description:
      'Lorem ipsum dolor sit amet consectetur. Viverra rutrum vestibulum pulvinar in scelerisque aenean non tristique. Aliquet nulla mi mauris malesuada amet pharetra vel. Imperdiet eu enim sed commodo commodo elit vel.',
    linkText: 'Explore MMC',
    linkHref: '/',
    imageSrc: '/images/activities/mmc.jpg',
    imageAlt: 'Maths & Maroc Competition',
  },
  {
    title: 'Summer Camp',
    description:
      'Lorem ipsum dolor sit amet consectetur. Viverra rutrum vestibulum pulvinar in scelerisque aenean non tristique. Aliquet nulla mi mauris malesuada amet pharetra vel. Imperdiet eu enim sed commodo commodo elit vel.',
    linkText: 'Explore Summer Camp',
    linkHref: '/',
    imageSrc: '/images/activities/summer-camp.jpg',
    imageAlt: 'Summer Camp',
  },
];

export default function Page() {
  return (
    <main>
      {/* Hero Section */}
      <header className="flex w-full justify-center py-8 md:py-16">
        <div className="mx-auto flex h-fit w-full max-w-7xl flex-col items-end gap-4 px-6 sm:px-8 md:flex-row md:gap-8">
          <h1 className="h-fit w-full max-w-176 text-pretty font-semibold text-4xl text-primary-950 tracking-tighter md:text-5xl">
            Unlocking the scientific potential of Moroccan youth
          </h1>
          <p className="h-fit text-pretty text-gray-600 text-lg md:text-right md:text-xl">
            1st Moroccan non-profit math related educational association
          </p>
        </div>
      </header>
      {/* Bounce Cards Section */}
      <BounceCardsSection />
      {/* Activities Section */}
      <StackingActivitiesSection
        title="What activities can Math & Maroc offer you?"
        subtitle="Explore some of the various activities we offer for students of all levels"
        activities={activities}
      />
      {/* Partners Section */}
      <section className="flex w-full flex-col items-center pt-16 lg:pt-24">
        <div className="flex w-full max-w-7xl flex-col items-center gap-y-16 bg-primary-900 px-6 py-16 sm:px-8 md:px-12 lg:flex-row lg:justify-between lg:gap-x-16 lg:gap-y-0 lg:px-16">
          <div className="flex flex-col gap-y-8 lg:max-w-xl">
            <h2 className="font-semibold text-4xl text-white tracking-tighter md:text-5xl">
              Our Partners
            </h2>
            <p className="text-pretty text-lg text-primary-100 lg:text-xl">
              Lorem ipsum dolor sit amet consectetur. Viverra rutrum vestibulum
              pulvinar in scelerisque aenean non tristique. Aliquet nulla mi
              mauris malesuada amet pharetra vel. Imperdiet eu enim sed commodo
              commodo elit vel.
            </p>
            <div className="flex items-center gap-x-6">
              <Link
                href="#"
                className="flex items-center gap-x-1.5 bg-primary-500 px-4 py-2.5 font-semibold text-shadow-lg text-white transition-all hover:bg-primary-600 hover:text-shadow-xl hover:shadow-lg"
              >
                <span>Become a Partner</span>
                <HeartHandIcon className="size-5" />
              </Link>
              <Link
                href="#"
                className="flex items-center gap-x-1.5 font-semibold text-primary-50"
              >
                <span>Contact us</span>
                <ArrowRightIcon className="size-5" />
              </Link>
            </div>
          </div>
          <ul className="grid min-w-fit grid-cols-2 gap-x-8 gap-y-4 sm:gap-y-8 md:grid-cols-4 md:gap-x-8 md:gap-y-0 lg:grid-cols-2 lg:gap-10 lg:gap-x-8 xl:gap-x-12 xl:gap-y-16">
            {partners.map((partner) => (
              <li
                key={partner.name}
                className="flex items-center justify-center"
              >
                <Link
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block"
                >
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={440}
                    height={80}
                    className="h-20 w-auto object-contain brightness-0 invert transition-all duration-200 group-hover:opacity-50 group-hover:blur-[2px]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-transparent p-2 text-center">
                    <div className="inline-flex items-center font-semibold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      Visit Site
                      <ArrowRightIcon className="ml-1.5 size-4" />
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Stats Section */}
      <section className="flex w-full flex-col items-center pt-16 lg:pt-24">
        <div className="">
          <div className="flex w-full max-w-7xl flex-col items-start gap-y-12 px-4 md:px-8 lg:flex-row-reverse lg:items-center lg:gap-x-16">
            <div className="flex w-full flex-col items-start gap-y-8 md:gap-y-16">
              <div className="flex flex-col gap-y-4 md:gap-y-5">
                <p className="font-krypton font-semibold text-primary-800 text-shadow text-sm md:text-base">
                  On your mark, get set, Maths !
                </p>
                <h2 className="font-semibold text-3xl text-gray-900 tracking-tighter md:text-5xl">
                  Growing year after year
                </h2>
              </div>
              <dl className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-y-16 lg:gap-x-8 lg:gap-y-12">
                {stats.map((stat) => (
                  <AnimatedStat
                    key={stat.title}
                    title={stat.title}
                    targetValue={stat.number}
                    suffix={stat.suffix}
                    className="flex flex-col items-start gap-y-3 lg:gap-y-5"
                    ddClassName="font-krypton font-semibold text-5xl text-primary-800 tracking-tighter md:text-6xl"
                    springOptions={{ bounce: 0, duration: 5000 }}
                  />
                ))}
              </dl>
            </div>
            <figure className="w-full">
              <Image
                src="/images/omar-with-flag.jpeg"
                alt="Omar with flag"
                width={600}
                height={600}
                className="h-70 w-full object-cover md:h-90 lg:h-140"
              />
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
