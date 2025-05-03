export type Stat = {
  title: string;
  number: number;
  suffix?: string;
};

export const stats: Stat[] = [
  {
    title: 'Members & volunteers',
    number: 100,
    suffix: '+',
  },
  {
    title: 'Participants in the last 12 months',
    number: 500,
    suffix: '+',
  },
  {
    title: 'Divisions',
    number: 14,
    suffix: '+',
  },
  {
    title: 'Followers on social media',
    number: 50000,
    suffix: '+',
  },
];
