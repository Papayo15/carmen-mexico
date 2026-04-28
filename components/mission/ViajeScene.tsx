interface ViajeSceneProps {
  opciones: [string, string, string, string];
  seleccion_final: string | null;
  intentos_viaje: number;
  respuesta_correcta: string;
  onElegir: (opcion: string) => void;
}

export default function ViajeScene({
  opciones,
  seleccion_final,
  intentos_viaje,
  respuesta_correcta,
  onElegir,
}: ViajeSceneProps) {
  const respondido = seleccion_final !== null && intentos_viaje > 0;
  const acertado = seleccion_final === respuesta_correcta;
  const puedeElegirOtro = respondido && !acertado && intentos_viaje < 2;

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl border border-stone-200 p-5">
        <p className="text-sm font-semibold text-stone-500 uppercase tracking-wide mb-1">Escena final — Persecución</p>
        <p className="text-stone-700">
          Con todas las pistas reunidas, ¿a qué estado huyó el sospechoso?
          {puedeElegirOtro && <span className="text-orange-600 font-medium"> (Tienes un intento más.)</span>}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {opciones.map((opcion) => {
          const esElegida = seleccion_final === opcion;
          const esCorrecta = opcion === respuesta_correcta;
          const yaRespondioCorrectamente = respondido && acertado;
          const sinOportunidades = respondido && !acertado && intentos_viaje >= 2;

          let clase = 'border-stone-200 bg-white text-stone-700 hover:border-orange-400 hover:bg-orange-50';

          if (yaRespondioCorrectamente || sinOportunidades) {
            if (esCorrecta) {
              clase = 'border-green-500 bg-green-50 text-green-800';
            } else if (esElegida && !esCorrecta) {
              clase = 'border-red-400 bg-red-50 text-red-700';
            } else {
              clase = 'border-stone-100 bg-stone-50 text-stone-400 cursor-not-allowed';
            }
          } else if (puedeElegirOtro) {
            if (esElegida) {
              clase = 'border-red-400 bg-red-50 text-red-700 cursor-not-allowed';
            }
          }

          const deshabilitado = (yaRespondioCorrectamente || sinOportunidades) || (puedeElegirOtro && esElegida);

          return (
            <button
              key={opcion}
              onClick={() => !deshabilitado && onElegir(opcion)}
              disabled={deshabilitado}
              className={`py-5 px-3 rounded-xl border-2 font-bold text-center transition-all duration-150 ${clase}`}
            >
              📍 {opcion}
              {(yaRespondioCorrectamente || sinOportunidades) && esCorrecta && ' ✓'}
              {(yaRespondioCorrectamente || sinOportunidades) && esElegida && !esCorrecta && ' ✗'}
            </button>
          );
        })}
      </div>
    </div>
  );
}
