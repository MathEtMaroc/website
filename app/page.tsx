import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import type { Activity } from '~/app/_components/activity';
import AnimatedStat from '~/app/_components/animated-stat';
import StackingActivitiesSection from '~/app/_components/stacking-activities-section';
import TestimonialsGrid, {
  type Testimonial,
} from '~/app/_components/testimonials-grid';
import ArrowRightIcon from '../public/icons/arrow-right.svg';
import HeartHandIcon from '../public/icons/heart-hand.svg';
import BounceCardsSection from './_components/bounce-cards-section';

// Define metadata for this page
export const metadata: Metadata = {
  title: 'Math & Maroc | Home',
  description:
    'First Moroccan non-profit math related educational association.',
};

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

const activities: Activity[] = [
  {
    title: 'Moroccan Day of Mathematics',
    description:
      'An annual celebration bringing together students, teachers, and researchers to explore the beauty of mathematics through interactive workshops, engaging lectures, and collaborative problem-solving activities. This nationwide event aims to inspire a love for mathematics in Moroccan youth.',
    linkText: 'Explore MDM',
    linkHref: '/',
    imageSrc: '/images/activities/mdm.png',
    imageAlt: 'Moroccan Day of Mathematics',
    highlight: 'coming later this year !',
  },
  {
    title: 'Moroccan Tournament of Young Mathematicians',
    description:
      'A team-based competition challenging high school students to solve complex, open-ended mathematical problems. Participants develop research skills, creative thinking, and collaborative abilities while preparing written solutions and defending them in mathematical debates against other teams.',
    linkText: 'Explore MTYM',
    linkHref: '/',
    imageSrc: '/images/activities/mtym.jpg',
    imageAlt: 'Moroccan Tournament of Young Mathematicians',
  },
  {
    title: 'Maths & Maroc Competition',
    description:
      'Our flagship individual competition designed to discover and nurture mathematical talent across Morocco. Through multiple rounds of increasingly challenging problems, participants develop critical thinking skills and mathematical reasoning while competing for recognition and prizes.',
    linkText: 'Explore MMC',
    linkHref: '/',
    imageSrc: '/images/activities/mmc.jpg',
    imageAlt: 'Maths & Maroc Competition',
  },
  {
    title: 'Summer Camp',
    description:
      'An immersive week-long residential experience where talented students explore advanced mathematical concepts beyond the school curriculum. Guided by expert mentors, participants engage in intensive workshops, problem-solving sessions, and recreational activities in a supportive community of peers.',
    linkText: 'Explore Summer Camp',
    linkHref: '/',
    imageSrc: '/images/activities/summer-camp.jpg',
    imageAlt: 'Summer Camp',
  },
];

const testimonials: Testimonial[] = [
  {
    name: 'Yasmine Benali',
    school: 'Mohammed V High School, Casablanca',
    text: 'Thanks to Maths & Maroc, I discovered a passion for mathematics that I never suspected. The activities helped me develop my logic and creativity. I highly recommend this association to all young people who want to explore the fascinating world of mathematics.',
  },
  {
    name: 'Karim Tazi',
    school: 'National School of Computer Science',
    text: 'Participating in the Maths & Maroc summer camp was a transformative experience. The mentorship was exceptional and I was able to meet other passionate students like myself. This experience gave me the confidence to pursue my studies in computer science.',
  },
  {
    name: 'Fatima Zahra El Alaoui',
    school: 'Al Jabr College, Rabat',
    text: "The competitions organized by Maths & Maroc taught me to persevere in the face of challenges. I've made great progress in problem-solving and mathematical reasoning. The instructors are always available to help and encourage us.",
  },
  {
    name: 'Mehdi Ouazzani',
    school: 'Descartes High School, Rabat',
    text: 'Maths & Maroc completely changed my perception of mathematics. What was once a difficult subject has become a daily pleasure. The workshops are interactive and stimulating, and the atmosphere is always supportive and encouraging.',
  },
  {
    name: 'Salma Bennani',
    school: 'Faculty of Sciences, Marrakech',
    text: 'As a first-year undergraduate student, I can say that my participation in Maths & Maroc activities during my high school years gave me a considerable advantage. I acquired a rigor and methodology that serve me today in my higher education.',
  },
  {
    name: 'Omar Benjelloun',
    school: 'Ibn Sina High School, Tangier',
    text: 'The problem-solving techniques I learned through Maths & Maroc competitions have been invaluable. The collaborative environment fostered critical thinking skills that extend beyond mathematics into all areas of my academic life.',
  },
  {
    name: 'Leila Mansouri',
    school: 'Hassan II University, Casablanca',
    text: 'Being part of the Maths & Maroc community opened doors to international opportunities I never thought possible. The rigorous training and supportive network helped me secure a scholarship for my graduate studies abroad.',
  },
  {
    name: 'Youssef El Amrani',
    school: 'Ibn Khaldoun High School, Fez',
    text: 'What sets Maths & Maroc apart is how they make complex mathematical concepts accessible and engaging. Their innovative teaching approaches transformed my relationship with mathematics and inspired me to pursue engineering.',
  },
  {
    name: 'Nadia Chaoui',
    school: 'Al Khawarizmi School, Agadir',
    text: 'The mentorship I received through Maths & Maroc was life-changing. Beyond mathematical knowledge, I gained confidence, perseverance, and problem-solving skills that have been crucial for my success in competitive examinations.',
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
              We collaborate with leading academic institutions, corporations,
              and organizations that share our vision of advancing mathematical
              education in Morocco. Our partners provide essential resources,
              expertise, and opportunities that help us expand our reach and
              deepen our impact across the country.
            </p>
            <div className="flex items-center gap-x-6">
              <Link
                href="#"
                className="flex items-center gap-x-1.5 bg-primary-500 px-5 py-3 font-semibold text-shadow text-white shadow outline-none transition-all hover:bg-primary-600 hover:text-shadow-lg hover:shadow-lg focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              >
                <span>Become a Partner</span>
                <HeartHandIcon className="size-5" />
              </Link>
              <Link
                href="#"
                className="flex items-center gap-x-1.5 font-semibold text-primary-50 outline-none transition-all hover:text-primary-200 focus:text-primary-200 focus-visible:px-1.5 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
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
                  className="group relative block outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                >
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={440}
                    height={80}
                    className="h-20 w-auto object-contain brightness-0 invert transition-all duration-200 group-hover:opacity-50 group-hover:blur-[2px] "
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
      {/* Testimonials Section */}
      <section className="relative flex w-full flex-col items-center pt-16 lg:pt-24">
        <div className="z-20 flex w-full max-w-7xl flex-col items-center gap-y-8 md:gap-y-16">
          <div className="flex flex-col gap-y-5 px-4">
            <h2 className="text-pretty text-center font-semibold text-3xl text-primary-900 tracking-tighter md:text-4xl">
              Don’t take just our word for it
            </h2>
            <p className="text-balance text-center font-bold font-caveat text-2xl text-gray-600 md:text-[28px]">
              Hear first-hand from our incredible participants
            </p>
          </div>
          <div className="mask-b-from-40% flex w-full px-4 pb-16 md:px-8 lg:pb-24">
            <TestimonialsGrid testimonials={testimonials} />
          </div>
        </div>
        {/* overlay */}
        <div className="pointer-events-none absolute inset-0 z-10">
          <div className="h-1/2 bg-transparent" />
          <div className="h-1/2 bg-white" />
        </div>
      </section>
      {/* Contact Section */}
      <section className="flex h-200 w-full flex-col items-center bg-primary-900">
        <div className="flex w-full max-w-7xl">.</div>
      </section>
    </main>
  );
}
