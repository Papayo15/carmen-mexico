'use client';

import Link from 'next/link';
import type { CasoInteractivo, CasoResultado } from '@/lib/types';
import { CATEGORIA_ICONOS, getDificultad } from '@/lib/types';

interface CasoCardProps {
  caso: CasoInteractivo;
  eraSlug: string;
  resultado: CasoResultado | undefined;
  desbloqueado: boolean;
}

const DIFICULTAD_COLORS = {
  basico: 'bg-green-100 text-green-700',
  intermedio: 'bg-amber-100 text-amber-700',
  avanzado: 'bg-red-100 text-red-700',
};

const DIFICULTAD_LABELS = {
  basico: 'Básico',
  intermedio: 'Intermedio',
  avanzado: 'Avanzado',
};

export default function CasoCard({ caso, eraSlug, resultado, desbloqueado }: CasoCardProps) {
  const completado = resultado?.completada ?? false;
  const acertado = resultado?.acertada ?? false;
  const dificultad = getDificultad(caso.numero);

  if (!desbloqueado) {
    return (
      <div className="relative bg-stone-100 border-2 border-stone-200 rounded-xl p-4 opacity-60 cursor-not-allowed">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-stone-300 flex items-center justify-center text-stone-500 font-bold text-sm shrink-0">
            🔒
          </div>
          <div className="min-w-0">
            <p className="text-xs text-stone-400 font-medium">Caso {caso.numero}</p>
            <h3 className="font-bold text-stone-400 text-sm leading-tight">{caso.titulo}</h3>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link href={`/${eraSlug}/${caso.numero}`} className="block group">
      <div className={`relative border-2 rounded-xl p-4 shadow-sm transition-all duration-200
        group-hover:shadow-md
        ${completado
          ? acertado
            ? 'bg-green-50 border-green-400 group-hover:border-green-500'
            : 'bg-red-50 border-red-300 group-hover:border-red-400'
          : 'bg-white border-stone-200 group-hover:border-orange-300'
        }`}>

        {completado && (
          <div className="absolute top-2 right-2 text-lg">
            {acertado ? '✅' : '❌'}
          </div>
        )}

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-sm font-bold text-orange-700 shrink-0">
            {caso.numero}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-1.5 mb-1">
              <span className="text-xs">{CATEGORIA_ICONOS[caso.categoria as keyof typeof CATEGORIA_ICONOS]}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${DIFICULTAD_COLORS[dificultad]}`}>
                {DIFICULTAD_LABELS[dificultad]}
              </span>
            </div>
            <h3 className="font-bold text-stone-800 text-sm leading-tight">{caso.titulo}</h3>
            <p className="text-xs text-stone-400 mt-0.5">{caso.concepto_clave}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
