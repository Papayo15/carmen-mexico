'use client';

import Link from 'next/link';
import { useProgresoContext } from '@/context/ProgresoContext';
import ProgresoGrid from '@/components/progreso/ProgresoGrid';
import { contarCompletadasTotal } from '@/lib/progreso';

export default function ProgresoPage() {
  const { progreso, resetearProgreso, hidratado } = useProgresoContext();

  const totalCompletadas = hidratado ? contarCompletadasTotal(progreso) : 0;

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <Link href="/" className="text-orange-700 hover:text-orange-900 text-sm font-medium">
            ← Inicio
          </Link>
          <h1 className="text-3xl font-bold text-stone-800 mt-1">Mi Progreso</h1>
          <p className="text-stone-500 text-sm mt-1">
            {totalCompletadas} de 160 casos completados
          </p>
        </div>
        <button
          onClick={() => {
            if (confirm('¿Seguro que quieres borrar todo tu progreso?')) {
              resetearProgreso();
            }
          }}
          className="text-xs text-red-400 hover:text-red-600 underline transition-colors"
        >
          Reiniciar progreso
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
        <ProgresoGrid />
      </div>
    </main>
  );
}
