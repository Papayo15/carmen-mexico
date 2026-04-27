'use client';

import type { Era } from '@/lib/types';
import type { EraProgreso } from '@/lib/types';
import { casoDesbloqueado } from '@/lib/progreso';
import CasoCard from './CasoCard';

interface CasosGridProps {
  era: Era;
  progreso: EraProgreso;
}

export default function CasosGrid({ era, progreso }: CasosGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {era.casos.map((caso) => (
        <CasoCard
          key={caso.numero}
          caso={caso}
          eraSlug={era.metadata.slug}
          resultado={progreso.casos[caso.numero]}
          desbloqueado={casoDesbloqueado(progreso, caso.numero)}
        />
      ))}
    </div>
  );
}
