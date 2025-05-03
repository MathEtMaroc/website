import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from '../_data/footer-links';
import { socials } from '../_data/socials';
import ScrollToTopLink from './scroll-to-top-link';

export const Footer = () => {
  return (
    <footer className="relative z-[20] flex w-full justify-center bg-primary-900 py-12 md:pt-8">
      <div className="flex w-full max-w-7xl flex-col gap-y-12 px-4 md:px-8">
        <div className="flex w-full flex-col gap-y-12 md:flex-row md:gap-x-16">
          <div className="flex flex-col items-start gap-y-8 md:max-w-80">
            <Image
              alt="Math Maroc Logo"
              src="/logo-white.png"
              width={136}
              height={48}
              priority
              className="h-12 w-auto"
            />
            <div className="flex flex-col gap-y-4">
              <p className="text-pretty text-primary-50 md:text-lg">
                Empowering the next generation of Moroccan mathematicians
              </p>
              <ScrollToTopLink />
            </div>
          </div>
          <nav className="grid w-full grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
            {footerLinks.map((category) => (
              <div key={category.name} className="flex flex-col gap-y-4">
                <h3 className="font-semibold text-primary-200 text-sm">
                  {category.name}
                </h3>
                <ul className="flex flex-col gap-y-3">
                  {category.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        {...(link.href.startsWith('http')
                          ? {
                              target: '_blank',
                              rel: 'noopener noreferrer',
                            }
                          : {})}
                        className="flex items-center gap-x-2 font-semibold text-primary-100 transition-colors hover:text-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-100 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
                      >
                        {link.name}
                        {link.trailingIcon}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="flex w-full flex-col gap-y-8 border-primary-200 border-t pt-8 md:flex-row-reverse md:justify-between">
          <nav className="flex flex-row items-center justify-center gap-x-6">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                {...(social.href.startsWith('http')
                  ? {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    }
                  : {})}
                className="text-primary-200 transition-colors hover:text-primary-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-100 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
                aria-label={social.name}
              >
                {social.icon}
              </Link>
            ))}
          </nav>
          <p className="text-balance text-center text-primary-200">
            &copy; 2016 — 2025 Math & Maroc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
