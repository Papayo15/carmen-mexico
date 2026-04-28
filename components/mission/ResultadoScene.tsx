import Link from 'next/link';
import type { EraSlug } from '@/lib/types';

interface ResultadoSceneProps {
  acertada: boolean;
  explicacion: string;
  eraSlug: EraSlug;
  numeroCaso: number;
}

export default function ResultadoScene({ acertada, explicacion, eraSlug, numeroCaso }: ResultadoSceneProps) {
  const siguienteCaso = numeroCaso + 1;

  return (
    <div className={`rounded-2xl border-2 p-6 ${acertada ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}`}>
      <div className="text-center mb-4">
        <div className="text-5xl mb-3">{acertada ? '🎉' : '😓'}</div>
        <h2 className={`text-2xl font-bold ${acertada ? 'text-green-800' : 'text-red-800'}`}>
          {acertada ? '¡Caso resuelto!' : 'El sospechoso escapó'}
        </h2>
      </div>

      <div className="bg-white rounded-xl p-4 border border-stone-200 mb-5">
        <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">Triangulación de pistas</p>
        <p className="text-stone-700 leading-relaxed text-sm">{explicacion}</p>
      </div>

      <div className="flex gap-3">
        {siguienteCaso <= 10 ? (
          <Link
            href={`/${eraSlug}/${siguienteCaso}`}
            className="flex-1 py-3 bg-orange-700 text-white rounded-xl font-bold text-center hover:bg-orange-800 transition-colors"
          >
            Siguiente caso →
          </Link>
        ) : (
          <Link
            href={`/${eraSlug}`}
            className="flex-1 py-3 bg-orange-700 text-white rounded-xl font-bold text-center hover:bg-orange-800 transition-colors"
          >
            Ver era completa →
          </Link>
        )}
        <Link
          href="/"
          className="flex-1 py-3 border-2 border-stone-300 text-stone-600 rounded-xl font-bold text-center hover:border-orange-400 hover:text-orange-700 transition-colors"
        >
          Inicio
        </Link>
      </div>
    </div>
  );
}
