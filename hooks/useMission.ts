import { useState, useCallback } from 'react';
import type { FaseMision, MisionUIState } from '@/lib/types';

const MAX_INTENTOS = 2;

export function useMission() {
  const [estado, setEstado] = useState<MisionUIState>({
    fase: 'jugando',
    seleccion: null,
    intentos: 0,
  });

  const seleccionar = useCallback((opcion: string, respuestaCorrecta: string) => {
    setEstado((prev) => {
      if (prev.fase !== 'jugando') return prev;

      const intentos = prev.intentos + 1;
      const acertada = opcion === respuestaCorrecta;
      const sinReintento = intentos >= MAX_INTENTOS;

      const fase: FaseMision = acertada
        ? 'correcto'
        : sinReintento
        ? 'incorrecto'
        : 'jugando';

      return { fase, seleccion: opcion, intentos };
    });
  }, []);

  const reintentar = useCallback(() => {
    setEstado((prev) => ({
      fase: 'jugando',
      seleccion: null,
      intentos: prev.intentos,
    }));
  }, []);

  const reset = useCallback(() => {
    setEstado({ fase: 'jugando', seleccion: null, intentos: 0 });
  }, []);

  return { estado, seleccionar, reintentar, reset };
}
