import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
// Use the same InfinityIcon as the navbar
import InfinityIcon from '../../../public/icons/infinity.svg';

const IMAGES = [
  '/images/divisions/olympiads/photo1.jpg', // replace with your actual filenames
  '/images/divisions/olympiads/photo2.jpg',
  '/images/divisions/olympiads/photo3.jpg',
];

export default function Page() {
  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-5xl">
        {/* Hero */}
        <header className="rounded-xl bg-gradient-to-r from-white via-indigo-50 to-white border border-gray-100 p-6 mb-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-shrink-0">
              <div className="rounded-md bg-primary-50 p-3">
                <InfinityIcon className="w-8 h-8 text-primary-600" aria-hidden="true" />
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-semibold text-gray-900">Mathematical Olympiad — Olympiads</h1>
              <p className="mt-1 text-sm text-gray-500">Entraînement des meilleurs lycéens marocains pour IMO, PAMO et compétitions internationales</p>
              <p className="mt-3 text-gray-700 max-w-2xl">
                Aux côtés du Ministère de l'Éducation, nous préparons des talents capables de rivaliser au plus haut niveau :
                problèmes d'élite, sessions intensives, mentorat par d'anciens médaillés et immersion dans la culture des
                olympiades mathématiques.
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  href="mailto:olympiads@mathmaroc.org"
                  className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-white text-sm font-medium hover:bg-primary-700"
                >
                  Rejoindre / Demander info
                </a>
                <Link
                  href="/divisions"
                  className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  ← Retour aux divisions
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Gallery + mission */}
        <section className="grid gap-6 lg:grid-cols-3 mb-8">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Notre mission</h2>
            <p className="text-gray-700">
              Nous identifions, formons et accompagnons les élèves les plus prometteurs pour les concours nationaux et internationaux.
              Le travail porte sur la résolution créative de problèmes, la rigueur de démonstration et la préparation psychologique aux compétitions.
            </p>

            <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Approche en 3 temps</h3>
              <ol className="mt-3 space-y-3 text-gray-700 list-decimal pl-5">
                <li><strong>Identification</strong> — Olympiades scolaires et stages de sélection.</li>
                <li><strong>Formation</strong> — Sessions thématiques, problèmes classiques et ateliers de créativité.</li>
                <li><strong>Soutien</strong> — Mentorats, camps intensifs et coaching pour les phases internationales.</li>
              </ol>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg bg-primary-50 p-4 border border-primary-100">
                <div className="text-sm text-primary-700 font-medium">Compétitions ciblées</div>
                <div className="mt-2 text-gray-900 font-semibold">IMO · PAMO · RMO</div>
                <p className="mt-1 text-sm text-gray-700">Préparation complète à l'épreuve individuelle et par équipe.</p>
              </div>

              <div className="rounded-lg bg-white p-4 border border-gray-100 shadow-sm">
                <div className="text-sm text-gray-500">Impact</div>
                <div className="mt-2 text-gray-900 font-semibold">Médailles & Représentation</div>
                <p className="mt-1 text-sm text-gray-700">Accompagnement durable pour construire les carrières mathématiques de demain.</p>
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Galerie</h3>
            <div className="grid grid-cols-1 gap-3">
              {IMAGES.map((src, i) => (
                <div key={src} className="overflow-hidden rounded-lg relative bg-gray-100">
                  <Image
                    src={src}
                    alt={`Olympiads photo ${i + 1}`}
                    width={800}
                    height={600}
                    className="object-cover w-full h-40 transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </aside>
        </section>

        {/* Stories / highlights */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Témoignages & moments forts</h2>
          <div className="space-y-4">
            <blockquote className="rounded-lg border-l-4 border-primary-600 bg-white p-4 text-gray-700 shadow-sm">
              « Grâce aux camps intensifs j'ai appris à aborder un problème par différents chemins — c'est là que la vraie créativité se révèle. »
              <div className="mt-2 text-sm text-gray-500">— Ex-candidat IMO</div>
            </blockquote>

            <div className="rounded-lg bg-white p-4 border border-gray-100 shadow-sm">
              <h4 className="font-semibold text-gray-900">Stages intensifs</h4>
              <p className="mt-1 text-sm text-gray-700">Sessions de 3 à 7 jours concentrées sur thèmes (combinatoire, algèbre, géométrie, théorie des nombres).</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Vous voulez participer ?</h3>
            <p className="mt-1 text-sm text-gray-700">Contactez-nous pour connaître les prochaines sessions et critères de sélection.</p>
          </div>
          <div className="flex gap-3">
            <a href="mailto:olympiads@mathmaroc.org" className="rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700">
              Demander une place
            </a>
            <Link href="/about" className="rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              En savoir plus
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}