import Image from 'next/image';
import Link from 'next/link';
import { Activity } from '~/app/_components/activity';
import HeartHandIcon from '../public/icons/heart-hand.svg';
import BounceCardsSection from './_components/bounce-cards-section';

const partners: { name: string; image: string }[] = [
  {
    name: 'Adria',
    image: '/images/partners/adria.png',
  },
  {
    name: 'UM6P',
    image: '/images/partners/um6p.svg',
  },
  {
    name: 'Evasan',
    image: '/images/partners/evasan.png',
  },
  {
    name: 'Royal Air Maroc',
    image: '/images/partners/ram.svg',
  },
];

export default function Page() {
  return (
    <main>
      {/* Hero Section */}
      <section className="flex w-full justify-center py-8 md:py-16">
        <div className="mx-auto flex h-fit w-full max-w-7xl flex-col items-end gap-4 px-4 md:flex-row md:gap-8 md:px-8">
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
      <section className="flex w-full flex-col items-center gap-12 overflow-hidden pt-12 md:gap-16 md:pt-24">
        <div className="flex w-full max-w-7xl flex-col items-center px-8">
          <div className="flex w-full max-w-3xl flex-col items-center gap-5 ">
            <h2 className="text-pretty text-center font-semibold text-3xl text-primary-900 tracking-tighter md:text-4xl">
              What activities can Math & Maroc offer you?
            </h2>
            <p className="text-balance text-center font-bold font-caveat text-2xl text-gray-600 md:text-[28px]">
              Explore some of the various activities we offer for students of
              all levels
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col">
          <Activity
            title="Moroccan Day of Mathematics"
            description="Lorem ipsum dolor sit amet consectetur. Viverra rutrum vestibulum
            pulvinar in scelerisque aenean non tristique. Aliquet nulla mi
            mauris malesuada amet pharetra vel. Imperdiet eu enim sed commodo
            commodo elit vel."
            linkText="Explore MDM"
            linkHref="/"
            imageSrc="/images/activities/mdm.png"
            imageAlt="Moroccan Day of Mathematics"
            hightlight="coming later this year !"
          />
          <Activity
            title="Moroccan Tournament of Young Mathematicians"
            description="Lorem ipsum dolor sit amet consectetur. Viverra rutrum vestibulum pulvinar in scelerisque aenean non tristique. Aliquet nulla mi mauris malesuada amet pharetra vel. Imperdiet eu enim sed commodo commodo elit vel."
            linkText="Explore MTYM"
            linkHref="/"
            imageSrc="/images/activities/mtym.jpg"
            imageAlt="Moroccan Tournament of Young Mathematicians"
          />
          <Activity
            title="Maths & Maroc Competition"
            description="Lorem ipsum dolor sit amet consectetur. Viverra rutrum vestibulum pulvinar in scelerisque aenean non tristique. Aliquet nulla mi mauris malesuada amet pharetra vel. Imperdiet eu enim sed commodo commodo elit vel."
            linkText="Explore MMC"
            linkHref="/"
            imageSrc="/images/activities/mmc.jpg"
            imageAlt="Maths & Maroc Competition"
          />
          <Activity
            title="Summer Camp"
            description="Lorem ipsum dolor sit amet consectetur. Viverra rutrum vestibulum pulvinar in scelerisque aenean non tristique. Aliquet nulla mi mauris malesuada amet pharetra vel. Imperdiet eu enim sed commodo commodo elit vel."
            linkText="Explore Summer Camp"
            linkHref="/"
            imageSrc="/images/activities/summer-camp.jpg"
            imageAlt="Summer Camp"
          />
        </div>
      </section>
      {/* Partners Section */}
      <section className="flex w-full flex-col items-center py-16 lg:py-24">
        <div className="flex w-full max-w-7xl flex-col items-center gap-y-16 bg-primary-900 px-4 py-16 lg:flex-row lg:justify-between lg:gap-x-16 lg:gap-y-0 lg:px-16">
          <div className="flex flex-col gap-y-8 lg:max-w-xl">
            <h3 className="font-semibold text-4xl text-white tracking-tighter md:text-5xl">
              Our Partners
            </h3>
            <p className="text-pretty text-lg text-primary-100 lg:text-xl">
              Lorem ipsum dolor sit amet consectetur. Viverra rutrum vestibulum
              pulvinar in scelerisque aenean non tristique. Aliquet nulla mi
              mauris malesuada amet pharetra vel. Imperdiet eu enim sed commodo
              commodo elit vel.
            </p>
            <div className="flex items-center gap-x-6 ">
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
                <HeartHandIcon className="size-5" />
              </Link>
            </div>
          </div>
          <div className="grid min-w-fit grid-cols-2 gap-x-8 gap-y-4 md:gap-y-8 xl:gap-x-12 xl:gap-y-16">
            {partners.map((partner) => (
              <Image
                key={partner.name}
                src={partner.image}
                alt={partner.name}
                width={440}
                height={96}
                className="h-24 w-full object-contain opacity-90 brightness-0 invert transition-opacity hover:opacity-100 lg:h-20"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
