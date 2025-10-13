import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
// Use same AI icon as navbar if available
import BracketsEllipsesIcon from '../../../public/icons/brackets-ellipses.svg';

const GALLERY = [
  '/images/divisions/ai/photo1.jpg',
  '/images/divisions/ai/photo2.jpg',
  '/images/divisions/ai/photo3.jpg',
];

export default function Page() {
  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-6xl">
        {/* Hero */}
        <header className="rounded-xl bg-gradient-to-r from-white via-violet-50 to-white border border-gray-100 p-6 mb-8 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="rounded-full bg-primary-50 p-3 shadow-inner">
                <BracketsEllipsesIcon className="w-8 h-8 text-primary-600" aria-hidden="true" />
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-semibold text-gray-900">Artificial Intelligence</h1>
              <p className="mt-1 text-sm text-gray-500">Conferences · Hackathons · Workshops · Projects</p>

              <p className="mt-3 text-gray-700 max-w-3xl">
                We organize gatherings for researchers, students and professionals to explore responsible AI, prototype ideas during
                hackathons and deliver hands-on skills in workshops. Join us to learn, collaborate and build real projects.
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  href="mailto:ai@mathmaroc.org"
                  className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-white text-sm font-medium hover:bg-primary-700"
                >
                  Propose an event
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

          {/* compact gallery preview */}
          <div className="mt-6 grid grid-flow-col auto-cols-fr gap-3 overflow-x-auto py-2">
            {GALLERY.map((src, i) => (
              <div key={src} className="flex-none w-44 rounded-lg overflow-hidden bg-gray-100 border border-gray-100 shadow-sm">
                <Image
                  src={src}
                  alt={`AI image ${i + 1}`}
                  width={440}
                  height={260}
                  className="object-cover w-full h-28"
                />
                <div className="p-2 text-xs text-gray-600">
                  <div className="font-semibold">Snapshot {i + 1}</div>
                </div>
              </div>
            ))}
          </div>
        </header>

        {/* What we do */}
        <section className="mb-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white p-5 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Conferences</h3>
            <p className="mt-2 text-gray-700 text-sm">
              Short talks and panels to discuss ethical, methodological and applied aspects of AI.
            </p>
          </div>

          <div className="rounded-lg bg-white p-5 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Hackathons</h3>
            <p className="mt-2 text-gray-700 text-sm">
              Intensive events to prototype real solutions: mentoring, data challenges and minimal production demos.
            </p>
          </div>

          <div className="rounded-lg bg-white p-5 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Workshops</h3>
            <p className="mt-2 text-gray-700 text-sm">
              Hands-on workshops (ML, deep learning, MLOps) with guided exercises, notebooks and shared resources.
            </p>
          </div>
        </section>

        {/* Projects & community */}
        <section className="mb-12 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900">Projects & Community</h2>
          <p className="mt-3 text-gray-700">
            Working groups, open-source resources, tutorials and mini-courses. We encourage collaboration between students,
            researchers and companies to turn ideas into working prototypes.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700">#ML</span>
            <span className="rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700">#DeepLearning</span>
            <span className="rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700">#MLOps</span>
            <span className="rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700">#DataForGood</span>
          </div>
        </section>

        {/* Gallery CTA */}
        <section className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {GALLERY.map((src) => (
              <div key={src} className="rounded-lg overflow-hidden bg-gray-100 h-44 flex items-center justify-center border border-gray-100">
                <Image src={src} alt="AI gallery" width={640} height={400} className="object-cover w-full h-full" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}