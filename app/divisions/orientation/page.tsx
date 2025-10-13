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
              <p className="mt-1 text-sm text-gray-500">Orientation pour les études, les carrières et la suite — vidéos, podcasts et entretiens.</p>
              <p className="mt-3 text-gray-700 max-w-3xl">
                À travers des vidéos, podcasts et interviews, Math&Maroc Orientation aide les jeunes Marocains à prendre des décisions
                éclairées sur leurs études, leur carrière et leur avenir. Nous mêlons formats courts et longs, témoignages concrets et
                playlists pratiques pour explorer des parcours, comparer les options et préparer les étapes suivantes.
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href="mailto:orientation@mathmaroc.org"
                  className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-white text-sm font-medium hover:bg-primary-700"
                >
                  Contacter Orientation
                </a>
                <Link href="/divisions" className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  ← Retour aux divisions
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Latest orientation video (playlist player) */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Dernière sélection — Playlist en vedette</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="md:col-span-2 rounded-lg overflow-hidden border border-gray-100 bg-white shadow-sm">
              <div className="relative pb-[50%]">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/videoseries?list=${PLAYLISTS.lycée}`}
                  title="Playlist Orientation"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">À la une : Orientation — Lycée</h3>
                <p className="mt-2 text-gray-700 text-sm">
                  Une sélection de vidéos choisies pour aider les lycéens à mieux comprendre leurs options, découvrir des filières
                  et préparer leurs choix post-bac avec confiance.
                </p>
              </div>
            </div>

            <aside className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
              <div className="text-sm text-gray-500">Liens rapides</div>
              <ul className="mt-3 space-y-2">
                <li>
                  <a href={`https://www.youtube.com/playlist?list=${PLAYLISTS.lycée}`} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline text-sm">
                    Playlist Lycée
                  </a>
                </li>
                <li>
                  <a href={`https://www.youtube.com/playlist?list=${PLAYLISTS.prepa}`} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline text-sm">
                    Playlist Prépa
                  </a>
                </li>
                <li>
                  <a href={`https://www.youtube.com/playlist?list=${PLAYLISTS.jobs}`} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline text-sm">
                    Playlist Métiers
                  </a>
                </li>
              </ul>
            </aside>
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
                <h3 className="text-xl font-semibold text-gray-900">Orientation Lycée</h3>
                <p className="mt-2 text-gray-700">
                  Au lycée, les possibilités sont vastes mais parfois déroutantes. Nous proposons une sélection de vidéos pour aider
                  les lycéens à faire des choix éclairés, découvrir des parcours alternatifs et se projeter dans différentes filières.
                </p>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  {['/images/divisions/orientation/lycee1.png','/images/divisions/orientation/lycee2.png','/images/divisions/orientation/lycee3.png'].map((s) => (
                    <div key={s} className="rounded-lg overflow-hidden bg-gray-100">
                      <Image src={s} alt="lycée" width={560} height={480} className="object-cover w-full h-45" />
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
                    Voir la playlist Lycée
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
                <h3 className="text-xl font-semibold text-gray-900">Orientation Prépa</h3>
                <p className="mt-2 text-gray-700">
                  Les CPGE peuvent sembler difficiles à appréhender seul. Des mentors expérimentés répondent aux questions, conseillent
                  sur le choix des centres, la préparation aux oraux et donnent des astuces pour rester motivé tout au long du parcours.
                </p>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  {['/images/divisions/orientation/prepa1.png','/images/divisions/orientation/prepa2.png','/images/divisions/orientation/prepa3.png'].map((s) => (
                    <div key={s} className="rounded-lg overflow-hidden bg-gray-100">
                      <Image src={s} alt="prépa" width={560} height={480} className="object-cover w-full h-45" />
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
                    Voir la playlist Prépa
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
                <h3 className="text-xl font-semibold text-gray-900">Orientation Métiers</h3>
                <p className="mt-2 text-gray-700">
                  Choisir un métier, c'est trouver ce qui correspond à ses intérêts, ses valeurs et ses compétences. Nos podcasts et
                  témoignages montrent le quotidien des professions, les trajectoires possibles et offrent des conseils concrets.
                </p>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  {['/images/divisions/orientation/jobs1.png','/images/divisions/orientation/jobs2.png','/images/divisions/orientation/jobs3.jpg'].map((s) => (
                    <div key={s} className="rounded-lg overflow-hidden bg-gray-100">
                      <Image src={s} alt="métiers" width={560} height={480} className="object-cover w-full h-45" />
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
                    Voir la playlist Métiers
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