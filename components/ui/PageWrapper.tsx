import type { ReactNode } from 'react';

export default function PageWrapper({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <main className={`min-h-screen max-w-5xl mx-auto px-4 py-8 ${className}`}>
      {children}
    </main>
  );
}
