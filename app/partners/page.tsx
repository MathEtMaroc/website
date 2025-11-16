import Image from 'next/image';
import Link from 'next/link';
import { partnersWithDescriptions } from '../_data/partners-descriptions';
import ArrowRightIcon from '../../public/icons/arrow-right.svg';

export const metadata = {
  title: 'Our Partners',
};

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        {/* Header */}
        <header className="mb-16 flex flex-col items-start gap-y-6">
          <div>
            <h1 className="text-4xl font-semibold text-gray-900 tracking-tighter md:text-5xl">
              Our Partners
            </h1>
            <p className="mt-3 text-lg text-gray-600 md:text-xl">
              We collaborate with leading organizations across Morocco to advance mathematics and science education.
            </p>
          </div>
        </header>

        {/* Partners Grid */}
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {partnersWithDescriptions.map((partner) => (
            <Link
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-y-4 rounded-xl bg-white p-6 shadow-sm border border-gray-100 transition-all hover:shadow-lg hover:border-primary-200"
            >
              {/* Logo Container */}
              <div className="flex h-24 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-primary-50 transition-colors">
                <Image
                  src={partner.preserveColor ? partner.image2! : partner.image}
                  alt={partner.name}
                  width={200}
                  height={100}
                  className="h-full w-auto object-contain p-4"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-y-2 flex-1">
                <h3 className="font-semibold text-lg text-gray-900 group-hover:text-primary-700 transition-colors line-clamp-2">
                  {partner.name}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3 flex-1">
                  {partner.description}
                </p>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-x-2 text-sm font-medium text-primary-700 group-hover:text-primary-800 transition-colors pt-2 border-t border-gray-100">
                <span>Visit Website</span>
                <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </section>

        {/* CTA Section */}
        <section className="mt-20 rounded-xl bg-gradient-to-r from-primary-50 to-primary-100/50 p-8 md:p-12 border border-primary-200">
          <h2 className="text-2xl font-semibold text-primary-900 md:text-3xl mb-4">
            Interested in becoming a partner?
          </h2>
          <p className="text-primary-800 mb-6 max-w-2xl">
            Join us in our mission to unlock the scientific potential of Moroccan youth. We welcome partners who share our vision of advancing mathematics and science education.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-x-2 bg-primary-700 px-6 py-3 font-semibold text-white rounded-lg hover:bg-primary-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
          >
            <span>Get in Touch</span>
            <ArrowRightIcon className="size-5" />
          </Link>
        </section>
      </div>
    </main>
  );
}
