'use client';

import { useProgresoContext } from '@/context/ProgresoContext';
import EraCard from './EraCard';
import { ERA_LIST } from '@/data/eras';

export default function EraGrid() {
  const { progreso, hidratado } = useProgresoContext();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-6">
      {ERA_LIST.map((era) => (
        <EraCard
          key={era.metadata.slug}
          era={era.metadata}
          progreso={hidratado ? progreso[era.metadata.slug] : { era: era.metadata.slug, casos: {} }}
        />
      ))}
    </div>
  );
}
