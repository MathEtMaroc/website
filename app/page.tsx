import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedStat from '~/app/_components/animated-stat';
import MagnetLines from '~/app/_components/magnetic-lines';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/app/_components/motion-primitives/accordion';
import StackingActivitiesSection from '~/app/_components/stacking-activities-section';
import TestimonialsGrid from '~/app/_components/testimonials-grid';
import { activities } from '~/app/_data/activities';
import { faq } from '~/app/_data/faq';
import { partners } from '~/app/_data/partners';
import { stats } from '~/app/_data/stats';
import { testimonials } from '~/app/_data/testimonials';
import ArrowRightIcon from '../public/icons/arrow-right.svg';
import AtSignIcon from '../public/icons/at-sign.svg';
import HeartHandIcon from '../public/icons/heart-hand.svg';
import PhoneIcon from '../public/icons/phone.svg';
import PlusCircleIcon from '../public/icons/plus-circle.svg';
import SmileyFace from '../public/smiley-face.png';
import BounceCardsSection from './_components/bounce-cards-section';

export const metadata: Metadata = {
  title: 'Math & Maroc | Home',
};

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
    </>
  );
}
