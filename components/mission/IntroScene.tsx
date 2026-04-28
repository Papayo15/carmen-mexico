import type { CasoInteractivo } from '@/lib/types';

interface IntroSceneProps {
  caso: CasoInteractivo;
  onIniciar: () => void;
}

export default function IntroScene({ caso, onIniciar }: IntroSceneProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl border-2 border-amber-200 shadow-lg overflow-hidden">
        <div className="bg-amber-700 px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🚨</span>
            <div>
              <p className="text-amber-200 text-xs font-semibold uppercase tracking-wide">¡Alerta de robo!</p>
              <h2 className="text-white text-xl font-bold">{caso.titulo}</h2>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
            <p className="text-sm font-semibold text-amber-800 mb-1">Objeto robado</p>
            <p className="text-stone-700 font-medium">🏺 {caso.investigacion1.objeto_robado}</p>
          </div>

          <p className="text-stone-600 leading-relaxed">{caso.investigacion1.narrativa}</p>

          <div className="bg-stone-50 rounded-xl p-4 border border-stone-200">
            <p className="text-xs text-stone-500 font-semibold uppercase tracking-wide mb-1">Tu misión</p>
            <p className="text-stone-700 text-sm">
              Interroga testigos, sigue el rastro y resuelve el reto para atrapar al ladrón antes de que escape.
            </p>
          </div>
        </div>

        <div className="px-6 pb-6">
          <button
            onClick={onIniciar}
            className="w-full py-4 bg-orange-700 hover:bg-orange-800 text-white rounded-xl font-bold text-lg transition-colors shadow-md active:scale-95"
          >
            🔎 Comenzar investigación
          </button>
        </div>
      </div>
    </div>
  );
}
