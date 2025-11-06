export type ActivityType = {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  imageSrc: string;
  imageAlt: string;
  highlight?: string;
};

export const activities: ActivityType[] = [
  {
    title: 'Moroccan Tournament of Young Mathematicians',
    description:
      'A team-based competition challenging high school students to solve complex, open-ended mathematical problems. Participants develop research skills, creative thinking, and collaborative abilities while preparing written solutions and defending them in mathematical debates against other teams.',
    linkText: 'Explore MTYM',
    linkHref: 'https://mtym.mathmaroc.org/',
    imageSrc: '/images/activities/MTYM.webp',
    imageAlt: 'Moroccan Tournament of Young Mathematicians',
  },
  {
    title: 'Maths & Maroc Competition',
    description:
      'Our flagship individual competition designed to discover and nurture mathematical talent across Morocco. Through multiple rounds of increasingly challenging problems, participants develop critical thinking skills and mathematical reasoning while competing for recognition and prizes.',
    linkText: 'Explore MMC',
    linkHref: 'https://mmc.mathmaroc.org/',
    imageSrc: '/images/activities/MMC.webp',
    imageAlt: 'Maths & Maroc Competition',
  },
  {
    title: 'Moroccan Day of Mathematics',
    description:
      'An annual celebration bringing together students, teachers, and researchers to explore the beauty of mathematics through interactive workshops, engaging lectures, and collaborative problem-solving activities. This nationwide event aims to inspire a love for mathematics in Moroccan youth.',
    linkText: 'Explore MDM',
    linkHref: 'https://mdm.mathmaroc.org/',
    imageSrc: '/images/activities/MDM.webp',
    imageAlt: 'Moroccan Day of Mathematics',
    highlight: 'coming later this year !',
  },
  {
    title: 'Summer Camp',
    description:
      'An immersive week-long residential experience where talented students explore advanced mathematical concepts beyond the school curriculum. Guided by expert mentors, participants engage in intensive workshops, problem-solving sessions, and recreational activities in a supportive community of peers.',
    linkText: 'Explore Summer Camp',
    linkHref: 'https://summercamp.mathmaroc.org/',
    imageSrc: '/images/activities/summer-camp.webp',
    imageAlt: 'Summer Camp',
  },
];
