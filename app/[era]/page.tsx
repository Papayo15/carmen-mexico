'use client';

import { notFound } from 'next/navigation';
import { use } from 'react';
import { ERA_MAP } from '@/data/eras';
import { esEraValida } from '@/lib/utils';
import { useProgresoContext } from '@/context/ProgresoContext';
import CasosGrid from '@/components/eras/CasosGrid';
import PageWrapper from '@/components/ui/PageWrapper';
import Link from 'next/link';

interface EraPageProps {
  params: Promise<{ era: string }>;
}

export default function EraPage({ params }: EraPageProps) {
  const { era: eraParam } = use(params);
  const { progreso, hidratado } = useProgresoContext();

  if (!esEraValida(eraParam)) notFound();

  const era = ERA_MAP[eraParam];
  const eraProgreso = hidratado
    ? progreso[eraParam]
    : { era: eraParam, casos: {} };

  return (
    <PageWrapper>
      <div className="mb-6">
        <Link href="/" className="text-orange-700 hover:text-orange-900 text-sm font-medium">
          ← Inicio
        </Link>
      </div>

      <div className="flex items-center gap-3 mb-2">
        <span className="text-4xl">{era.metadata.icono}</span>
        <div>
          <h1 className="text-2xl font-bold text-stone-800">{era.metadata.titulo}</h1>
          <p className="text-sm text-stone-400">{era.metadata.periodo}</p>
        </div>
      </div>

      <p className="text-sm text-stone-500 mb-6">
        Estados principales: {era.metadata.estados_principales.join(' · ')}
      </p>

      <CasosGrid era={era} progreso={eraProgreso} />
    </PageWrapper>
  );
}
