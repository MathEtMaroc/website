import Image from 'next/image';
import Link from 'next/link';
import AnimatedStat from '~/app/_components/animated-stat';
import StackingActivitiesSection from '~/app/_components/stacking-activities-section';
import PartnersCarousel from '~/app/_components/partners-carousel';
import type { PartnerWithDescription } from '~/app/_data/partners-descriptions';
import { companyPartners, academicPartners } from '~/app/_data/partners-descriptions';
import { activities } from '~/app/_data/activities';
import { stats } from '~/app/_data/stats';
import HeartHandIcon from '../public/icons/heart-hand.svg';
import ArrowLeftIcon from '../public/icons/arrow-left.svg';
import BounceCardsSection from './_components/bounce-cards-section';

const allPartners: PartnerWithDescription[] = [...companyPartners, ...academicPartners];

export default function Page() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="flex w-full justify-center py-8 md:py-16">
        <div className="mx-auto flex h-fit w-full max-w-7xl flex-col items-end gap-4 px-6 sm:px-8 md:flex-row md:gap-8">
          <h1 className="h-fit w-full max-w-176 text-pretty font-semibold text-4xl text-primary-950 tracking-tighter md:text-5xl">
            Unlocking the scientific potential of Moroccan youth
          </h1>
          <p className="h-fit text-pretty text-gray-600 text-lg md:text-right md:text-xl">
            One of the leading NGOs promoting mathematics and science in Morocco
          </p>
        </div>
      </section>
      {/* Bounce Cards Section */}
      <BounceCardsSection />
      {/* Activities Section */}
      <StackingActivitiesSection
        title="What activities can Math & Maroc offer you?"
        subtitle="Explore some of the various activities we offer for students of all levels for free"
        activities={activities}
      >
        <p className="text-s text-gray-500 font-caveat italic text-center">
          Follow us on social media to stay updated
        </p>
      </StackingActivitiesSection>
      {/* Partners Section */}
      <section className="flex w-full justify-center pt-16 lg:pt-24">
        <div className="flex w-full max-w-7xl flex-col items-center gap-y-12 bg-primary-900 px-6 py-16 sm:px-8 md:px-12 lg:gap-y-16 lg:px-8 text-center">
          <div className="flex w-full flex-col gap-y-8 lg:gap-y-6 items-center">
            <h2 className="font-semibold text-4xl text-white tracking-tighter md:text-5xl">
              Our Partners
            </h2>
            <p className="text-pretty text-lg text-primary-100 lg:text-xl lg:max-w-2xl mx-auto">
              We collaborate with leading academic institutions, corporations,
              and organizations that share our vision of advancing mathematical
              education in Morocco. Our partners provide essential resources,
              expertise, and opportunities that help us expand our reach and
              deepen our impact across the country.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-x-6">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-x-1.5 bg-primary-500 px-5 py-3 font-semibold text-shadow text-white shadow outline-none transition-all hover:bg-primary-600 hover:text-shadow-lg hover:shadow-lg focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              >
                <span>Become a Partner</span>
                <HeartHandIcon className="size-5" />
              </Link>
              <Link
                href="/partners"
                className="flex items-center justify-center gap-x-1.5 border-2 border-primary-300 px-5 py-3 font-semibold text-primary-50 rounded-md outline-none transition-all hover:bg-primary-800 hover:border-primary-400 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
              >
                <span>View All Partners</span>
                <ArrowLeftIcon className="size-5 rotate-180" />
              </Link>
            </div>
          </div>
          <div className="w-full">
            <PartnersCarousel partners={allPartners} />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="flex w-full flex-col items-center py-16">
        <div className="flex w-full max-w-7xl flex-col items-start gap-y-12 px-4 md:px-8 lg:flex-row-reverse lg:items-center lg:gap-x-16">
          <div className="flex w-full flex-col items-start gap-y-8 md:gap-y-16">
            <div className="flex flex-col gap-y-4 md:gap-y-5">
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
      {/* <section className="relative flex w-full flex-col items-center pt-16 lg:pt-24">
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
        {/*
        <div className="pointer-events-none absolute inset-0 z-[4]">
          <div className="h-1/2 bg-transparent" />
          <div className="h-1/2 bg-white" />
        </div>
      </section> */}
      {/* FAQ Section */}
      {/* <section className="relative flex w-full flex-col items-center bg-white py-16 lg:py-24">
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
      </section> */}
    </div>
  );
}
