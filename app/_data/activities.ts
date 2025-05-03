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
    title: 'Moroccan Day of Mathematics',
    description:
      'An annual celebration bringing together students, teachers, and researchers to explore the beauty of mathematics through interactive workshops, engaging lectures, and collaborative problem-solving activities. This nationwide event aims to inspire a love for mathematics in Moroccan youth.',
    linkText: 'Explore MDM',
    linkHref: '/',
    imageSrc: '/images/activities/mdm.png',
    imageAlt: 'Moroccan Day of Mathematics',
    highlight: 'coming later this year !',
  },
  {
    title: 'Moroccan Tournament of Young Mathematicians',
    description:
      'A team-based competition challenging high school students to solve complex, open-ended mathematical problems. Participants develop research skills, creative thinking, and collaborative abilities while preparing written solutions and defending them in mathematical debates against other teams.',
    linkText: 'Explore MTYM',
    linkHref: '/',
    imageSrc: '/images/activities/mtym.jpg',
    imageAlt: 'Moroccan Tournament of Young Mathematicians',
  },
  {
    title: 'Maths & Maroc Competition',
    description:
      'Our flagship individual competition designed to discover and nurture mathematical talent across Morocco. Through multiple rounds of increasingly challenging problems, participants develop critical thinking skills and mathematical reasoning while competing for recognition and prizes.',
    linkText: 'Explore MMC',
    linkHref: '/',
    imageSrc: '/images/activities/mmc.jpg',
    imageAlt: 'Maths & Maroc Competition',
  },
  {
    title: 'Summer Camp',
    description:
      'An immersive week-long residential experience where talented students explore advanced mathematical concepts beyond the school curriculum. Guided by expert mentors, participants engage in intensive workshops, problem-solving sessions, and recreational activities in a supportive community of peers.',
    linkText: 'Explore Summer Camp',
    linkHref: '/',
    imageSrc: '/images/activities/summer-camp.jpg',
    imageAlt: 'Summer Camp',
  },
];
