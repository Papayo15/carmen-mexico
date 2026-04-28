import type { Investigacion1 } from '@/lib/types';

interface TestigosSceneProps {
  investigacion1: Investigacion1;
  testigo_elegido: number | null;
  onElegir: (indice: number, pista: string) => void;
  onContinuar: () => void;
}

export default function TestigosScene({ investigacion1, testigo_elegido, onElegir, onContinuar }: TestigosSceneProps) {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl border border-stone-200 p-5">
        <p className="text-sm font-semibold text-stone-500 uppercase tracking-wide mb-1">Escena 1 — Testigos</p>
        <p className="text-stone-700">Elige un lugar para interrogar testigos. Solo podrás elegir uno.</p>
      </div>

      <div className="space-y-3">
        {investigacion1.lugares.map((lugar, i) => {
          const elegido = testigo_elegido === i;
          const bloqueado = testigo_elegido !== null && !elegido;

          return (
            <button
              key={i}
              onClick={() => !bloqueado && onElegir(i, lugar.pista)}
              disabled={bloqueado}
              className={`w-full text-left rounded-2xl border-2 p-4 transition-all duration-150 ${
                elegido
                  ? 'border-orange-500 bg-orange-50 ring-2 ring-orange-300'
                  : bloqueado
                  ? 'border-stone-100 bg-stone-50 opacity-40 cursor-not-allowed'
                  : 'border-stone-200 bg-white hover:border-orange-400 hover:bg-orange-50'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl">{lugar.icono}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-stone-800">{lugar.lugar}</p>
                  <p className="text-sm text-stone-500">Testigo: {lugar.testigo}</p>
                  {elegido && (
                    <div className="mt-3 bg-amber-50 rounded-xl p-3 border border-amber-200">
                      <p className="text-xs font-semibold text-amber-700 mb-1">Declaración del testigo:</p>
                      <p className="text-sm text-stone-700 leading-relaxed italic">"{lugar.pista}"</p>
                    </div>
                  )}
                </div>
                {elegido && <span className="text-orange-500 text-xl shrink-0">✓</span>}
              </div>
            </button>
          );
        })}
      </div>

      {testigo_elegido !== null && (
        <button
          onClick={onContinuar}
          className="w-full py-3 bg-orange-700 hover:bg-orange-800 text-white rounded-xl font-bold transition-colors"
        >
          Continuar al rastro →
        </button>
      )}
    </div>
  );
}
