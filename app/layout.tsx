import { Caveat, Geist } from 'next/font/google';
import localFont from 'next/font/local';
import type React from 'react';
import './globals.css';
import { Banner } from '~/app/_components/banner';
import { Navbar } from '~/app/_components/navbar';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${caveat.variable} ${krypton.variable} font-sans antialiased`}
    >
      <body>
        <div className="flex w-full flex-col bg-[url('/paper.jpg')] bg-repeat">
          <main className="flex h-2000 w-full flex-col bg-white/60">
            <Navbar />
            {children}
            <Banner />
          </main>
        </div>
      </body>
    </html>
  );
}
