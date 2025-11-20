import { Caveat, Geist } from 'next/font/google';
import localFont from 'next/font/local';
import type React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { ScreenSize } from '~/app/_components/screen-size';
import { ScrollToTop } from '~/app/_components/scroll-to-top';
import FloatingSocials from '~/app/_components/floating-socials';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const caveat = Caveat({
  variable: '--font-caveat',
  subsets: ['latin'],
});

const krypton = localFont({
  src: './fonts/monaspace-krypton.ttf',
  variable: '--font-krypton',
});

export const metadata: Metadata = {
  title: {
    template: 'Math&Maroc | %s',
    default:
      'Math&Maroc | Unlocking the scientific potential of Moroccan youth',
  },
  description:
    'First Moroccan non-profit math related educational association dedicated to unlocking the scientific potential of Moroccan youth.',
  keywords: [
    'mathematics',
    'math',
    'maths',
    'morocco',
    'education',
    'non-profit',
    'youth development',
    'maths club',
    'maths club maroc',
    'olympiad',
    'competition',
    'mathematics olympiad',
    'mathematics competition',
    'mathematics olympiad',
  ],
  authors: [{ name: 'Math & Maroc Team' }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'),
  creator: 'Math & Maroc',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_URL,
    siteName: 'Math & Maroc',
    title:
      'Math & Maroc | Unlocking the scientific potential of Moroccan youth',
    description:
      'First Moroccan non-profit math related educational association dedicated to unlocking the scientific potential of Moroccan youth.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Math & Maroc',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Math & Maroc | Unlocking the scientific potential of Moroccan youth',
    description:
      'First Moroccan non-profit math related educational association dedicated to unlocking the scientific potential of Moroccan youth.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [{ url: '/favicon.ico' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${caveat.variable} ${krypton.variable} scroll-smooth font-sans antialiased`}
    >
      <body>
        <div className="flex w-full flex-col bg-[url('/paper.jpeg')] bg-fixed bg-cover">
          <main className="flex w-full flex-col bg-white/60">
            {children}
            <FloatingSocials />
            <ScrollToTop />
            {process.env.NODE_ENV === 'development' && <ScreenSize />}
          </main>
        </div>
      </body>
    </html>
  );
}
