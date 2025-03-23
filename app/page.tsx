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
      <section className="flex w-full flex-col items-center gap-12 pt-12 pb-192 md:gap-16 md:pt-24">
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
      </section>
    </main>
  );
}
