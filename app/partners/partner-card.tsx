import type { PartnerWithDescription } from '../_data/partners-descriptions';
import Image from 'next/image';
import Link from 'next/link';
import ArrowRightIcon from '../../public/icons/arrow-right.svg';

export default function PartnerCard({ partner }: { partner: PartnerWithDescription }) {
  return (
    <Link
      href={partner.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col gap-y-4 rounded-xl bg-white p-6 shadow-sm border border-gray-100 transition-all hover:shadow-lg hover:border-primary-200"
    >
      {/* Official Partner Badge */}
      {partner.officialPartner && (
        <span className="absolute top-3 right-3 bg-primary-700 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          Official Partner
        </span>
      )}

      <div className="flex h-24 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-primary-50 transition-colors">
        <Image
          src={partner.preserveColor ? partner.image2! : partner.image}
          alt={partner.name}
          width={200}
          height={100}
          className="h-full w-auto object-contain p-4"
        />
      </div>

      <div className="flex flex-col gap-y-2 flex-1">
        <h3 className="font-semibold text-lg text-gray-900 group-hover:text-primary-700 transition-colors line-clamp-2">
          {partner.name}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-3 flex-1">{partner.description}</p>
      </div>

      <div className="flex items-center gap-x-2 text-sm font-medium text-primary-700 group-hover:text-primary-800 transition-colors pt-2 border-t border-gray-100">
        <span>Visit Website</span>
        <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
