export type Stat = {
  title: string;
  number: number;
  suffix?: string;
};

export const stats: Stat[] = [
  {
    title: 'members from top universities worldwide',
    number: 170,
    suffix: '+',
  },
  {
    title: 'Participants in the last 12 months',
    number: 2000,
    suffix: '+',
  },
  {
    title: 'Divisions & Annual Events',
    number: 10,
    suffix: '+',
  },
  {
    title: 'Followers on social media',
    number: 100_000,
    suffix: '+',
  },
];
