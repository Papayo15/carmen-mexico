'use client';

import Link from 'next/link';
import { useProgresoContext } from '@/context/ProgresoContext';
import { ERA_LIST } from '@/data/eras';
import { contarCompletadasEra } from '@/lib/progreso';
import { CATEGORIA_ICONOS } from '@/lib/types';
import type { CategoriaCase } from '@/lib/types';

const CATEGORIAS: { cat: CategoriaCase; label: string }[] = [
  { cat: 'grandes-hitos', label: 'Hitos' },
  { cat: 'ciencia-y-saberes', label: 'Ciencia' },
  { cat: 'vida-cotidiana', label: 'Vida' },
  { cat: 'civismo-y-etica', label: 'Cívica' },
  { cat: 'cruce-global', label: 'Global' },
];

export default function ProgresoGrid() {
  const { progreso, hidratado } = useProgresoContext();

  if (!hidratado) return <div className="text-center py-10 text-stone-400">Cargando progreso...</div>;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-orange-50">
            <th className="text-left p-3 border border-stone-200 text-stone-600 font-semibold min-w-[160px]">Era</th>
            <th className="p-3 border border-stone-200 text-center text-stone-600 font-semibold">1–3<br/><span className="text-xs font-normal">{CATEGORIA_ICONOS['grandes-hitos']}</span></th>
            <th className="p-3 border border-stone-200 text-center text-stone-600 font-semibold">4–5<br/><span className="text-xs font-normal">{CATEGORIA_ICONOS['ciencia-y-saberes']}</span></th>
            <th className="p-3 border border-stone-200 text-center text-stone-600 font-semibold">6–7<br/><span className="text-xs font-normal">{CATEGORIA_ICONOS['vida-cotidiana']}</span></th>
            <th className="p-3 border border-stone-200 text-center text-stone-600 font-semibold">8–9<br/><span className="text-xs font-normal">{CATEGORIA_ICONOS['civismo-y-etica']}</span></th>
            <th className="p-3 border border-stone-200 text-center text-stone-600 font-semibold">10<br/><span className="text-xs font-normal">{CATEGORIA_ICONOS['cruce-global']}</span></th>
            <th className="p-3 border border-stone-200 text-center text-stone-600 font-semibold">Total</th>
          </tr>
        </thead>
        <tbody>
          {ERA_LIST.map((era) => {
            const ep = progreso[era.metadata.slug];
            const completadas = contarCompletadasEra(ep);

            const grupos = [
              [1, 2, 3],
              [4, 5],
              [6, 7],
              [8, 9],
              [10],
            ];

            return (
              <tr key={era.metadata.slug} className="hover:bg-orange-50 transition-colors">
                <td className="p-3 border border-stone-200 font-medium text-stone-700">
                  <Link href={`/${era.metadata.slug}`} className="hover:text-orange-700 transition-colors">
                    {era.metadata.icono} {era.metadata.titulo}
                  </Link>
                </td>
                {grupos.map((nums, gi) => (
                  <td key={gi} className="p-3 border border-stone-200 text-center">
                    <div className="flex justify-center gap-0.5">
                      {nums.map((n) => {
                        const res = ep?.casos[n];
                        return (
                          <span key={n} className="text-base">
                            {res?.completada
                              ? res.acertada ? '✅' : '❌'
                              : <span className="text-stone-200">○</span>}
                          </span>
                        );
                      })}
                    </div>
                  </td>
                ))}
                <td className="p-3 border border-stone-200 text-center">
                  <span className={`text-sm font-bold ${completadas === 10 ? 'text-green-600' : 'text-stone-500'}`}>
                    {completadas}/10
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
