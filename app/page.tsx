import { Activity } from '~/app/_components/activity';
import BounceCardsSection from './_components/bounce-cards-section';
export default function Page() {
  return (
    <main>
      <section className="flex w-full justify-center py-8 md:py-16">
        <div className="flex w-full ">
          <div className="mx-auto flex h-fit w-full max-w-7xl flex-col items-end gap-4 px-4 md:flex-row md:gap-8 md:px-8">
            <h1 className="h-fit w-full max-w-176 text-pretty font-semibold text-4xl text-primary-950 tracking-tighter md:text-5xl">
              Unlocking the scientific potential of Moroccan youth
            </h1>
            <p className="h-fit text-pretty text-gray-600 text-lg md:text-right md:text-xl">
              1st Moroccan non-profit math related educational association
            </p>
          </div>
        </div>
      </section>
      <BounceCardsSection />
      <section className="flex w-full flex-col items-center gap-12 overflow-hidden pt-12 pb-192 md:gap-16 md:pt-24">
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
    </main>
  );
}
