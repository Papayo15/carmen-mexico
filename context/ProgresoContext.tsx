'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import type { EraSlug, ProgresoTotal } from '@/lib/types';
import { initProgreso, actualizarProgreso } from '@/lib/progreso';

const STORAGE_KEY = 'carmen_mexico_v2';

interface ProgresoContextValue {
  progreso: ProgresoTotal;
  registrarResultado: (era: EraSlug, numero: number, acertada: boolean, intentos: number) => void;
  resetearProgreso: () => void;
  hidratado: boolean;
}

const ProgresoContext = createContext<ProgresoContextValue | null>(null);

export function ProgresoProvider({ children }: { children: React.ReactNode }) {
  const [progreso, setProgreso] = useState<ProgresoTotal>(initProgreso);
  const [hidratado, setHidratado] = useState(false);

  useEffect(() => {
    try {
      const guardado = localStorage.getItem(STORAGE_KEY);
      if (guardado) setProgreso(JSON.parse(guardado) as ProgresoTotal);
    } catch {}
    setHidratado(true);
  }, []);

  const registrarResultado = useCallback(
    (era: EraSlug, numero: number, acertada: boolean, intentos: number) => {
      setProgreso((prev) => {
        const nuevo = actualizarProgreso(prev, era, numero, acertada, intentos);
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(nuevo)); } catch {}
        return nuevo;
      });
    },
    []
  );

  const resetearProgreso = useCallback(() => {
    const limpio = initProgreso();
    setProgreso(limpio);
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  }, []);

  return (
    <ProgresoContext.Provider value={{ progreso, registrarResultado, resetearProgreso, hidratado }}>
      {children}
    </ProgresoContext.Provider>
  );
}

export function useProgresoContext() {
  const ctx = useContext(ProgresoContext);
  if (!ctx) throw new Error('useProgresoContext debe usarse dentro de ProgresoProvider');
  return ctx;
}
