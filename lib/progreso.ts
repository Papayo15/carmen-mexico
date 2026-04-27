import type { EraSlug, CasoResultado, EraProgreso, ProgresoTotal } from '@/lib/types';
import { ERAS_VALIDAS } from '@/lib/utils';

export function initProgreso(): ProgresoTotal {
  return Object.fromEntries(
    ERAS_VALIDAS.map((slug) => [
      slug,
      { era: slug, casos: {} } satisfies EraProgreso,
    ])
  ) as ProgresoTotal;
}

export function actualizarProgreso(
  progreso: ProgresoTotal,
  era: EraSlug,
  numero: number,
  acertada: boolean,
  intentos: number
): ProgresoTotal {
  const resultado: CasoResultado = {
    completada: true,
    acertada,
    intentos,
    fecha: new Date().toISOString(),
  };
  return {
    ...progreso,
    [era]: {
      ...progreso[era],
      casos: { ...progreso[era].casos, [numero]: resultado },
    },
  };
}

/** Returns true if the case is playable (first 3 always unlocked; N unlocked if N-1 complete) */
export function casoDesbloqueado(ep: EraProgreso, numero: number): boolean {
  if (numero <= 3) return true;
  return ep.casos[numero - 1]?.completada ?? false;
}

export function contarCompletadasEra(ep: EraProgreso): number {
  return Object.values(ep.casos).filter((r) => r.completada).length;
}

export function contarCompletadasTotal(progreso: ProgresoTotal): number {
  return Object.values(progreso).reduce(
    (acc, ep) => acc + contarCompletadasEra(ep),
    0
  );
}

export function casoCompletado(ep: EraProgreso, numero: number): boolean {
  return ep.casos[numero]?.completada ?? false;
}
