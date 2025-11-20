import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import InfinityIcon from '../../../public/icons/infinity.svg';
import { Metadata } from 'next';

const IMAGES = [
  '/images/divisions/olympiads/photo1.jpg',
  '/images/divisions/olympiads/7.webp',
  '/images/divisions/olympiads/8.webp',
];

export const metadata: Metadata = {
  title: 'Mathematical Olympiad',
};

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
              <h1 className="text-3xl font-semibold text-gray-900">Mathematical Olympiad</h1>
              <p className="mt-1 text-sm text-gray-500">
                Training the best Moroccan high school students for international mathematics competitions (IMO, PAMO, AMO, etc.)
              </p>
              <p className="mt-3 text-gray-700 max-w-2xl">
                Alongside the Ministry of National Education, we coach the top high school students selected nationally through preparation camps and online follow-up, training them to represent Morocco in major mathematics competitions: at the African level (PAMO), the Arab level (AMO), and internationally, the most prestigious of all, the IMO (International Mathematical Olympiad).
              </p>

              <div className="mt-4 flex gap-3 flex-wrap">
                <a
                  href="https://drive.google.com/file/d/130OcKDl5aI3eD8fJgYduJu1O4s88ENd6/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-white text-sm font-medium hover:bg-primary-700"
                >
                  Ministerial Note 2024/2025 for Math Olympiads
                </a>

                {/* Email Button */}
                <a
                  href="mailto:olympiads@mathmaroc.org"
                  className="inline-flex items-center gap-2 rounded-md border border-primary-600 px-4 py-2 text-primary-600 text-sm font-medium hover:bg-primary-50"
                >
                  Contact Us: olympiads@mathmaroc.org
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
        </header>


        {/* Gallery + mission */}
        <section className="grid gap-6 lg:grid-cols-3 mb-8">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
            <p className="text-gray-700">
              Relying on our members, former participants in national and international olympiads, our mission is to improve Morocco's ranking in international mathematics competitions. The Olympiad division of Math&Maroc was the origin of the association's creation in 2016 by former Olympians and young engineers.
            </p>

            <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Approach</h3>
              <ol className="mt-3 space-y-3 text-gray-700 list-decimal pl-5">
                <li><strong>Identification</strong> — Selection is done nationally through tests organized by the Ministry (see ministerial note). We spread the olympiad culture and detect young talents through the Summer Camp and the Moroccan Day of Mathematics (MDM).</li>
                <li><strong>Training</strong> — Around 100 high school students*, selected nationally, are part of the olympiad program, divided into three levels (N1, N2, N3). We train them alongside the Ministry's central committee, through six annual camps and online follow-up.</li>
                <li><strong>Selection</strong> — National teams, usually composed of six students, are selected from N1 level students to represent our country, following tests organized during the camps.</li>
                <li><strong>Support</strong> — We offer moral support to these champions, especially by assisting the most dedicated with their applications to higher education.</li>
              </ol>
              <span className="italic text-sm text-gray-600">* In rare cases, some prodigies from middle school may also be selected.</span>
            </div>

            {/* <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg bg-primary-50 p-4 border border-primary-100">
                <div className="text-sm text-primary-700 font-medium">Targeted Competitions</div>
                <div className="mt-2 text-gray-900 font-semibold">IMO · PAMO · RMO</div>
                <p className="mt-1 text-sm text-gray-700">Comprehensive preparation for individual and team events.</p>
              </div>

              <div className="rounded-lg bg-white p-4 border border-gray-100 shadow-sm">
                <div className="text-sm text-gray-500">Impact</div>
                <div className="mt-2 text-gray-900 font-semibold">Medals & Representation</div>
                <p className="mt-1 text-sm text-gray-700">Long-term support to build the mathematical careers of tomorrow.</p>
              </div>
            </div> */}
          </div>

          <aside className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Gallery</h3>
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

        {/* Preparation booklet */}
        <section className="mb-8 grid gap-6 lg:grid-cols-6 items-start justify-items-center lg:justify-items-start">
          <div className="lg:col-span-5 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900">Preparation Booklet for the International Mathematical Olympiad</h2>
            <p className="mt-2 text-gray-700">Comprehensive report on preparation and results at IMO 2025.</p>
            <a
              href="http://go.runtimebug.com/MathMaroc_Livret_Olympiades"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-white text-sm font-medium hover:bg-primary-700"
            >
              Download the report
            </a>
          </div>

          <div className="lg:col-span-1 rounded-lg overflow-hidden bg-gray-100 flex items-start justify-center w-40">
            <Image
              src="/images/divisions/olympiads/livret.webp"
              alt="Preparation booklet"
              width={220}
              height={360}
              className="object-cover w-40 h-auto"
            />
          </div>
        </section>

        {/* International Mathematical Olympiad (IMO) */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">What is the International Mathematical Olympiad (IMO)?</h2>
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
                 The International Mathematical Olympiad (IMO) is an annual mathematics competition. It is one of the oldest and most prestigious international science competitions. Considered the Olympics of mathematics, it brings together each year the six best high school students from each country, selected nationally.
               </p>
               <p>
                 Morocco has participated in the IMO since 1983 and usually ranks between 60th and 70th place out of 100 participating countries. Students who excel at the IMO are awarded, depending on their ranking, a bronze, silver, or gold medal.
               </p>
             </div>
            <div className="clear-both"></div>
          </div>

          <div className="rounded-lg bg-white p-2 border border-gray-100 shadow-sm mb-6">
            <p className="text-gray-700">
              <strong>Morocco's results at the IMO:</strong>{' '}
              <a
                href="https://www.imo-official.org/team_r.aspx?code=MAR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Here
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

        {/* Testimonials */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Testimonials</h2>
          <div className="space-y-6">
            <article className="rounded-lg bg-white p-4 border border-gray-100 shadow-sm">
              <div>
                <div className="sm:float-left block mx-auto sm:mx-0 rounded-full overflow-hidden sm:mr-4 mb-4 sm:mb-0 w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 bg-gray-100">
                  <Image
                    src="/images/divisions/olympiads/el_bouzaidi.webp"
                    alt="Ines EL BOUZAIDI TIALI"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full block"
                  />
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Being mentored by Math&Maroc was an unforgettable experience, far beyond academic tutoring. I joined a true family that cared about my progress and helped me reach my full potential. The tutors, more than just experts, tailored their support to each of us. Prof. Omar El Housni selected captivating problems and explained them with exceptional clarity, transforming our way of thinking and contributing to Morocco's best scores that year. But Math&Maroc is much more than academic support: it is a lifelong community. I will always be grateful for their commitment and kindness.
                </p>

                <div className="mt-3 text-sm font-medium text-gray-800">Ines EL BOUZAIDI TIALI</div>
                <div className="text-sm text-gray-500">IMO 2019 & 2020</div>
                <div className="clear-both" />
              </div>
            </article>

            <article className="rounded-lg bg-white p-4 border border-gray-100 shadow-sm">
              <div>
                  <div className="sm:float-left block mx-auto sm:mx-0 rounded-full overflow-hidden sm:mr-4 mb-4 sm:mb-0 w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 bg-gray-100">
                   <Image
                     src="/images/divisions/olympiads/gmouh.png"
                     alt="Yacine GMOUH"
                     width={96}
                     height={96}
                     className="object-cover w-full h-full block"
                   />
                 </div>

                <p className="text-gray-700 leading-relaxed">
                  The preparation organized by Math&Maroc was excellent. What I appreciated most were the mock tests. Every Sunday, we really put ourselves in the real exam conditions: four hours of testing just like at the IMO. These sessions helped us progress tremendously. By doing so many, you end up encountering all possible scenarios, which helps you learn more about yourself. The working atmosphere was both serious, supportive, and motivating—it was undoubtedly the best year of my preparation. I also greatly appreciated the moral support from Math&Maroc. The team always reassured us about our future, explaining that we shouldn't worry too much about schools and that it was most important to focus on the Olympiads.
                </p>

                <div className="mt-3 text-sm font-medium text-gray-800">Yacine GMOUH</div>
                <div className="text-sm text-gray-500">IMO 2025 - Bronze Medalist</div>
                <div className="clear-both" />
              </div>
            </article>
          </div>
        </section>

        {/* References and Documents */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">References and Documents</h2>
          <ul className="mt-2 space-y-3 text-gray-700 list-disc pl-5">
            <li>
              <a
                href="https://web.archive.org/web/20180827140850/http://www.mathemaroc.com/journal/MedailleBronzeIMO.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Medal at the International Mathematical Olympiad (archive)
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/1KaQ3JnH5xVSE_m-Javqz1whqr1RH0GWL5o_TRI7qQhI/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Reference for preparing for mathematical olympiads (Google Doc)
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1M9tpfRRyC8O1uMqv6F4mYrO1V5mt9m5p/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Participation at IMO 2022 - Math&Maroc Journal No. 9
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/170KsjD__m-TOoQWCknzV4mQHy5-wyy4k/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Explanation of the national mathematics pathway - Math&Maroc Journal No. 9
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
