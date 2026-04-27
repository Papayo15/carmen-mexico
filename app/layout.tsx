import type { Metadata } from 'next';
import './globals.css';
import { ProgresoProvider } from '@/context/ProgresoContext';
import { ProfileProvider } from '@/context/ProfileContext';

export const metadata: Metadata = {
  title: 'Carmen México — El juego de detectives',
  description: 'Juego educativo de deducción basado en el programa SEP de México',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full bg-[#faf8f4]">
        <ProfileProvider>
          <ProgresoProvider>
            {children}
            <footer className="text-center py-6 text-xs text-stone-400 border-t border-stone-100 mt-10">
              Carmen México · Programa SEP · Todos los niveles educativos
            </footer>
          </ProgresoProvider>
        </ProfileProvider>
      </body>
    </html>
  );
}
