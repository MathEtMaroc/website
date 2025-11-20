import Link from 'next/link';
import { companyPartners, academicPartners } from '../_data/partners-descriptions';
import ArrowRightIcon from '../../public/icons/arrow-right.svg';
import PartnerCard from './partner-card';

export const metadata = {
  title: 'Our Partners',
};

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
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

        {/* Companies */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Companies</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {companyPartners.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
          </div>
        </section>

        {/* Academic Institutions */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Academic Institutions</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {academicPartners.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 rounded-xl bg-gradient-to-r from-primary-50 to-primary-100/50 p-8 md:p-12 border border-primary-200">
          <h2 className="text-2xl font-semibold text-primary-900 md:text-3xl mb-4">
            Interested in becoming a partner?
          </h2>
          <p className="text-primary-800 mb-6 max-w-2xl">
            Join us in our mission to unlock the scientific potential of Moroccan youth. We welcome partners who
            share our vision of advancing mathematics and science education.
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
