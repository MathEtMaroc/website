import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CalendarIcon from '../../../public/icons/calendar.svg';

const GALLERY = [
  '/images/divisions/communications/photo1.jpg',
  '/images/divisions/communications/photo2.jpg',
  '/images/divisions/communications/photo3.jpg',
];

export default function Page() {
  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-5xl">
        <header className="rounded-xl bg-gradient-to-r from-white via-amber-50 to-white border border-gray-100 p-6 mb-8 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="rounded-full bg-primary-50 p-3">
                <CalendarIcon className="w-8 h-8 text-primary-600" aria-hidden="true" />
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-semibold text-gray-900">Communications</h1>
              <p className="mt-1 text-sm text-gray-500">PR · Media · Social · Design · Partnerships</p>

              <p className="mt-3 text-gray-700 max-w-3xl">
                The Communications team amplifies Math&Maroc's work: press relations, social campaigns, visual identity and collaborations
                with partners and media. We craft stories, build engagement and make our projects visible to students, institutions and
                sponsors.
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  href="mailto:communications@mathmaroc.org"
                  className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-white text-sm font-medium hover:bg-primary-700"
                >
                  Contact Communications
                </a>
                <Link
                  href="/divisions"
                  className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  ← Back to divisions
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-flow-col auto-cols-fr gap-3 overflow-x-auto py-2">
            {GALLERY.map((src, i) => (
              <div key={src} className="flex-none w-44 rounded-lg overflow-hidden bg-gray-100 border border-gray-100 shadow-sm">
                <Image src={src} alt={`Communications ${i + 1}`} width={440} height={260} className="object-cover w-full h-28" />
                <div className="p-2 text-xs text-gray-600">
                  <div className="font-semibold">Snapshot {i + 1}</div>
                </div>
              </div>
            ))}
          </div>
        </header>

        <section className="mb-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white p-5 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Press & Media</h3>
            <p className="mt-2 text-gray-700 text-sm">
              Press releases, media kits and spokespeople to help journalists and partners cover our activities accurately.
            </p>
          </div>

          <div className="rounded-lg bg-white p-5 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Social & Outreach</h3>
            <p className="mt-2 text-gray-700 text-sm">
              Campaigns, short videos and community posts to reach students across Morocco and showcase opportunities and events.
            </p>
          </div>

          <div className="rounded-lg bg-white p-5 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Design & Assets</h3>
            <p className="mt-2 text-gray-700 text-sm">
              Visual identity, templates and assets (logos, posters, slide decks) available for chapters and partners.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}