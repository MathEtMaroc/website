'use client';
import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { stats as ABOUT_STATS } from '../_data/stats';

type Member = {
  id: string;
  name: string;
  role: string;
  img: string;
  desc: string;
};

const BOARD: Member[] = [
  {
    id: 'b1',
    name: 'Omar Bennouna',
    role: 'President',
    img: '/images/members/bennouna.png',
    desc:
      "Omar is currently pursuing his PhD at MIT after studying at École Polytechnique. He has been on the Board since 2019 and leads communications. He is involved in ThinkAI Hackathon, MTYM and MMC, and contributes to Orientation.",
  },
  {
    id: 'b2',
    name: 'Mohamed Ali Benchekroun',
    role: 'Secretary General',
    img: '/images/members/benchekroun.png',
    desc:
      "Mohamed Ali holds a Master's from MIT and an engineering degree from CentraleSupélec. He works as a Data Scientist at Walmart Global Tech. He joined Math&Maroc in 2021 and coordinates MMC, the Summer Camp and Orientation alongside Mohammed Bahhad.",
  },
  {
    id: 'b3',
    name: 'Ismail Bouhaj',
    role: 'Treasurer',
    img: '/images/members/bouhaj.jpeg',
    desc: '',
  },
  {
    id: 'b4',
    name: 'Ziad Oumzil',
    role: 'Vice President',
    img: '/images/members/oumzil.png',
    desc:
      "Ziad studies at École Polytechnique. IMO 2019 bronze medalist and IMC 2022 First Prize winner. He is VP Olympiads and has helped launch MMC and the Summer Camp.",
  },
  {
    id: 'b5',
    name: 'Abderrahmane Echaarani',
    role: 'Board Member',
    img: '/images/members/echaarani.jpeg',
    desc: '',
  },
  {
    id: 'b6',
    name: 'Fatima Zahra Moudakir',
    role: 'Vice Secretary General',
    img: '/images/members/moudakir.jpeg',
    desc: '',
  },
  {
    id: 'b7',
    name: 'Manal Saoui',
    role: 'Vice Treasurer',
    img: '/images/members/saoui.jpeg',
    desc: '',
  },
  {
    id: 'b8',
    name: 'Khalil El Azri',
    role: 'Board Member',
    img: '/images/members/el_azri.jpeg',
    desc: '',
  },
];

const VPS: Member[] = [
  {
    id: 'v1',
    name: 'Mohammed Bahhad',
    role: 'VP Orientation',
    img: '/images/members/default-profile-picture.png',
    desc:
      "Mohammed studies at CentraleSupélec Paris. He has served as VP Orientation since November 2023 and joined Math&Maroc in 2022.",
  },
  {
    id: 'v2',
    name: 'Mohamed Baoudra',
    role: 'VP Conferences',
    img: '/images/members/baoudra.png',
    desc:
      "Mohamed graduated from EMI and works at UM6P as Program Management Officer. He joined Math&Maroc in 2021 and helped launch the Moroccan Day of Mathematics (MDM).",
  },
  {
    id: 'v3',
    name: 'Mohamed Ali Benchekroun',
    role: 'VP MMC, VP Summer Camp & VP Orientation',
    img: '/images/members/benchekroun.png',
    desc:
      "Mohamed Ali holds a Master's from MIT and an engineering degree from CentraleSupélec. He coordinates MMC, the Summer Camp and Orientation.",
  },
  {
    id: 'v4',
    name: 'Omar Bennouna',
    role: 'VP Communication',
    img: '/images/members/bennouna.png',
    desc:
      "Omar is completing a PhD at MIT and leads communications. He is active on ThinkAI Hackathon, MTYM and MMC and supports Orientation.",
  },
  {
    id: 'v5',
    name: 'Ahmed Chahlaoui',
    role: 'VP Physics',
    img: '/images/members/chahlaoui.png',
    desc:
      "Ahmed studies engineering at CentraleSupélec and serves as VP Physics.",
  },
  {
    id: 'v6',
    name: 'Hala Gamouh',
    role: 'VP MTYM',
    img: '/images/members/default-profile-picture.png',
    desc:
      "Hala studies at École Polytechnique and leads the team organising the Moroccan Tournament of Young Mathematicians (MTYM).",
  },
  {
    id: 'v7',
    name: 'Abir Harrasse',
    role: 'VP MDM',
    img: '/images/members/harrasse.png',
    desc:
      "Abir studies at UM6P EMINES and co-leads conferences; she played a key role in launching the Moroccan Day of Mathematics (MDM).",
  },
  {
    id: 'v8',
    name: 'Safaa Khadim',
    role: 'VP Conferences & VP MDM',
    img: '/images/members/default-profile-picture.png',
    desc:
      "Safaa graduated from ENSIAS and works as a Research Consultant at OCP Solutions. She co-led the team organising MDM and contributes to ThinkAI.",
  },
  {
    id: 'v9',
    name: 'Aymane Maaitat',
    role: 'VP Physics',
    img: '/images/members/maaitat.png',
    desc:
      "Aymane studies at École Polytechnique, won IMC 2022 First Prize and represented Morocco in PLANKS 2023. He is Assessor and VP Physics.",
  },
  {
    id: 'v10',
    name: 'Hasnaa Ouadoudi Belabzioui',
    role: 'VP Artificial Intelligence & VP Hackathon',
    img: '/images/members/default-profile-picture.png',
    desc:
      "Hasnaa is a PhD candidate in AI at ENS Rennes and leads the ThinkAI Hackathon team.",
  },
  {
    id: 'v11',
    name: 'Ziad Oumzil',
    role: 'VP Olympiads & VP Summer Camp',
    img: '/images/members/oumzil.png',
    desc:
      "Ziad studies at École Polytechnique, IMO 2019 bronze medalist and IMC 2022 prizewinner. He is VP Olympiads and co-leads the Summer Camp.",
  },
  {
    id: 'v12',
    name: 'Rachida Saroui',
    role: 'VP Publications',
    img: '/images/members/default-profile-picture.png',
    desc:
      "Rachida studies at École Normale Supérieure Paris-Saclay and has served as VP Publications since November 2023.",
  },
  {
    id: 'v13',
    name: 'Oussama Zouhry',
    role: 'VP Prepa',
    img: '/images/members/zouhry.png',
    desc:
      "Oussama studies at École Polytechnique, won a bronze medal at MYMC 2019, and serves as VP Prepa and Treasurer, contributing to ThinkAI and MTYM.",
  },
];

function IconSparkle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M12 3l1.9 4.8L19 9l-4.5 2L14.1 16 12 13.7 9.9 16l-.4-5L5 9l5.1-1.2L12 3z" stroke="currentColor" strokeWidth="0.6" />
    </svg>
  );
}

function MemberCard({ m, onOpen }: { m: Member; onOpen: (m: Member) => void }) {
  return (
    <button
      onClick={() => onOpen(m)}
      className="group flex flex-col items-center gap-2 rounded-lg bg-white p-4 text-center border border-gray-100 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
      aria-label={`View ${m.name}`}
    >
      <div className="relative h-24 w-24 rounded-full overflow-hidden bg-gray-100 ring-1 ring-gray-100">
        <Image src={m.img} alt={m.name} fill className="object-cover" />
      </div>
      <div className="mt-1 text-sm font-semibold text-gray-900">{m.name}</div>
      <div className="text-xs text-gray-500">{m.role}</div>
    </button>
  );
}

export default function AboutPage() {
  const [tab, setTab] = useState<'board' | 'vps'>('board');
  const [selected, setSelected] = useState<Member | null>(null);
  const [expanded, setExpanded] = useState(false);

  const members = useMemo(() => (tab === 'board' ? BOARD : VPS), [tab]);

  // use centralized stats data
  const membersStat = ABOUT_STATS.find((s) => /members/i.test(s.title)) ?? { number: BOARD.length + VPS.length, suffix: '+' };
  const eventsStat = ABOUT_STATS.find((s) => /events/i.test(s.title)) ?? { number: 120, suffix: '+' };
  const divisionsStat = ABOUT_STATS.find((s) => /divisions/i.test(s.title)) ?? { number: 14, suffix: '+' };
  const participantsStat = ABOUT_STATS.find((s) => /participant/i.test(s.title)) ?? { number: 0, suffix: '' };
  const followersStat = ABOUT_STATS.find((s) => /followers/i.test(s.title)) ?? { number: 0, suffix: '' };
  const format = (s: { number: number; suffix?: string }) => `${s.number}${s.suffix ?? ''}`;
  const continents = 4;

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-5xl">
        {/* Hero */}
        <header className="rounded-xl bg-gradient-to-r from-white via-sky-50 to-white border border-gray-100 p-6 mb-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary-50 p-3 shadow-inner">
                <Image src="/favicon.ico" alt="Math&Maroc" width={32} height={32} className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-semibold text-gray-900">Math&Maroc</h1>
                <p className="mt-1 text-sm text-gray-500">Association | Olympiads · Orientation · Conferences · Prepa</p>
              </div>
            </div>

            <div className="mt-4 sm:mt-0 sm:ml-auto flex gap-3">
              <div className="rounded-md bg-white px-3 py-2 text-center border border-gray-100 shadow-sm">
                <div className="text-sm text-gray-500">Since</div>
                <div className="text-lg font-semibold text-gray-900">2016</div>
              </div>
              <div className="rounded-md bg-white px-3 py-2 text-center border border-gray-100 shadow-sm">
                <div className="text-sm text-gray-500">Presence</div>
                <div className="text-lg font-semibold text-gray-900">{continents} continents</div>
              </div>
              <div className="rounded-md bg-white px-3 py-2 text-center border border-gray-100 shadow-sm">
                <div className="text-sm text-gray-500">Active members</div>
                <div className="text-lg font-semibold text-gray-900">{format(membersStat)}</div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 items-start">
            <div className="rounded-lg bg-white p-4 border border-gray-100 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">Our mission</h2>
              <p className="mt-2 text-gray-700 italic">“Unlocking the scientific potential of Moroccan youth”</p>
              <div className="mt-3 text-gray-700 text-sm">
                {!expanded ? (
                  <>
                    Math&Maroc promotes excellence in mathematics: olympiads, orientation, tutoring, conferences and publications.
                    <div className="mt-3">
                      <button
                        onClick={() => setExpanded(true)}
                        className="text-primary-600 text-sm font-medium"
                      >
                        Read more →
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p>
                      Math&Maroc is a non-profit association founded in 2016 by former olympiad participants. We started by training
                      the national team and expanded into orientation, national competitions, CPGE tutoring, events and a mathematics journal.
                      Our members are active across continents and come from leading universities.
                    </p>
                    <div className="mt-3">
                      <button
                        onClick={() => setExpanded(false)}
                        className="text-gray-600 text-sm"
                      >
                        Show less
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="rounded-lg bg-white p-4 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Impact at a glance</h3>
              <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary-600">{format(eventsStat)}</div>
                  <div className="text-xs text-gray-500">Events</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600">{format(participantsStat)}</div>
                  <div className="text-xs text-gray-500">Participants<br/>(last 12 months)</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600">{format(followersStat)}</div>
                  <div className="text-xs text-gray-500">Followers on social media</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Values */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">Our values</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg bg-white p-5 border border-gray-100 shadow-sm flex items-start gap-3">
              <div className="rounded-md bg-primary-50 p-2">
                <svg className="w-6 h-6 text-primary-600" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M12 21l-8-4V7l8-4 8 4v10l-8 4z" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Give Back</div>
                <div className="text-sm text-gray-600 mt-1">We are committed to helping future generations by sharing the opportunities we have benefited from.</div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-5 border border-gray-100 shadow-sm flex items-start gap-3">
              <div className="rounded-md bg-primary-50 p-2">
                <svg className="w-6 h-6 text-primary-600" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Impact</div>
                <div className="text-sm text-gray-600 mt-1">Our actions have already made a tangible difference in people's lives by providing opportunities that would otherwise be inaccessible.</div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-5 border border-gray-100 shadow-sm flex items-start gap-3">
              <div className="rounded-md bg-primary-50 p-2">
                <svg className="w-6 h-6 text-primary-600" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7l3-7z" stroke="currentColor" strokeWidth="0.9" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Excellence</div>
                <div className="text-sm text-gray-600 mt-1">We seek to promote excellence in mathematics and sciences in Morocco.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team tabs */}
        <section className="mb-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">The Mathletes</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setTab('board')}
                className={`px-3 py-1 text-sm font-medium ${tab === 'board' ? 'bg-primary-600 text-white rounded-md' : 'text-gray-700 bg-white border border-gray-100 rounded-md'}`}
              >
                Board
              </button>
              <button
                onClick={() => setTab('vps')}
                className={`px-3 py-1 text-sm font-medium ${tab === 'vps' ? 'bg-primary-600 text-white rounded-md' : 'text-gray-700 bg-white border border-gray-100 rounded-md'}`}
              >
                VPs & Leads
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {members.map((m) => (
              <MemberCard key={m.id} m={m} onOpen={setSelected} />
            ))}
          </div>
        </section>
      </div>

      {/* Modal */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/40" onClick={() => setSelected(null)} />
          <div className="relative z-10 max-w-3xl w-full rounded-lg bg-white shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 p-6 flex items-center justify-center bg-gray-50">
                <div className="relative h-40 w-40 rounded-full overflow-hidden bg-gray-100">
                  <Image src={selected.img} alt={selected.name} fill className="object-cover" />
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{selected.name}</h3>
                    <div className="text-sm text-gray-500 mt-1">{selected.role}</div>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="text-gray-400 hover:text-gray-600"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>
                <p className="mt-4 text-gray-700">{selected.desc}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}