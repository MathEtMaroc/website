import Link from 'next/link';
import React from 'react';
// Use the same BuildingIcon SVG component as the navbar
import BuildingIcon from '../../../public/icons/building.svg';

export default function Page() {
  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-4xl">
        {/* Hero */}
        <header className="rounded-xl bg-gradient-to-r from-white via-blue-50 to-white border border-gray-100 p-6 mb-8 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="rounded-full bg-primary-50 p-3 shadow-inner">
                {/* Replaced + icon with BuildingIcon */}
                <BuildingIcon className="w-8 h-8 text-primary-600" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">Prep Division</h1>
              <p className="mt-1 text-sm text-gray-500">Published August 14, 2025 · Math & Maroc</p>
              <p className="mt-3 text-gray-700">
                Supporting talented students in preparatory classes towards excellence — video capsules, mock orals, TIPE, and mentoring.
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-white text-sm font-medium hover:bg-primary-700"
                  href="mailto:contact@mathmaroc.org"
                >
                  Contact us
                </a>
                <Link href="/divisions" className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  ← Back to divisions
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Feature highlights */}
        <section className="grid gap-4 sm:grid-cols-2 mb-8">
          <div className="rounded-lg bg-white p-5 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Capsules vidéo pédagogiques</h3>
            <p className="mt-2 text-gray-700 text-sm">
              Progressive pathway: foundations of the official curriculum → advanced applications. Rigor, pedagogical clarity, and scientific openness.
            </p>
            <div className="mt-3 flex items-center gap-3 text-sm text-gray-500">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-2.5 py-1 text-primary-700">Vidéos</span>
              <span>Edited & commented content</span>
            </div>
          </div>

          <div className="rounded-lg bg-white p-5 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Oraux blancs</h3>
            <p className="mt-2 text-gray-700 text-sm">
              Simulations with alumni from top schools for real and actionable feedback.
            </p>
            <div className="mt-3 flex items-center gap-3 text-sm text-gray-500">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-2.5 py-1 text-primary-700">+120 élèves</span>
              <span>previous edition</span>
            </div>
          </div>

          <div className="rounded-lg bg-white p-5 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">T.I.P.E. blancs</h3>
            <p className="mt-2 text-gray-700 text-sm">
              Presentations before a jury, structured feedback, and advice to highlight scientific work.
            </p>
          </div>

          <div className="rounded-lg bg-white p-5 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Mentorat</h3>
            <p className="mt-2 text-gray-700 text-sm">
              Regular follow-up, mutual support, and methodological and moral guidance by experienced mentors.
            </p>
          </div>
        </section>

        {/* Creative timeline / roadmap */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Comment ça marche</h2>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How it works</h2>
          <ol className="space-y-6">
            <li className="flex gap-4">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white font-medium">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">Watch — Consolidate</h3>
                <p className="text-gray-700 text-sm mt-1">Start with capsules focused on weak concepts, then progress to demanding applications.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 font-medium">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">Practice — Mock Orals & TIPE</h3>
                <p className="text-gray-700 text-sm mt-1">Supervised simulations reproducing exam conditions and presentations before a jury.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-700 font-medium">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">Progress — Mentoring</h3>
                <p className="text-gray-700 text-sm mt-1">Personalized follow-up, regular feedback, and methodological advice to stay on track.</p>
              </div>
            </li>
          </ol>
        </section>

        {/* Details / expandable sections for depth */}
        <section className="space-y-4 mb-8">
          <details className="group rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
            <summary className="flex cursor-pointer items-center justify-between text-gray-900 font-semibold">
              Video capsules — Method and progression
              <span className="ml-4 text-sm text-gray-500 group-open:rotate-90">▸</span>
            </summary>
            <div className="mt-3 text-gray-700 text-sm space-y-2">
              <p>Each capsule aims to:</p>
              <ul className="list-disc pl-5">
                <li>Consolidate the foundations of the official curriculum</li>
                <li>Explore advanced extensions and applications</li>
                <li>Offer solved exercises and ideas for further reflection</li>
              </ul>
            </div>
          </details>

          <details className="group rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
            <summary className="flex cursor-pointer items-center justify-between text-gray-900 font-semibold">
              Mock Orals — Format
              <span className="ml-4 text-sm text-gray-500 group-open:rotate-90">▸</span>
            </summary>
            <div className="mt-3 text-gray-700 text-sm space-y-2">
              <p>Sessions organized by alumni to simulate:</p>
              <ul className="list-disc pl-5">
                <li>Time pressure and technical oral exams</li>
                <li>Quality of reasoning and expression</li>
                <li>Precise and personalized feedback</li>
              </ul>
            </div>
          </details>

          <details className="group rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
            <summary className="flex cursor-pointer items-center justify-between text-gray-900 font-semibold">
              Mock TIPE — Approach
              <span className="ml-4 text-sm text-gray-500 group-open:rotate-90">▸</span>
            </summary>
            <div className="mt-3 text-gray-700 text-sm space-y-2">
              <p>Faithful simulation of the exam, evaluation jury, and feedback to:</p>
              <ul className="list-disc pl-5">
                <li>Structure the presentation</li>
                <li>Highlight results</li>
                <li>Anticipate jury questions</li>
              </ul>
            </div>
          </details>
        </section>

        {/* Footer CTA / quick stats */}
        <section className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-sm text-gray-500">Vous voulez en savoir plus ?</p>
              <h3 className="text-lg font-semibold text-gray-900">Join the Prep Division</h3>
              <p className="mt-2 text-gray-700 text-sm">Sessions, resources, and mentoring to help you prepare effectively.</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                className="rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700"
                href="mailto:prepa@mathmaroc.org"
              >
                Request information
              </a>
              <Link href="/divisions" className="rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                See other divisions
              </Link>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-semibold text-primary-600">120+</div>
              <div className="text-xs text-gray-500">students (last edition)</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-primary-600">+50</div>
              <div className="text-xs text-gray-500">capsules</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-primary-600">Mentorat</div>
              <div className="text-xs text-gray-500">regular follow-up</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}