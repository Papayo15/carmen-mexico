import type { EraMetadata, CasoInteractivo } from '@/lib/types';
import { CATEGORIA_ICONOS, CATEGORIA_LABELS } from '@/lib/types';

interface MisionHeaderProps {
  era: EraMetadata;
  caso: CasoInteractivo;
  onSalir: () => void;
}

export default function MisionHeader({ era, caso, onSalir }: MisionHeaderProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-6">
      <button
        onClick={onSalir}
        className="text-orange-700 hover:text-orange-900 text-sm font-medium transition-colors"
      >
        ← Volver
      </button>

      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-2xl">{era.icono}</span>
          <h1 className="text-xl font-bold text-stone-800 truncate">{era.titulo}</h1>
          <span className="text-sm px-2 py-0.5 bg-stone-100 rounded-full text-stone-600">
            {CATEGORIA_ICONOS[caso.categoria]} {CATEGORIA_LABELS[caso.categoria]}
          </span>
        </div>
        <p className="text-xs text-stone-400 mt-0.5">{era.periodo} · Caso {caso.numero} de 10 · {caso.materia}</p>
      </div>

      <button
        onClick={onSalir}
        className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-stone-500 border border-stone-300 rounded-lg hover:border-orange-400 hover:text-orange-700 transition-colors"
        title="Salir del caso"
      >
        💾 Salir
      </button>
    </div>
  );
}
