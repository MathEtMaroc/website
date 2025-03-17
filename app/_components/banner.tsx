import Link from 'next/link';

export function Banner() {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-y-1 bg-primary-950 px-4 py-3.5 text-left font-semibold text-white sm:flex-row sm:items-center">
      Moroccan Day of Mathematics 2025 is approaching ! &nbsp;
      <span className="font-normal text-primary-100">
        Learn more{' '}
        <Link className="underline" href="/">
          here.
        </Link>
      </span>
    </div>
  );
}
