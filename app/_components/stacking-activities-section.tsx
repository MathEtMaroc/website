'use client';

import { Activity } from './activity';
import type { ReactNode } from 'react';

interface ActivityData {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  imageSrc: string;
  imageAlt: string;
  highlight?: string;
}

interface SectionProps {
  title: string;
  subtitle: string;
  activities: ActivityData[];
  children?: ReactNode;
}

export default function ActivitiesSection({ title, subtitle, activities, children }: SectionProps) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-3xl text-center mb-12 px-6">
        <h2 className="font-semibold text-3xl md:text-4xl text-primary-900 tracking-tight">{title}</h2>
        <p className="font-caveat text-2xl md:text-[28px] text-gray-600">{subtitle}</p>
        {children}
      </div>

      <div className="w-full flex flex-col">
        {activities.map((activity, i) => (
          <div key={i} className="w-full">
            <Activity {...activity} isEven={i % 2 === 1} simpleLayout={false} />
          </div>
        ))}
      </div>
    </section>
  );
}