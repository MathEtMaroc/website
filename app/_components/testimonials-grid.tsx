'use client';

import Image from 'next/image';
import useMasonry from '~/app/utils/use-masonry';

export type Testimonial = {
  name: string;
  school?: string;
  image?: string;
  text: string;
};

export default function TestimonialsGrid({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const masonryContainer = useMasonry();

  return (
    <div
      ref={masonryContainer}
      className="grid items-start gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8"
    >
      {testimonials.map((testimonial) => (
        <div
          className="flex flex-col gap-y-12 border border-gray-200 bg-white p-8 shadow-gray-200 shadow-xs"
          key={testimonial.name}
        >
          <p className="text-gray-600">{testimonial.text}</p>
          <div className="flex gap-x-3">
            {testimonial.image && (
              <div className="size-12 overflow-hidden rounded-full border-2 border-primary-100">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <div className="flex flex-col gap-y-1">
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              {testimonial.school && (
                <p className="text-gray-600">{testimonial.school}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
