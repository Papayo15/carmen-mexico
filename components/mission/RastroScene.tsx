import type { Investigacion2 } from '@/lib/types';

interface RastroSceneProps {
  investigacion2: Investigacion2;
  onResolverReto: () => void;
}

export default function RastroScene({ investigacion2, onResolverReto }: RastroSceneProps) {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl border border-stone-200 p-5">
        <p className="text-sm font-semibold text-stone-500 uppercase tracking-wide mb-1">Escena 2 — Rastro caliente</p>
        <p className="text-stone-700">{investigacion2.narrativa}</p>
      </div>

      <div className="bg-blue-50 rounded-2xl border border-blue-200 p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">🌍</span>
          <p className="font-semibold text-blue-800 text-sm">Conexión internacional</p>
        </div>
        <p className="text-stone-700 leading-relaxed">{investigacion2.pista_mundial}</p>
      </div>

      <div className="bg-amber-50 rounded-2xl border border-amber-200 p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">📖</span>
          <p className="font-semibold text-amber-800 text-sm">Libreta de campo</p>
        </div>
        <p className="text-stone-600 text-sm leading-relaxed">{investigacion2.libreta}</p>
      </div>

      <button
        onClick={onResolverReto}
        className="w-full py-3 bg-orange-700 hover:bg-orange-800 text-white rounded-xl font-bold transition-colors"
      >
        🧮 Resolver reto matemático →
      </button>
    </div>
  );
}
