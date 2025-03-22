export default function Page() {
  return (
    <main>
      <section className="flex h-screen w-full justify-center py-8 md:py-24">
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
    </main>
  );
}
