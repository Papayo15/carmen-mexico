import Link from 'next/link';
import type { EraSlug } from '@/lib/types';

interface ExplicacionPanelProps {
  texto: string;
  acertada: boolean;
  eraSlug: EraSlug;
  onReintentar?: () => void;
}

export default function ExplicacionPanel({ texto, acertada, eraSlug, onReintentar }: ExplicacionPanelProps) {
  return (
    <div className={`animate-in mt-6 p-6 border-2 rounded-2xl ${acertada ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-400'}`}>
      <p className={`text-lg font-bold mb-2 ${acertada ? 'text-green-700' : 'text-red-700'}`}>
        {acertada ? '🎉 ¡Misión cumplida!' : '🔎 ¡Casi! Sigue investigando'}
      </p>
      <p className="text-stone-700 italic font-serif leading-relaxed">{texto}</p>

      <div className="flex flex-wrap gap-3 mt-5">
        <Link
          href={`/${eraSlug}`}
          className="px-5 py-2 bg-orange-700 text-white rounded-lg font-semibold hover:bg-orange-800 transition-colors"
        >
          ← Elegir otro caso
        </Link>
        {!acertada && onReintentar && (
          <button
            onClick={onReintentar}
            className="px-5 py-2 bg-white border-2 border-orange-500 text-orange-700 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
          >
            Reintentar
          </button>
        )}
      </div>
    </div>
  );
}
