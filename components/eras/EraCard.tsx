'use client';

import Link from 'next/link';
import type { EraMetadata } from '@/lib/types';
import type { EraProgreso } from '@/lib/types';
import { contarCompletadasEra } from '@/lib/progreso';

interface EraCardProps {
  era: EraMetadata;
  progreso: EraProgreso;
}

export default function EraCard({ era, progreso }: EraCardProps) {
  const completadas = contarCompletadasEra(progreso);
  const total = 10;
  const porcentaje = Math.round((completadas / total) * 100);

  return (
    <Link href={`/${era.slug}`} className="block group">
      <div className="relative bg-white border-2 border-stone-200 rounded-xl p-4 shadow-sm group-hover:shadow-md group-hover:border-orange-300 transition-all duration-200">
        {completadas === total && (
          <div className="absolute top-2 right-2 text-lg">✅</div>
        )}

        <div className="text-3xl mb-2">{era.icono}</div>
        <h3 className="font-bold text-stone-800 text-sm leading-tight">{era.titulo}</h3>
        <p className="text-xs text-stone-400 mt-1">{era.periodo}</p>

        <div className="mt-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-stone-500">{completadas}/{total} casos</span>
            <span className="text-xs text-orange-700 font-medium">{porcentaje}%</span>
          </div>
          <div className="w-full bg-stone-100 rounded-full h-1.5">
            <div
              className="bg-orange-500 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${porcentaje}%` }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
