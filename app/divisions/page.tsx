import Link from 'next/link';
import React from 'react';

export default function Page() {
  const divisions = [
    {
      slug: 'conferences',
      title: 'Conferences',
      desc: 'Talks and seminars connecting students with researchers and practitioners — events, invited lectures, and outreach.',
    },
    {
      slug: 'olympiads',
      title: 'Mathematical Olympiad — Olympiads',
      desc: "Training the best Moroccan high school students for IMO, PAMO, and international competitions. Identification, coaching, and mentoring by former medalists.",
    },
    {
      slug: 'orientation',
      title: 'Orientation',
      desc: "Guidance for studies and careers — videos, podcasts, and playlists to help students choose study tracks and prepare for next steps.",
    },
    {
      slug: 'physics-olympiads',
      title: 'Physics Olympiads',
      desc: 'Physics Olympiads activities, training, and selection.',
    },
    {
      slug: 'prepa',
      title: 'Prep Division',
      desc: 'Supporting talented students in preparatory classes towards excellence — video capsules, mock orals, TIPE, and mentoring.',
    },
  ];

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">Our divisions</h1>
          <p className="mt-2 text-gray-600 max-w-2xl">
            Math & Maroc runs several thematic divisions that organize training, events and resources. Choose a division to learn more
            about its activities, upcoming sessions and how to get involved.
          </p>
        </header>

        <section>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {divisions.map((d) => (
              <article key={d.slug} className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">{d.title}</h3>
                <p className="mt-3 text-gray-700 text-sm">{d.desc}</p>

                <div className="mt-4">
                  <Link
                    href={`/divisions/${d.slug}`}
                    className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Learn more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
