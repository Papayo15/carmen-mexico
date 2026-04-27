'use client';

import type { Caso, EraSlug } from '@/lib/types';
import { useMission } from '@/hooks/useMission';
import { useProgresoContext } from '@/context/ProgresoContext';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import MisionHeader from './MisionHeader';
import PistaPanel from './PistaPanel';
import LibretaPanel from './LibretaPanel';
import MapaOpciones from './MapaOpciones';
import ExplicacionPanel from './ExplicacionPanel';
import { ERA_MAP } from '@/data/eras';

interface MisionLayoutProps {
  caso: Caso;
  eraSlug: EraSlug;
}

export default function MisionLayout({ caso, eraSlug }: MisionLayoutProps) {
  const { estado, seleccionar, reintentar } = useMission();
  const { registrarResultado } = useProgresoContext();
  const registrado = useRef(false);
  const [confirmarSalida, setConfirmarSalida] = useState(false);
  const router = useRouter();

  const era = ERA_MAP[eraSlug];

  const handleSeleccionar = (opcion: string) => {
    seleccionar(opcion, caso.respuesta_correcta);
  };

  useEffect(() => {
    if (estado.fase !== 'jugando' && !registrado.current) {
      registrado.current = true;
      registrarResultado(
        eraSlug,
        caso.numero,
        estado.fase === 'correcto',
        estado.intentos
      );
    }
  }, [estado.fase, estado.intentos, eraSlug, caso.numero, registrarResultado]);

  const puedeReintentar = estado.fase === 'incorrecto' && estado.intentos < 2;

  const handleSalir = () => {
    if (estado.fase !== 'jugando') {
      // Ya respondió, puede salir libremente
      router.push(`/${eraSlug}`);
    } else {
      setConfirmarSalida(true);
    }
  };

  if (!caso.regla_oro_check) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-10">
        <MisionHeader era={era.metadata} caso={caso} onSalir={handleSalir} />
        <div className="text-center py-20 bg-white rounded-2xl border-2 border-stone-200">
          <div className="text-6xl mb-4">🚧</div>
          <h2 className="text-2xl font-bold text-stone-600">Caso en construcción</h2>
          <p className="text-stone-400 mt-2">Este caso estará disponible próximamente.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <MisionHeader era={era.metadata} caso={caso} onSalir={handleSalir} />

      {/* Diálogo confirmación de salida */}
      {confirmarSalida && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center">
            <div className="text-5xl mb-4">💾</div>
            <h2 className="text-xl font-bold text-stone-800 mb-2">¿Salir del caso?</h2>
            <p className="text-stone-500 text-sm mb-6">
              Tu progreso en casos ya respondidos está guardado automáticamente.
              Este caso quedará pendiente para cuando regreses.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => router.push(`/${eraSlug}`)}
                className="flex-1 py-3 bg-orange-700 text-white rounded-xl font-semibold hover:bg-orange-800 transition-colors"
              >
                Guardar y salir
              </button>
              <button
                onClick={() => setConfirmarSalida(false)}
                className="flex-1 py-3 border-2 border-stone-300 text-stone-600 rounded-xl font-semibold hover:border-stone-400 transition-colors"
              >
                Seguir jugando
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <PistaPanel texto={caso.pista} />
          <LibretaPanel texto={caso.libreta} />
        </div>

        <div className="flex flex-col justify-center">
          <MapaOpciones
            opciones={caso.opciones}
            seleccion={estado.seleccion}
            fase={estado.fase}
            respuestaCorrecta={caso.respuesta_correcta}
            onSeleccionar={handleSeleccionar}
          />

          {estado.fase !== 'jugando' && (
            <ExplicacionPanel
              texto={caso.explicacion}
              acertada={estado.fase === 'correcto'}
              eraSlug={eraSlug}
              onReintentar={puedeReintentar ? reintentar : undefined}
            />
          )}
        </div>
      </div>
    </div>
  );
}
