'use client';

import { useProfile } from '@/context/ProfileContext';
import { useProgresoContext } from '@/context/ProgresoContext';
import { contarCompletadasTotal } from '@/lib/progreso';
import WelcomeScreen from '@/components/landing/WelcomeScreen';
import EraGrid from '@/components/eras/EraGrid';
import Link from 'next/link';

const NIVEL_LABEL: Record<string, string> = {
  junior: '🌱 Junior',
  explorador: '🔍 Explorador',
  elite: '⭐ Élite',
};

export default function HomePage() {
  const { profile, hidratado: profileHidratado, guardarProfile, borrarProfile } = useProfile();
  const { progreso, hidratado: progresoHidratado, resetearProgreso } = useProgresoContext();

  // Sin perfil (o aún sin hidratar) → pantalla de bienvenida
  // Nunca retorna null para que el HTML inicial tenga contenido
  if (!profile) {
    return <WelcomeScreen onContinuar={guardarProfile} />;
  }

  const totalCompletadas = progresoHidratado ? contarCompletadasTotal(progreso) : 0;

  return (
    <main className="min-h-screen max-w-5xl mx-auto px-4 pb-12 pt-6">
      {/* Saludo personalizado */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <p className="text-sm text-stone-400 font-medium">Bienvenido de regreso,</p>
          <h1 className="text-3xl font-bold text-orange-800" style={{ fontFamily: 'Georgia, serif' }}>
            {profile.nombre} 🔎
          </h1>
          <span className="inline-block mt-1 text-xs px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full font-medium">
            {NIVEL_LABEL[profile.nivel]} · {totalCompletadas}/160 casos
          </span>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Link
            href="/progreso"
            className="text-sm px-4 py-2 border border-stone-300 rounded-lg text-stone-600 hover:border-orange-400 hover:text-orange-700 transition-colors"
          >
            Mi progreso
          </Link>
          <button
            onClick={() => {
              if (confirm('¿Cambiar de agente? Podrás volver con el mismo perfil.')) {
                borrarProfile();
              }
            }}
            className="text-sm px-4 py-2 border border-stone-300 rounded-lg text-stone-600 hover:border-red-300 hover:text-red-500 transition-colors"
          >
            Cambiar agente
          </button>
        </div>
      </div>

      {/* Grid de eras */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-bold text-stone-700">Las 16 Eras de México</h2>
        <span className="text-xs text-stone-400">{totalCompletadas} de 160 casos completados</span>
      </div>

      <EraGrid />
    </main>
  );
}
