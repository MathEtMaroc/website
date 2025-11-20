export type PartnerWithDescription = {
  name: string;
  image: string;
  image2?: string;
  href: string;
  description: string;
  preserveColor?: boolean;
  officialPartner?: boolean;
};

// --- Academic Institutions (custom order) ---
export const academicPartners: PartnerWithDescription[] = [
  {
    name: 'UM6P',
    image: '/images/partners/um6p.png',
    image2: '/images/partners/um6p2.png',
    href: 'https://um6p.ma/',
    description: 'Mohammed VI Polytechnic University - a leading research and innovation institution in Morocco.',
    preserveColor: true
  },
  {
    name: 'UM6P College of Computing',
    image: '/images/partners/um6p_cc.png',
    image2: '/images/partners/um6p_cc2.png',
    href: 'https://cc.um6p.ma/',
    description: 'Dedicated to advancing computer science and digital technology education in Africa.',
    preserveColor: true},
  {
    name: "Ministère de l'Éducation Nationale",
    image: '/images/partners/men.png',
    href: 'https://www.men.gov.ma/',
    description: "Morocco's Ministry of National Education, supporting our mission to advance educational excellence.",
  },
  {
    name: 'Lydex',
    image: '/images/partners/lydex.png',
    href: 'https://lm6e.ma/',
    description: 'A prestigious preparatory school fostering excellence in mathematics and sciences.',
  },
  {
    name: 'Lymed',
    image: '/images/partners/lymed.png',
    href: 'https://lymed.ma/',
    description: 'A leading educational institution preparing students for medical and scientific careers.',
  },
  {
    name: 'Al Akhawayn University',
    image: '/images/partners/AUI.png',
    href: 'https://aui.ma/',
    description: 'An international university promoting English-language higher education and research.',
  },
  {
    name: 'Université Euromed',
    image: '/images/partners/ueuromed.png',
    href: 'https://ueuromed.org/',
    description: 'A modern university bridging European and Mediterranean educational traditions.',
  },
];

// --- Companies ---
export const companyPartners: PartnerWithDescription[] = [
  {
    name: 'Adria',
    image: '/images/partners/adria.png',
    href: 'https://adria-bt.com/',
    description: 'A leading technology and business solutions company supporting innovation and digital transformation.',
    officialPartner: true,
  },
  {
    name: 'CDG',
    image: '/images/partners/CDG.png',
    href: 'https://www.cdg.ma/',
    description:
      'Caisse de Dépôt et de Gestion - a major financial institution supporting development projects in Morocco.',
  },
  {
    name: 'Royal Air Maroc',
    image: '/images/partners/ram.svg',
    href: 'https://royalairmaroc.com/',
    description:
      "Morocco's national airline, supporting educational initiatives and national development.",
  },
  {
    name: 'Managem',
    image: '/images/partners/managem.png',
    href: 'https://www.managemgroup.com/',
    description:
      'A major mining and industrial company committed to sustainable development and education.',
  },
  {
    name: 'Evasan',
    image: '/images/partners/evasan.png',
    href: 'https://www.evasan.com/',
    description: 'A leading company in business and technology services supporting innovation.',
  },
  {
    name: 'Sidi Ali',
    image: '/images/partners/sidi_ali.png',
    href: 'https://www.oulmes.ma/sidi-ali/',
    description:
      'A prominent beverage company committed to supporting communities and youth development.',
  },
  {
    name: 'AtlantaSanad',
    image: '/images/partners/atlanta_sanad.png',
    href: 'https://www.atlantasanad.ma/',
    description:
      'A financial services company dedicated to economic growth and social responsibility.',
  },
];
