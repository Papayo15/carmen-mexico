import type { FaseMision } from '@/lib/types';

interface OpcionCardProps {
  estado: string;
  seleccionada: boolean;
  esCorrecta: boolean;
  fase: FaseMision;
  onClick: () => void;
}

export default function OpcionCard({ estado, seleccionada, esCorrecta, fase, onClick }: OpcionCardProps) {
  const jugando = fase === 'jugando';

  let cls = 'w-full p-4 text-center font-bold text-sm border-2 rounded-xl transition-all duration-200 ';

  if (jugando) {
    cls += seleccionada
      ? 'bg-orange-100 border-orange-500 text-orange-800 scale-95'
      : 'bg-white border-stone-200 text-stone-700 hover:border-orange-400 hover:shadow-md hover:-translate-y-0.5 cursor-pointer';
  } else {
    if (esCorrecta) {
      cls += 'bg-green-100 border-green-600 text-green-800 cursor-default';
    } else if (seleccionada) {
      cls += 'bg-red-100 border-red-500 text-red-700 cursor-default';
    } else {
      cls += 'bg-white border-stone-200 text-stone-400 cursor-default opacity-50';
    }
  }

  return (
    <button onClick={jugando ? onClick : undefined} disabled={!jugando} className={cls}>
      {!jugando && esCorrecta && <span className="mr-1">✅</span>}
      {!jugando && seleccionada && !esCorrecta && <span className="mr-1">❌</span>}
      {estado}
    </button>
  );
}
