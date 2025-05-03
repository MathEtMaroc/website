import type { JSX } from 'react';
import DownloadCloudIcon from '../../public/icons/download-cloud.svg';
import { socials } from './socials';

export type FooterLink = {
  name: string;
  href: string;
  trailingIcon?: JSX.Element;
};

export type FooterCategory = {
  name: string;
  links: FooterLink[];
};

export const footerLinks: FooterCategory[] = [
  {
    name: 'Actions',
    links: [
      { name: 'MMC', href: '#' },
      { name: 'MTYM', href: '#' },
      { name: 'AI Hackathon', href: '#' },
      { name: 'MDM', href: '#' },
      { name: 'Summer Camp', href: '#' },
    ],
  },
  {
    name: 'Divisions',
    links: [
      { name: 'Olympiads', href: '#' },
      { name: 'Orientation', href: '#' },
      { name: 'Conferences', href: '#' },
      { name: 'Prepa', href: '#' },
    ],
  },
  {
    name: 'How we are',
    links: [
      { name: 'Team', href: '#' },
      { name: 'Partners', href: '#' },
      {
        name: 'Media kit',
        href: '#',
        trailingIcon: <DownloadCloudIcon className="size-5" />,
      },
    ],
  },
  {
    name: 'Social',
    links: socials.map((social) => ({
      name: social.name,
      href: social.href,
    })),
  },
];
