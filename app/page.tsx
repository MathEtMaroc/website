import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import type { JSX } from 'react';
import type { Activity } from '~/app/_components/activity';
import AnimatedStat from '~/app/_components/animated-stat';
import MagnetLines from '~/app/_components/magnetic-lines';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/app/_components/motion-primitives/accordion';
import ScrollToTopLink from '~/app/_components/scroll-to-top-link';
import StackingActivitiesSection from '~/app/_components/stacking-activities-section';
import TestimonialsGrid, {
  type Testimonial,
} from '~/app/_components/testimonials-grid';
import ArrowRightIcon from '../public/icons/arrow-right.svg';
import AtSignIcon from '../public/icons/at-sign.svg';
import DownloadCloudIcon from '../public/icons/download-cloud.svg';
import FacebookIcon from '../public/icons/facebook.svg';
import HeartHandIcon from '../public/icons/heart-hand.svg';
import InstagramIcon from '../public/icons/instagram.svg';
import LinkedInIcon from '../public/icons/linkedin.svg';
import PhoneIcon from '../public/icons/phone.svg';
import PlusCircleIcon from '../public/icons/plus-circle.svg';
import YouTubeIcon from '../public/icons/youtube.svg';
import SmileyFace from '../public/smiley-face.png';
import BounceCardsSection from './_components/bounce-cards-section';

// Define metadata for this page
export const metadata: Metadata = {
  title: 'Math & Maroc | Home',
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

const faq: { question: string; answer: string }[] = [
  {
    question: 'What is Math & Maroc?',
    answer:
      'Math & Maroc is a non-profit organization that aims to promote mathematical education and research in Morocco.',
  },
  {
    question: 'How can my child participate in Math & Maroc activities?',
    answer:
      'Students can join our activities by registering through our website. We offer programs for different age groups and skill levels throughout the academic year and during summer breaks.',
  },
  {
    question: 'Do you offer scholarships or financial aid?',
    answer:
      'Yes, we provide scholarships and financial assistance to talented students with limited resources. Applications are reviewed on a case-by-case basis, and we strive to make our programs accessible to all motivated students.',
  },
  {
    question: 'What qualifications do your instructors have?',
    answer:
      'Our instructors include university professors, research mathematicians, and experienced teachers with strong backgrounds in mathematics education. Many have advanced degrees and experience in competitive mathematics.',
  },
  {
    question:
      'Can Math & Maroc help prepare students for international competitions?',
    answer:
      'Absolutely! We offer specialized training programs for various international mathematics competitions, including the International Mathematical Olympiad (IMO). Our curriculum is designed to develop problem-solving skills at the highest levels.',
  },
  {
    question: 'How can I support Math & Maroc as a volunteer or donor?',
    answer:
      'We welcome support in many forms. You can volunteer as a mentor, instructor, or event organizer. Financial contributions help us expand our programs and provide scholarships. Please contact us through our website for more information on how to get involved.',
  },
];

type FooterLink = {
  name: string;
  href: string;
  trailingIcon?: JSX.Element;
};

const socials: { name: string; href: string; icon: JSX.Element }[] = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/mathemaroc/',
    icon: <LinkedInIcon />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/mathmaroc/',
    icon: <InstagramIcon />,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@mathmaroc1396',
    icon: <YouTubeIcon />,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/MathsMaroc2',
    icon: <FacebookIcon />,
  },
];

const footer: { name: string; links: FooterLink[] }[] = [
  {
    name: 'Actions',
    links: [
      { name: 'MMC', href: '#' },
      { name: 'MTYM', href: '#' },
      { name: 'AI Hackathon', href: '#' },
      { name: 'MDM', href: '#' },
      { name: 'Summer Camp', href: '#' },
    ],
  },
  {
    name: 'Divisions',
    links: [
      { name: 'Olympiads', href: '#' },
      { name: 'Orientation', href: '#' },
      { name: 'Conferences', href: '#' },
      { name: 'Prepa', href: '#' },
    ],
  },
  {
    name: 'How we are',
    links: [
      { name: 'Team', href: '#' },
      { name: 'Partners', href: '#' },
      {
        name: 'Media kit',
        href: '#',
        trailingIcon: <DownloadCloudIcon className="size-5" />,
      },
    ],
  },
  {
    name: 'Social',
    links: socials.map((social) => ({
      name: social.name,
      href: social.href,
    })),
  },
];

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex w-full justify-center py-8 md:py-16">
        <div className="mx-auto flex h-fit w-full max-w-7xl flex-col items-end gap-4 px-6 sm:px-8 md:flex-row md:gap-8">
          <h1 className="h-fit w-full max-w-176 text-pretty font-semibold text-4xl text-primary-950 tracking-tighter md:text-5xl">
            Unlocking the scientific potential of Moroccan youth
          </h1>
          <p className="h-fit text-pretty text-gray-600 text-lg md:text-right md:text-xl">
            1st Moroccan non-profit math related educational association
          </p>
        </div>
      </section>
      {/* Bounce Cards Section */}
      <BounceCardsSection />
      {/* Activities Section */}
      <StackingActivitiesSection
        title="What activities can Math & Maroc offer you?"
        subtitle="Explore some of the various activities we offer for students of all levels"
        activities={activities}
      />
      {/* Partners Section */}
      <section className="flex w-full justify-center pt-16 lg:pt-24">
        <div className="flex w-full max-w-7xl flex-col items-center gap-y-16 bg-primary-900 px-6 py-16 sm:px-8 md:px-12 lg:flex-row lg:justify-between lg:gap-x-16 lg:gap-y-0 lg:px-8">
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
                href="#contact"
                className="flex items-center gap-x-1.5 font-semibold text-primary-50 outline-none transition-all hover:text-primary-200 focus:text-primary-200 focus-visible:px-1.5 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              >
                <span>Contact us</span>
                <ArrowRightIcon className="size-5" />
              </Link>
            </div>
          </div>
          <ul className="grid min-w-fit grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-4 md:gap-x-8 md:gap-y-0 lg:grid-cols-2 lg:gap-10 lg:gap-x-8 xl:gap-x-12 xl:gap-y-16">
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
      </section>
      {/* Stats Section */}
      <section className="flex w-full flex-col items-center pt-16 lg:pt-24">
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
      </section>
      {/* Testimonials Section */}
      <section className="relative flex w-full flex-col items-center pt-16 lg:pt-24">
        <div className="z-[5] flex w-full max-w-7xl flex-col items-center gap-y-8 md:gap-y-16">
          <header className="flex flex-col gap-y-5 px-4">
            <h2 className="text-pretty text-center font-semibold text-3xl text-primary-900 tracking-tighter md:text-4xl">
              Don't take just our word for it
            </h2>
            <p className="text-balance text-center font-bold font-caveat text-2xl text-gray-600 md:text-[28px]">
              Hear first-hand from our incredible participants
            </p>
          </header>
          <div className="sm:mask-b-from-40% flex w-full px-4 pb-16 md:px-8 lg:pb-24">
            <TestimonialsGrid testimonials={testimonials} />
          </div>
        </div>
        {/* overlay */}
        <div className="pointer-events-none absolute inset-0 z-[4]">
          <div className="h-1/2 bg-transparent" />
          <div className="h-1/2 bg-white" />
        </div>
      </section>
      {/* Contact Section */}
      <section
        className="flex w-full flex-col items-center bg-white"
        id="contact"
      >
        <div className="relative flex w-full max-w-360 flex-col items-center gap-y-12 bg-primary-900 pt-16 sm:py-16 md:gap-y-16 md:py-24">
          <header className="flex w-full max-w-7xl flex-col items-start gap-y-4 px-4 md:gap-y-8 md:px-8">
            <div className="flex flex-col gap-y-3 md:gap-y-8">
              <p className="font-semibold text-primary-100 text-sm md:text-base">
                Contact us
              </p>
              <h2 className="flex gap-x-3 font-semibold text-3xl text-white tracking-tighter md:text-4xl">
                <span>Chat to our</span>
                <Image
                  src={SmileyFace}
                  alt="Smiley Face"
                  width={75}
                  height={39}
                  quality={100}
                />
                <span>team</span>
              </h2>
            </div>
            <p className="text-balance text-lg text-primary-50 md:text-xl">
              We'd love to hear from you. Please fill out this form or shoot us
              an email.
            </p>
          </header>
          <div className="flex w-full max-w-7xl flex-col items-center gap-y-12 lg:flex-row lg:items-baseline lg:justify-between xl:gap-x-16">
            <div className="grid grid-cols-1 gap-y-10 pl-4 max-sm:w-full md:grid-cols-2 md:gap-8 md:pl-8">
              <article className="flex flex-col gap-y-3 md:gap-y-4">
                <AtSignIcon className="size-6 text-primary-50" />
                <h3 className="font-semibold text-lg text-white md:text-xl">
                  Email
                </h3>
                <p className="text-balance text-primary-100">
                  Our friendly team is here to help.
                </p>
                <Link
                  href="mailto:mathemaroc.officiel@gmail.com"
                  className="w-fit border-transparent border-b font-krypton font-semibold text-white transition-colors duration-300 hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-100 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
                >
                  mathemaroc.officiel@gmail.com
                </Link>
              </article>
              <article className="flex flex-col gap-y-3 md:gap-y-4">
                <PhoneIcon className="size-6 text-primary-50" />
                <h3 className="font-semibold text-lg text-white md:text-xl">
                  Phone
                </h3>
                <p className="text-balance text-primary-100">
                  Mon-Fri from 8am to 5pm.
                </p>
                <Link
                  href="tel:+216612345678"
                  className="w-fit border-transparent border-b font-krypton font-semibold text-white transition-colors duration-300 hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-100 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
                >
                  +216 6 12 34 56 78
                </Link>
              </article>
            </div>
            <div className="w-full max-w-xl bg-white px-4 py-8 focus-within:drop-shadow-xl md:px-8 md:py-10">
              <form
                action=""
                className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 md:gap-y-6"
              >
                <div className="flex flex-col gap-y-2">
                  <label
                    htmlFor="firstName"
                    className="font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="border border-gray-950/20 p-3 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                    required
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <label
                    htmlFor="lastName"
                    className="font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="border border-gray-950/20 p-3 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                    required
                  />
                </div>
                <div className="flex flex-col gap-y-2 md:col-span-2">
                  <label htmlFor="email" className="font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="border border-gray-950/20 p-3 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                    required
                  />
                </div>
                <div className="flex flex-col gap-y-2 md:col-span-2">
                  <label
                    htmlFor="message"
                    className="font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="border border-gray-950/20 p-3 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                    required
                  />
                </div>
                <div className="flex items-end justify-end md:col-span-2">
                  <button
                    type="submit"
                    className="flex items-center gap-x-2 bg-primary-800 px-6 py-3 font-semibold text-shadow text-white shadow transition-all hover:bg-primary-900 hover:text-shadow-lg hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    <span>Send Message</span>
                    <ArrowRightIcon className="size-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* MagnetLines Component (hidden on mobile) */}
          <div className="absolute bottom-0 left-0 hidden opacity-40 transition-opacity duration-300 hover:opacity-70 lg:block">
            <MagnetLines
              rows={8}
              columns={8}
              containerSize="36vmin"
              lineWidth="0.4vmin"
              lineHeight="4vmin"
              lineColor="#a3b2fe"
              baseAngle={-45}
            />
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="relative flex w-full flex-col items-center bg-white py-16 lg:py-24">
        <div className="z-[5] flex w-full max-w-7xl flex-col items-center gap-y-8 md:gap-y-16">
          <header className="flex flex-col gap-y-5 px-4">
            <h2 className="text-pretty text-center font-semibold text-3xl text-primary-900 tracking-tighter md:text-4xl">
              Frequently asked questions
            </h2>
            <p className="text-balance text-center font-bold font-caveat text-2xl text-gray-600 md:text-[28px]">
              Everything you need to know about Math & Maroc.
            </p>
          </header>
          <div className="flex w-full justify-center px-4 md:px-8">
            <Accordion
              className="flex w-full max-w-3xl flex-col gap-y-4"
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              {faq.map((item) => (
                <AccordionItem
                  key={item.question}
                  value={item.question}
                  className="flex w-full flex-col gap-y-2 rounded-lg bg-white py-5 data-[expanded]:bg-gray-50 md:gap-y-4 md:py-8"
                >
                  <AccordionTrigger className="group flex w-full flex-row items-center gap-x-2 rounded-md px-5 focus-visible:outline-none md:flex-row-reverse md:gap-x-6 md:px-8">
                    <div className="flex w-full items-center justify-between">
                      <h3 className="text-pretty text-left font-medium text-gray-900 text-lg group-focus-visible:outline-none group-focus-visible:ring-2 group-focus-visible:ring-primary-800 group-focus-visible:ring-offset-2 md:text-xl">
                        {item.question}
                      </h3>
                    </div>
                    <PlusCircleIcon className="size-6 flex-none text-gray-400 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-focus-visible:text-primary-500 group-data-[expanded]:rotate-45 group-data-[expanded]:text-primary-500" />
                  </AccordionTrigger>
                  <AccordionContent className="overflow-hidden pr-6 pl-5 text-gray-600 md:pr-5 md:pl-20 md:text-lg">
                    <p className="pt-2">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="relative z-[20] flex w-full justify-center bg-primary-900 py-12 md:pt-8">
        <div className="flex w-full max-w-7xl flex-col gap-y-12 px-4 md:px-8">
          <div className="flex w-full flex-col gap-y-12 md:flex-row md:gap-x-16">
            <div className="flex flex-col items-start gap-y-8 md:max-w-80">
              <Image
                alt="Math Maroc Logo"
                src="/logo-white.png"
                width={136}
                height={48}
                priority
                className="h-12 w-auto"
              />
              <div className="flex flex-col gap-y-4">
                <p className="text-pretty text-primary-50 md:text-lg">
                  Empowering the next generation of Moroccan mathematicians
                </p>
                <ScrollToTopLink />
              </div>
            </div>
            <nav className="grid w-full grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
              {footer.map((category) => (
                <div key={category.name} className="flex flex-col gap-y-4">
                  <h3 className="font-semibold text-primary-200 text-sm">
                    {category.name}
                  </h3>
                  <ul className="flex flex-col gap-y-3">
                    {category.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          {...(link.href.startsWith('http')
                            ? {
                                target: '_blank',
                                rel: 'noopener noreferrer',
                              }
                            : {})}
                          className="flex items-center gap-x-2 font-semibold text-primary-100 transition-colors hover:text-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-100 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
                        >
                          {link.name}
                          {link.trailingIcon}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
          <div className="flex w-full flex-col gap-y-8 border-primary-200 border-t pt-8 md:flex-row-reverse md:justify-between">
            <nav className="flex flex-row items-center justify-center gap-x-6">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  {...(social.href.startsWith('http')
                    ? {
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      }
                    : {})}
                  className="text-primary-200 transition-colors hover:text-primary-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-100 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </nav>
            <p className="text-balance text-center text-primary-200">
              &copy; 2016 — 2025 Math & Maroc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
