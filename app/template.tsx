import { unstable_ViewTransition as ViewTransition } from 'react';
import type React from 'react';
import { Footer } from '~/app/_components/footer';
import { Navbar } from '~/app/_components/navbar';
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <ViewTransition name="page">{children}</ViewTransition>
      <Footer />
    </>
  );
}
