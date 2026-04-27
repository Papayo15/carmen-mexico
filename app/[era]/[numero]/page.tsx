'use client';

import { notFound } from 'next/navigation';
import { use } from 'react';
import { getCaso } from '@/data/eras';
import { esEraValida, esNumeroValido } from '@/lib/utils';
import { useProgresoContext } from '@/context/ProgresoContext';
import { casoDesbloqueado } from '@/lib/progreso';
import MisionLayout from '@/components/mission/MisionLayout';
import PageWrapper from '@/components/ui/PageWrapper';

interface CasoPageProps {
  params: Promise<{ era: string; numero: string }>;
}

export default function CasoPage({ params }: CasoPageProps) {
  const { era: eraParam, numero: numeroParam } = use(params);
  const { progreso, hidratado } = useProgresoContext();

  if (!esEraValida(eraParam)) notFound();
  if (!esNumeroValido(numeroParam)) notFound();

  const numero = parseInt(numeroParam, 10);
  const caso = getCaso(eraParam, numero);

  const eraProgreso = hidratado
    ? progreso[eraParam]
    : { era: eraParam, casos: {} };

  if (!casoDesbloqueado(eraProgreso, numero)) {
    notFound();
  }

  return (
    <PageWrapper>
      <MisionLayout caso={caso} eraSlug={eraParam} />
    </PageWrapper>
  );
}
