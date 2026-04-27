import type { Era, EraSlug, Caso } from '@/lib/types';

import olmecas from './olmecas';
import mayas from './mayas';
import teotihuacan from './teotihuacan';
import toltecas from './toltecas';
import aztecas from './aztecas';
import conquista from './conquista';
import colonia from './colonia';
import independencia from './independencia';
import mexico_independiente from './mexico-independiente';
import reforma from './reforma';
import porfiriato from './porfiriato';
import revolucion from './revolucion';
import caudillismo from './caudillismo';
import mexico_industrial from './mexico-industrial';
import crisis from './crisis';
import contemporaneo from './contemporaneo';

export const ERA_LIST: Era[] = [
  olmecas,
  mayas,
  teotihuacan,
  toltecas,
  aztecas,
  conquista,
  colonia,
  independencia,
  mexico_independiente,
  reforma,
  porfiriato,
  revolucion,
  caudillismo,
  mexico_industrial,
  crisis,
  contemporaneo,
];

export const ERA_MAP: Record<EraSlug, Era> = Object.fromEntries(
  ERA_LIST.map((era) => [era.metadata.slug, era])
) as Record<EraSlug, Era>;

export function getEra(slug: EraSlug): Era {
  const era = ERA_MAP[slug];
  if (!era) throw new Error(`Era desconocida: ${slug}`);
  return era;
}

export function getCaso(slug: EraSlug, numero: number): Caso {
  const era = getEra(slug);
  const caso = era.casos.find((c) => c.numero === numero);
  if (!caso) throw new Error(`Caso ${numero} no encontrado en era: ${slug}`);
  return caso;
}
