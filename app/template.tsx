import { unstable_ViewTransition as ViewTransition } from 'react';
import type React from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  return <ViewTransition name="page">{children}</ViewTransition>;
}
