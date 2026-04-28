'use client';

import { useState, useCallback } from 'react';
import type { MisionUIState } from '@/lib/types';

const INITIAL_STATE: MisionUIState = {
  fase: 'intro',
  testigo_elegido: null,
  pistas_acumuladas: [],
  reto_respuesta: null,
  reto_correcto: null,
  seleccion_final: null,
  resultado: null,
  intentos_viaje: 0,
  intentos_reto: 0,
};

export function useMission() {
  const [estado, setEstado] = useState<MisionUIState>(INITIAL_STATE);

  const iniciarInvestigacion = useCallback(() => {
    setEstado((prev) => ({ ...prev, fase: 'testigos' }));
  }, []);

  const elegirTestigo = useCallback((indice: number, pista: string) => {
    setEstado((prev) => ({
      ...prev,
      testigo_elegido: indice,
      pistas_acumuladas: [...prev.pistas_acumuladas, pista],
    }));
  }, []);

  const continuarARastro = useCallback(() => {
    setEstado((prev) => ({ ...prev, fase: 'rastro' }));
  }, []);

  const resolverReto = useCallback(() => {
    setEstado((prev) => ({ ...prev, fase: 'reto' }));
  }, []);

  const responderReto = useCallback((respuesta: string, correcta: string, pista_resultado: string) => {
    const acertada = respuesta === correcta;
    setEstado((prev) => {
      const intentos_reto = prev.intentos_reto + 1;
      if (acertada) {
        return {
          ...prev,
          reto_respuesta: respuesta,
          reto_correcto: true,
          intentos_reto,
          pistas_acumuladas: [...prev.pistas_acumuladas, pista_resultado],
        };
      }
      if (intentos_reto < 2) {
        return { ...prev, reto_respuesta: respuesta, reto_correcto: false, intentos_reto };
      }
      return {
        ...prev,
        reto_respuesta: respuesta,
        reto_correcto: false,
        intentos_reto,
        pistas_acumuladas: [...prev.pistas_acumuladas, pista_resultado],
      };
    });
  }, []);

  const reintentarReto = useCallback(() => {
    setEstado((prev) => ({ ...prev, reto_respuesta: null, reto_correcto: null }));
  }, []);

  const irAlAeropuerto = useCallback(() => {
    setEstado((prev) => ({ ...prev, fase: 'viaje' }));
  }, []);

  const elegirEstado = useCallback((opcion: string, correcta: string) => {
    setEstado((prev) => {
      const intentos_viaje = prev.intentos_viaje + 1;
      const acertada = opcion === correcta;

      if (acertada) {
        return { ...prev, seleccion_final: opcion, resultado: 'correcto', intentos_viaje, fase: 'resuelto' };
      }
      if (intentos_viaje >= 2) {
        return { ...prev, seleccion_final: opcion, resultado: 'incorrecto', intentos_viaje, fase: 'resuelto' };
      }
      return { ...prev, seleccion_final: opcion, intentos_viaje };
    });
  }, []);

  const reset = useCallback(() => {
    setEstado(INITIAL_STATE);
  }, []);

  return {
    estado,
    iniciarInvestigacion,
    elegirTestigo,
    continuarARastro,
    resolverReto,
    responderReto,
    reintentarReto,
    irAlAeropuerto,
    elegirEstado,
    reset,
  };
}
