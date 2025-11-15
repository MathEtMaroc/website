import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import InfinityIcon from '../../../public/icons/infinity.svg';

const IMAGES = [
  '/images/divisions/olympiads/photo1.jpg',
  '/images/divisions/olympiads/7.webp',
  '/images/divisions/olympiads/8.webp',
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
              <p className="mt-1 text-sm text-gray-500">Entraînement des meilleurs lycéens marocains pour les compétitions internationales de mathématiques (IMO, PAMO, AMO …)</p>
              <p className="mt-3 text-gray-700 max-w-2xl">
                Aux côtés du Ministère de l'Éducation nationale, nous formons les meilleurs lycéens sélectionnés au niveau national lors de stages de préparation et également grâce à un suivi en ligne, afin de les entraîner à représenter le Maroc dans les plus grandes compétitions mathématiques : au niveau africain (PAMO), au niveau arabe (AMO) et, au niveau international, la plus prestigieuse d'entre toutes  l'IMO (International Mathematical Olympiad).
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  href="https://drive.google.com/file/d/130OcKDl5aI3eD8fJgYduJu1O4s88ENd6/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-white text-sm font-medium hover:bg-primary-700"
                >
                  Note Ministérielle 2024/2025 pour les Olympiades de Maths
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
              En s'appuyant sur nos membres, anciens participants aux olympiades nationales et internationales, notre mission c'est d'améliorer le classement du Maroc dans les compétitions internationales de mathématiques. La division Olympiade de Math&Maroc, a été à l'origine de la création de cette association en 2016 par des anciens Olympiens et jeunes ingénieurs.
            </p>

            <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Approche en 4 temps</h3>
              <ol className="mt-3 space-y-3 text-gray-700 list-decimal pl-5">
                <li><strong>Identification</strong> — La sélection se fait au niveau national par des tests organisés par le Ministère (voir - note ministérielle).  Nous diffusons la culture olympique et détectons les jeunes talents grâce au Summer Camp et au Moroccan Day of Mathematics (MDM).</li>
                <li><strong>Formation</strong> — Environ 100 lycéens*, sélectionnés au niveau national, font partie du cursus olympique, divisé en trois niveaux (N1, N2, N3). Nous les formons aux côtés du comité central du Ministère, à travers six stages annuels et un suivi en ligne.</li>
                <li><strong>Sélection</strong> — Les équipes nationales, généralement composées de six élèves, sont sélectionnées parmi les élèves du niveau N1 pour représenter notre pays, à l'issue de tests organisés durant les stages.</li>
                <li><strong>Soutien</strong> — Nous offrons un soutien moral à ces champions, notamment en accompagnant les candidatures aux études supérieurs des plus sérieux d'entre eux.</li>
              </ol>
              <span className="italic text-sm text-gray-600">* Dans des cas rares, quelques prodiges du collèges peuvent être sélectionnés également.</span>
            </div>

            {/* <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            </div> */}
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

        {/* Livret de préparation */}
        <section className="mb-8 grid gap-6 lg:grid-cols-6 items-start justify-items-center lg:justify-items-start">
          <div className="lg:col-span-5 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900">Livret de Préparation aux Olympiades Internationales de Mathématiques</h2>
            <p className="mt-2 text-gray-700">Rapport complet sur la préparation et résultats aux IMO 2025.</p>
            <a
              href="http://go.runtimebug.com/MathMaroc_Livret_Olympiades"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-white text-sm font-medium hover:bg-primary-700"
            >
              Télécharger le livret
            </a>
          </div>

          <div className="lg:col-span-1 rounded-lg overflow-hidden bg-gray-100 flex items-start justify-center w-40">
            <Image
              src="/images/divisions/olympiads/livret.webp"
              alt="Livret de préparation"
              width={220}
              height={360}
              className="object-cover w-40 h-auto"
            />
          </div>
        </section>

        {/* Olympiades Internationales de Mathématiques (IMO) */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">C'est quoi les Olympiades Internationales de Mathématiques (IMO)?</h2>
          
          <div className="mb-3">
            <div className="float-left rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center mr-4 mb-4">
               <Image
                 src="/images/divisions/olympiads/IMO_logo.png"
                 alt="IMO"
                 width={100}
                 height={100}
                 className="object-cover"
               />
             </div>

            <div className="text-gray-700 space-y-2">
               <p>
                 International Mathematical Olympiad (IMO) est un concours annuel de mathématiques. C'est l'une des plus anciennes et des plus prestigieuses compétitions internationales de sciences. Considérée comme les Jeux olympiques des mathématiques, elle réunit chaque année les six meilleurs lycéens de chaque pays, sélectionnés au niveau national.
               </p>
               <p>
                 Le Maroc participe à l'IMO depuis 1983 et se classe généralement entre la 60ème et la 70ème place sur les 100 pays participants. Les élèves qui excellent à l'IMO se voient attribuer, en fonction de leur classement, une médaille de bronze, d'argent ou d'or.
               </p>
             </div>
            <div className="clear-both"></div>
          </div>

          <div className="rounded-lg bg-white p-2 border border-gray-100 shadow-sm mb-6">
            <p className="text-gray-700">
              <strong>Résultat du Maroc aux IMO :</strong>{' '}
              <a
                href="https://www.imo-official.org/team_r.aspx?code=MAR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Ici
              </a>
            </p>
          </div>

          <div className="rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center h-85 w-full">
            <Image
              src="/images/divisions/olympiads/IMO_2015.webp"
              alt="IMO participants"
              width={800}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </section>

        {/* Témoignages */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Témoignages</h2>
          <div className="space-y-6">
            <article className="rounded-lg bg-white p-4 border border-gray-100 shadow-sm">
              <div>
                <div className="sm:float-left block mx-auto sm:mx-0 rounded-full overflow-hidden mr-4 mb-4 sm:mb-0 w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 bg-gray-100">
                  <Image
                    src="/images/divisions/olympiads/el_bouzaidi.webp"
                    alt="Ines EL BOUZAIDI TIALI"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full block"
                  />
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Être mentorée par Math&Maroc a été une expérience inoubliable, bien au-delà du tutorat académique. J’ai rejoint une véritable famille qui se souciait de ma progression et m’a aidé à révéler mon plein potentiel. Les tuteurs, plus que de simples experts, adaptaient leur accompagnement à chacun de nous. Le Prof. Omar El Housni sélectionnait des problèmes captivants et les expliquait avec une clarté exceptionnelle, transformant notre façon de penser et contribuant aux meilleurs scores du Maroc cette année-là. Mais Math&Maroc, c’est bien plus qu’un accompagnement académique : c’est une communauté à vie. Je leur serai toujours reconnaissante pour leur engagement et leur bienveillance.
                </p>

                <div className="mt-3 text-sm font-medium text-gray-800">Ines EL BOUZAIDI TIALI</div>
                <div className="text-sm text-gray-500">IMO 2019 & 2020</div>
                <div className="clear-both" />
              </div>
            </article>

            <article className="rounded-lg bg-white p-4 border border-gray-100 shadow-sm">
              <div>
                <div className="sm:float-left block mx-auto sm:mx-0 rounded-full overflow-hidden mr-4 mb-4 sm:mb-0 w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 bg-gray-100">
                   <Image
                     src="/images/divisions/olympiads/gmouh.webp"
                     alt="Yacine GMOUH"
                     width={96}
                     height={96}
                     className="object-cover w-full h-full block"
                   />
                 </div>

                <p className="text-gray-700 leading-relaxed">
                  La préparation organisée par Math&Maroc a été excellente. Ce que j’ai le plus apprécié, ce sont les mock tests. Chaque dimanche, on se mettait vraiment dans les conditions réelles de l’examen : quatre heures de test comme aux IMO. Ces séances nous ont énormément aidés à progresser. À force d’en faire, on finit par rencontrer toutes les configurations possibles, ce qui nous permet d’apprendre à mieux nous connaître. L’ambiance de travail était à la fois sérieuse, bienveillante et motivante, c’était sans doute la meilleure année de ma préparation. J’ai également beaucoup apprécié le soutien moral de Math&Maroc. L’équipe nous a toujours rassurés sur notre avenir, en nous expliquant qu’il ne fallait pas trop s’inquiéter pour les écoles et qu’il était surtout important de se concentrer sur les Olympiades.
                </p>

                <div className="mt-3 text-sm font-medium text-gray-800">Yacine GMOUH</div>
                <div className="text-sm text-gray-500">IMO 2025 - Médaillé de Bronze</div>
                <div className="clear-both" />
              </div>
            </article>
          </div>
        </section>

        {/* Références et documents */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Références et documents</h2>
          <ul className="mt-2 space-y-3 text-gray-700 list-disc pl-5">
            <li>
              <a
                href="https://web.archive.org/web/20180827140850/http://www.mathemaroc.com/journal/MedailleBronzeIMO.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Médaille aux Olympiades internationales de mathématiques (archive)
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/1KaQ3JnH5xVSE_m-Javqz1whqr1RH0GWL5o_TRI7qQhI/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Référence pour préparer aux olympiades de mathématiques (Google Doc)
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1M9tpfRRyC8O1uMqv6F4mYrO1V5mt9m5p/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Participation aux IMO 2022 - Journal de Math&Maroc Num 9
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/170KsjD__m-TOoQWCknzV4mQHy5-wyy4k/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Explication du parcours national de mathématique - Journal de Math&Maroc Num9
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}