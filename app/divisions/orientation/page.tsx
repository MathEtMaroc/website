import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// use same icon as navbar
import FlagIcon from '../../../public/icons/flag.svg';

const PLAYLISTS = {
  lycée: 'PLG573uUBOvv6aOaWyugOGkC-vstVlW_R-',
  prepa: 'PLG573uUBOvv63lygRlj1e5R-VLsDYPMkF',
  jobs: 'PLG573uUBOvv4zybEEZe-DY_gBkeYW5FYO',
};

function shuffle<T>(arr: T[]) {
  return arr.slice().sort(() => Math.random() - 0.5);
}

export default function Page() {
  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-6xl">
        {/* Hero */}
        <header className="rounded-xl bg-gradient-to-r from-white via-amber-50 to-white border border-gray-100 p-6 mb-8 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="rounded-full bg-primary-50 p-3">
                <FlagIcon className="w-8 h-8 text-primary-600" aria-hidden="true" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">Orientation</h1>
              <p className="mt-1 text-sm text-gray-500">Guidance for studies, careers, and what comes next — videos, podcasts, and interviews.</p>
              <p className="mt-3 text-gray-700 max-w-3xl">
                Through videos, podcasts, and interviews, Math&Maroc Orientation division helps young Moroccans make informed decisions about
                their studies, careers, and future. We mix short and long formats, concrete testimonials, and curated playlists to explore
                pathways, compare options, and prepare for the next steps.
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href="mailto:orientation@mathmaroc.org"
                  className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-white text-sm font-medium hover:bg-primary-700"
                >
                  Contact Orientation
                </a>
                <Link href="/divisions" className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  ← Back to divisions
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Latest orientation video (two featured playlists) */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Latest picks — Featured playlists</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Playlist 1: High School */}
            <div className="rounded-lg overflow-hidden border border-gray-100 bg-white shadow-sm">
              <div className="w-full">
                <div className="px-4 pt-4">
                  <div className="relative pb-[56.25%]">{/* 16:9 aspect ratio */}
                    <iframe
                      className="absolute inset-0 w-full h-full rounded-md"
                      src={`https://www.youtube.com/embed/videoseries?list=${PLAYLISTS.lycée}`}
                      title="Featured playlist - High School"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">Featured: Orientation — High School</h3>
                <p className="mt-2 text-gray-700 text-sm">
                  A curated selection of videos to help high school students understand their options, discover study tracks, and prepare
                  for post-secondary choices with confidence.
                </p>
                <div className="mt-4">
                  <a href={`https://www.youtube.com/playlist?list=${PLAYLISTS.lycée}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700">
                    Open playlist
                  </a>
                </div>
              </div>
            </div>

            {/* Playlist 2: Prep Classes */}
            <div className="rounded-lg overflow-hidden border border-gray-100 bg-white shadow-sm">
              <div className="w-full">
                <div className="px-4 pt-4">
                  <div className="relative pb-[56.25%]">{/* 16:9 aspect ratio */}
                    <iframe
                      className="absolute inset-0 w-full h-full rounded-md"
                      src={`https://www.youtube.com/embed/videoseries?list=${PLAYLISTS.prepa}`}
                      title="Featured playlist - Prep Classes"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">Featured: Orientation — Prep Classes</h3>
                <p className="mt-2 text-gray-700 text-sm">
                  Mentors and tips to navigate preparatory classes: how to choose centers, prepare for exams and stay motivated.
                </p>
                <div className="mt-4">
                  <a href={`https://www.youtube.com/playlist?list=${PLAYLISTS.prepa}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700">
                    Open playlist
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three orientation sections */}
        <section className="space-y-8 mb-12">
          {/* Lycée */}
          <article className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="rounded-md bg-primary-50 p-3">
                <FlagIcon className="w-6 h-6 text-primary-700" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">High School Orientation</h3>
                <p className="mt-2 text-gray-700">
                  In high school, options can be abundant and sometimes confusing. We offer a selection of videos to help students make
                  informed choices, discover alternative pathways, and envision different study tracks.
                </p>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  {['/images/divisions/orientation/lycee1.png','/images/divisions/orientation/lycee2.png','/images/divisions/orientation/lycee3.png'].map((s) => (
                    <div key={s} className="rounded-lg overflow-hidden bg-gray-100">
                      <Image src={s} alt="high school" width={560} height={480} className="object-cover w-full h-45" />
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={`https://www.youtube.com/playlist?list=${PLAYLISTS.lycée}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700"
                  >
                    View High School playlist
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Prépa */}
          <article className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="rounded-md bg-primary-50 p-3">
                <FlagIcon className="w-6 h-6 text-primary-700" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">Prep Classes Orientation</h3>
                <p className="mt-2 text-gray-700">
                  Preparatory classes can be hard to navigate alone. Experienced mentors answer questions, advise on choosing centers,
                  preparing for oral exams, and share tips to stay motivated throughout the journey.
                </p>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  {['/images/divisions/orientation/prepa1.png','/images/divisions/orientation/prepa2.png','/images/divisions/orientation/prepa3.png'].map((s) => (
                    <div key={s} className="rounded-lg overflow-hidden bg-gray-100">
                      <Image src={s} alt="prep class" width={560} height={480} className="object-cover w-full h-45" />
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={`https://www.youtube.com/playlist?list=${PLAYLISTS.prepa}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700"
                  >
                    View Prep Classes playlist
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Jobs */}
          <article className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="rounded-md bg-primary-50 p-3">
                <FlagIcon className="w-6 h-6 text-primary-700" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">Career Orientation</h3>
                <p className="mt-2 text-gray-700">
                  Choosing a career means finding what aligns with your interests, values, and skills. Our podcasts and testimonials
                  showcase day-to-day work, possible career paths, and offer practical advice.
                </p>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  {['/images/divisions/orientation/jobs1.png','/images/divisions/orientation/jobs2.png','/images/divisions/orientation/jobs3.jpg'].map((s) => (
                    <div key={s} className="rounded-lg overflow-hidden bg-gray-100">
                      <Image src={s} alt="careers" width={560} height={480} className="object-cover w-full h-45" />
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={`https://www.youtube.com/playlist?list=${PLAYLISTS.jobs}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700"
                  >
                    View Careers playlist
                  </a>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}