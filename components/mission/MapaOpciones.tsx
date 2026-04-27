import type { FaseMision } from '@/lib/types';
import OpcionCard from './OpcionCard';

interface MapaOpcionesProps {
  opciones: string[];
  seleccion: string | null;
  fase: FaseMision;
  respuestaCorrecta: string;
  onSeleccionar: (opcion: string) => void;
}

export default function MapaOpciones({ opciones, seleccion, fase, respuestaCorrecta, onSeleccionar }: MapaOpcionesProps) {
  return (
    <div>
      <h2 className="text-lg font-bold text-stone-700 uppercase tracking-wide mb-4 text-center">
        🗺️ ¿Cuál es el destino, Agente?
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {opciones.map((opc) => (
          <OpcionCard
            key={opc}
            estado={opc}
            seleccionada={seleccion === opc}
            esCorrecta={opc === respuestaCorrecta}
            fase={fase}
            onClick={() => onSeleccionar(opc)}
          />
        ))}
      </div>
    </div>
  );
}
