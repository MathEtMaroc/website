'use client';

import Image from 'next/image';
import Link from 'next/link';
import ChevronRightIcon from '../../public/icons/chevron-right.svg';
import HandDrawnArrow from '../../public/icons/hand-drawn-arrow.svg';

interface ActivityProps {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  imageSrc: string;
  imageAlt: string;
  hightlight?: string;
}

export const Activity = ({
  title,
  description,
  linkText,
  linkHref,
  imageSrc,
  imageAlt,
  hightlight,
}: ActivityProps) => {
  return (
    <div className="group mx-auto flex w-full max-w-7xl flex-col bg-primary-900 even:bg-transparent lg:flex-row even:lg:flex-row-reverse">
      <div className="flex max-w-180 gap-y-10 px-6 py-12 sm:px-8 md:px-12 md:py-16 lg:py-24 lg:pl-24 even:lg:pr-24 even:lg:pl-12">
        <div className="isolate flex max-w-xl flex-col gap-y-6 md:gap-y-8 lg:gap-y-12">
          <h3 className="z-10 font-semibold text-3xl text-white tracking-tight group-even:text-primary-900 sm:text-4xl md:relative md:text-5xl">
            {title}
            {hightlight && (
              <div className="lg:-right-1/3 xl:-right-1/4 -right-1/4 absolute bottom-0 z-0 hidden flex-row gap-x-3 md:flex lg:scale-80 lg:gap-x-2 xl:top-auto xl:bottom-0 xl:scale-100 xl:gap-x-3">
                <HandDrawnArrow className="text-primary-200 group-even:text-primary-700" />
                <div className="z-20 w-36 animate-pulse font-caveat text-4xl text-primary-200 group-even:text-primary-700">
                  {hightlight}
                </div>
              </div>
            )}
          </h3>
          <p className="text-base text-primary-100 group-even:text-gray-600 sm:text-lg md:text-xl">
            {description}
          </p>
          <Link
            href={linkHref}
            className="group/link inline-flex w-fit items-center gap-1 rounded-md font-semibold text-base text-primary-50 outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-800 group-even:text-primary-800 group-even:hover:text-primary-900 sm:text-lg"
          >
            {linkText}
            <ChevronRightIcon className="h-5 w-5 transition-transform group-hover/link:translate-x-1 sm:h-6 sm:w-6" />
          </Link>
        </div>
      </div>
      <div className="relative h-64 w-full sm:h-80 md:h-100 lg:h-auto lg:min-h-full lg:w-180 lg:[clip-path:polygon(20%_0,100%_0,100%_100%,0%_100%)] group-even:lg:[clip-path:polygon(0%_0,90%_0,100%_100%,0%_100%)]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45rem"
          className="object-cover object-center"
        />
      </div>
    </div>
  );
};
