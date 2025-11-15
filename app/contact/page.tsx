import Image from 'next/image';
import Link from 'next/link';
import AtSignIcon from '../../public/icons/at-sign.svg';

import { socials } from '../_data/socials';

export default function ContactPage() {
  return (
    <main className="flex w-full flex-col items-center bg-white min-h-screen pt-16 pb-24">
      <div className="w-full max-w-3xl px-4 md:px-8">
        <header className="mb-8 flex flex-col items-start gap-y-4">
          <h1 className="text-4xl font-semibold text-primary-900 tracking-tighter md:text-5xl">Contact Us</h1>
          <p className="text-lg text-gray-700 md:text-xl">
            We'd love to hear from you! Reach out to us via email or connect with us on social media.
          </p>
        </header>
        <section className="flex flex-col gap-y-8">
          <div className="flex items-center gap-x-4">
            <AtSignIcon className="size-7 text-primary-700" />
            <div>
              <h2 className="font-semibold text-lg text-primary-900">Email</h2>
              <Link
                href="mailto:contact@mathmaroc.org"
                className="font-krypton font-semibold text-primary-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              >
                contact@mathmaroc.org
              </Link>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-lg text-primary-900 mb-3">Social Media</h2>
            <ul className="flex gap-x-6 flex-wrap">
              {socials.map((social) => (
                <li key={social.name}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-y-2"
                  >
                    <span className="transition-transform duration-200 group-hover:scale-110" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36 }}>
                      {social.icon}
                    </span>
                    <span className="text-sm text-primary-700 font-medium group-hover:underline">{social.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
