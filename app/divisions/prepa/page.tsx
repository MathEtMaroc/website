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
              <h1 className="text-3xl font-semibold text-gray-900">Pôle Prépa</h1>
              <p className="mt-1 text-sm text-gray-500">Publié le 14 août 2025 · Math & Maroc</p>
              <p className="mt-3 text-gray-700">
                Accompagner les talents des classes préparatoires vers l’excellence — capsules, oraux, TIPE et mentorat.
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-white text-sm font-medium hover:bg-primary-700"
                  href="mailto:contact@mathmaroc.org"
                >
                  Nous contacter
                </a>
                <Link href="/divisions" className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  ← Retour aux divisions
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
              Parcours progressif : fondations du programme → applications avancées. Rigueur, clarté pédagogique et ouverture scientifique.
            </p>
            <div className="mt-3 flex items-center gap-3 text-sm text-gray-500">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-2.5 py-1 text-primary-700">Vidéos</span>
              <span>Contenu monté & commenté</span>
            </div>
          </div>

          <div className="rounded-lg bg-white p-5 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Oraux blancs</h3>
            <p className="mt-2 text-gray-700 text-sm">
              Simulations avec anciens élèves des meilleures écoles pour un feedback réel et actionnable.
            </p>
            <div className="mt-3 flex items-center gap-3 text-sm text-gray-500">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-2.5 py-1 text-primary-700">+120 élèves</span>
              <span>édition précédente</span>
            </div>
          </div>

          <div className="rounded-lg bg-white p-5 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">T.I.P.E. blancs</h3>
            <p className="mt-2 text-gray-700 text-sm">
              Présentations devant jury, débrief structuré et conseils pour valoriser le travail scientifique.
            </p>
          </div>

          <div className="rounded-lg bg-white p-5 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Mentorat</h3>
            <p className="mt-2 text-gray-700 text-sm">
              Suivi régulier, entraide et accompagnement méthodologique et moral par des mentors expérimentés.
            </p>
          </div>
        </section>

        {/* Creative timeline / roadmap */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Comment ça marche</h2>
          <ol className="space-y-6">
            <li className="flex gap-4">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white font-medium">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">Regarder — Consolider</h3>
                <p className="text-gray-700 text-sm mt-1">Commencez par les capsules ciblées sur les notions faibles, puis progressez vers des applications exigeantes.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 font-medium">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">S'entraîner — Oraux & TIPE</h3>
                <p className="text-gray-700 text-sm mt-1">Simulations encadrées reproduisant les conditions d'examen et présentation devant un jury.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-700 font-medium">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">Progresser — Mentorat</h3>
                <p className="text-gray-700 text-sm mt-1">Suivi personnalisé, retours réguliers et conseils méthodologiques pour garder le cap.</p>
              </div>
            </li>
          </ol>
        </section>

        {/* Details / expandable sections for depth */}
        <section className="space-y-4 mb-8">
          <details className="group rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
            <summary className="flex cursor-pointer items-center justify-between text-gray-900 font-semibold">
              Capsules vidéo — Méthode et progression
              <span className="ml-4 text-sm text-gray-500 group-open:rotate-90">▸</span>
            </summary>
            <div className="mt-3 text-gray-700 text-sm space-y-2">
              <p>Chaque capsule vise à :</p>
              <ul className="list-disc pl-5">
                <li>Consolider les acquis du programme officiel</li>
                <li>Explorer des extensions et applications de haut niveau</li>
                <li>Proposer exercices corrigés et pistes de réflexion</li>
              </ul>
            </div>
          </details>

          <details className="group rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
            <summary className="flex cursor-pointer items-center justify-between text-gray-900 font-semibold">
              Oraux blancs — Format
              <span className="ml-4 text-sm text-gray-500 group-open:rotate-90">▸</span>
            </summary>
            <div className="mt-3 text-gray-700 text-sm space-y-2">
              <p>Sessions organisées par d'anciens préparant pour simuler :</p>
              <ul className="list-disc pl-5">
                <li>La pression temporelle et l'oral technique</li>
                <li>La qualité du raisonnement et de l'expression</li>
                <li>Un debrief précis et personnalisé</li>
              </ul>
            </div>
          </details>

          <details className="group rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
            <summary className="flex cursor-pointer items-center justify-between text-gray-900 font-semibold">
              T.I.P.E. blancs — Démarche
              <span className="ml-4 text-sm text-gray-500 group-open:rotate-90">▸</span>
            </summary>
            <div className="mt-3 text-gray-700 text-sm space-y-2">
              <p>Simulation fidèle de l'épreuve, jury d'évaluation et débrief pour :</p>
              <ul className="list-disc pl-5">
                <li>Structurer la présentation</li>
                <li>Mettre en valeur les résultats</li>
                <li>Anticiper les questions du jury</li>
              </ul>
            </div>
          </details>
        </section>

        {/* Footer CTA / quick stats */}
        <section className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-sm text-gray-500">Vous voulez en savoir plus ?</p>
              <h3 className="text-lg font-semibold text-gray-900">Rejoignez le Pôle Prépa</h3>
              <p className="mt-2 text-gray-700 text-sm">Sessions, ressources et mentorat pour vous préparer efficacement.</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                className="rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700"
                href="mailto:prepa@mathmaroc.org"
              >
                Demander un renseignement
              </a>
              <Link href="/divisions" className="rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Voir les autres divisions
              </Link>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-semibold text-primary-600">120+</div>
              <div className="text-xs text-gray-500">élèves (dern. édition)</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-primary-600">+50</div>
              <div className="text-xs text-gray-500">capsules</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-primary-600">Mentorat</div>
              <div className="text-xs text-gray-500">suivi régulier</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}