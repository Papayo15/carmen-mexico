import type { RetoMatematico } from '@/lib/types';

interface RetoSceneProps {
  reto: RetoMatematico;
  reto_respuesta: string | null;
  reto_correcto: boolean | null;
  intentos_reto: number;
  onResponder: (respuesta: string) => void;
  onReintentar: () => void;
  onContinuar: () => void;
}

export default function RetoScene({
  reto,
  reto_respuesta,
  reto_correcto,
  intentos_reto,
  onResponder,
  onReintentar,
  onContinuar,
}: RetoSceneProps) {
  const respondido = reto_respuesta !== null;
  const puedeReintentar = reto_correcto === false && intentos_reto < 2;
  const debeAvanzar = reto_correcto === true || (reto_correcto === false && intentos_reto >= 2);

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl border border-stone-200 p-5">
        <p className="text-sm font-semibold text-stone-500 uppercase tracking-wide mb-1">Escena 3 — Reto matemático</p>
        <p className="text-stone-700 leading-relaxed font-medium">{reto.enunciado}</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {reto.opciones_reto.map((opcion) => {
          const esElegida = reto_respuesta === opcion;
          const esCorrecta = opcion === reto.respuesta_reto;

          let clase = 'border-stone-200 bg-white text-stone-700 hover:border-orange-400 hover:bg-orange-50';
          if (respondido) {
            if (esCorrecta) {
              clase = 'border-green-500 bg-green-50 text-green-800';
            } else if (esElegida && !esCorrecta) {
              clase = 'border-red-400 bg-red-50 text-red-700';
            } else {
              clase = 'border-stone-100 bg-stone-50 text-stone-400 cursor-not-allowed';
            }
          }

          return (
            <button
              key={opcion}
              onClick={() => !respondido && onResponder(opcion)}
              disabled={respondido}
              className={`py-4 px-3 rounded-xl border-2 font-semibold text-center transition-all duration-150 ${clase}`}
            >
              {opcion}
              {respondido && esCorrecta && ' ✓'}
              {respondido && esElegida && !esCorrecta && ' ✗'}
            </button>
          );
        })}
      </div>

      {respondido && (
        <div className={`rounded-xl p-4 border ${reto_correcto ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
          {reto_correcto ? (
            <>
              <p className="font-bold text-green-800 mb-1">¡Correcto! 🎯</p>
              <p className="text-sm text-stone-600">{reto.pista_resultado}</p>
            </>
          ) : (
            <>
              <p className="font-bold text-red-700 mb-1">
                {puedeReintentar ? 'Incorrecto. Tienes otro intento.' : `Incorrecto. La respuesta era: ${reto.respuesta_reto}`}
              </p>
              {!puedeReintentar && <p className="text-sm text-stone-600">{reto.pista_resultado}</p>}
            </>
          )}
        </div>
      )}

      {respondido && puedeReintentar && (
        <button
          onClick={onReintentar}
          className="w-full py-3 border-2 border-orange-400 text-orange-700 rounded-xl font-bold hover:bg-orange-50 transition-colors"
        >
          Intentar de nuevo
        </button>
      )}

      {debeAvanzar && (
        <button
          onClick={onContinuar}
          className="w-full py-3 bg-orange-700 hover:bg-orange-800 text-white rounded-xl font-bold transition-colors"
        >
          ✈️ Ir al aeropuerto →
        </button>
      )}
    </div>
  );
}
