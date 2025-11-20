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
    name: 'Programs',
    links: [
      { name: 'MTYM', href: 'https://mtym.mathmaroc.org/' },
      { name: 'MDM', href: 'https://mdm.mathmaroc.org/' },
      { name: 'MMC', href: 'https://mmc.mathmaroc.org/' },
      { name: 'Summer Camp', href: 'https://summercamp.mathmaroc.org/' },
      { name: 'FMA', href: 'https://fma.mathmaroc.org/'}
    ],
  },
  {
    name: 'Divisions',
    links: [
      { name: 'Olympiads', href: '/divisions/olympiads' },
      { name: 'Orientation', href: '/divisions/orientation' },
      { name: 'Conferences', href: '/divisions/orientation' },
      { name: 'Prepa', href: '/divisions/prepa' },
      { name: 'Physics Olympiads', href: '/divisions/physics-olympiads' },
    ],
  },
  {
    name: 'How we are',
    links: [
      { name: 'About us', href: '/about' },
      { name: 'Team', href: '/about#mathletes' },
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
