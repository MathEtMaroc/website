import type { JSX } from 'react';
import FacebookIcon from '../../public/icons/facebook.svg';
import InstagramIcon from '../../public/icons/instagram.svg';
import LinkedInIcon from '../../public/icons/linkedin.svg';
import YouTubeIcon from '../../public/icons/youtube.svg';

export type Social = {
  name: string;
  href: string;
  icon: JSX.Element;
};

export const socials: Social[] = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/mathemaroc/',
    icon: <LinkedInIcon />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/mathmaroc/',
    icon: <InstagramIcon />,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@mathmaroc1396',
    icon: <YouTubeIcon />,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/MathsMaroc2',
    icon: <FacebookIcon />,
  },
];
