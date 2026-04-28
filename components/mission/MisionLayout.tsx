'use client';

import type { CasoInteractivo, EraSlug } from '@/lib/types';
import { useMission } from '@/hooks/useMission';
import { useProgresoContext } from '@/context/ProgresoContext';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ERA_MAP } from '@/data/eras';
import MisionHeader from './MisionHeader';
import IntroScene from './IntroScene';
import TestigosScene from './TestigosScene';
import RastroScene from './RastroScene';
import RetoScene from './RetoScene';
import ViajeScene from './ViajeScene';
import ResultadoScene from './ResultadoScene';
import LibretaAcumulada from './LibretaAcumulada';

interface MisionLayoutProps {
  caso: CasoInteractivo;
  eraSlug: EraSlug;
}

export default function MisionLayout({ caso, eraSlug }: MisionLayoutProps) {
  const {
    estado,
    iniciarInvestigacion,
    elegirTestigo,
    continuarARastro,
    resolverReto,
    responderReto,
    reintentarReto,
    irAlAeropuerto,
    elegirEstado,
  } = useMission();
  const { registrarResultado } = useProgresoContext();
  const registrado = useRef(false);
  const [confirmarSalida, setConfirmarSalida] = useState(false);
  const router = useRouter();

  const era = ERA_MAP[eraSlug];

  useEffect(() => {
    if (estado.fase === 'resuelto' && !registrado.current) {
      registrado.current = true;
      registrarResultado(
        eraSlug,
        caso.numero,
        estado.resultado === 'correcto',
        estado.intentos_viaje
      );
    }
  }, [estado.fase, estado.resultado, estado.intentos_viaje, eraSlug, caso.numero, registrarResultado]);

  const handleSalir = () => {
    if (estado.fase === 'resuelto') {
      router.push(`/${eraSlug}`);
    } else {
      setConfirmarSalida(true);
    }
  };

  const mostrarLibreta =
    estado.fase === 'testigos' ||
    estado.fase === 'rastro' ||
    estado.fase === 'reto' ||
    estado.fase === 'viaje' ||
    estado.fase === 'resuelto';

  const libreta1 =
    estado.fase === 'rastro' || estado.fase === 'reto' || estado.fase === 'viaje' || estado.fase === 'resuelto'
      ? caso.investigacion1.libreta
      : undefined;

  const libreta2 =
    estado.fase === 'reto' || estado.fase === 'viaje' || estado.fase === 'resuelto'
      ? caso.investigacion2.libreta
      : undefined;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <MisionHeader era={era.metadata} caso={caso} onSalir={handleSalir} />

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

      <div className={`grid gap-6 ${mostrarLibreta ? 'grid-cols-1 md:grid-cols-[1fr_320px]' : 'grid-cols-1'}`}>
        <div>
          {estado.fase === 'intro' && (
            <IntroScene caso={caso} onIniciar={iniciarInvestigacion} />
          )}

          {estado.fase === 'testigos' && (
            <TestigosScene
              investigacion1={caso.investigacion1}
              testigo_elegido={estado.testigo_elegido}
              onElegir={elegirTestigo}
              onContinuar={continuarARastro}
            />
          )}

          {estado.fase === 'rastro' && (
            <RastroScene
              investigacion2={caso.investigacion2}
              onResolverReto={resolverReto}
            />
          )}

          {estado.fase === 'reto' && (
            <RetoScene
              reto={caso.reto}
              reto_respuesta={estado.reto_respuesta}
              reto_correcto={estado.reto_correcto}
              intentos_reto={estado.intentos_reto}
              onResponder={(r) => responderReto(r, caso.reto.respuesta_reto, caso.reto.pista_resultado)}
              onReintentar={reintentarReto}
              onContinuar={irAlAeropuerto}
            />
          )}

          {estado.fase === 'viaje' && (
            <ViajeScene
              opciones={caso.opciones}
              seleccion_final={estado.seleccion_final}
              intentos_viaje={estado.intentos_viaje}
              respuesta_correcta={caso.respuesta_correcta}
              onElegir={(o) => elegirEstado(o, caso.respuesta_correcta)}
            />
          )}

          {estado.fase === 'resuelto' && (
            <>
              <ViajeScene
                opciones={caso.opciones}
                seleccion_final={estado.seleccion_final}
                intentos_viaje={estado.intentos_viaje}
                respuesta_correcta={caso.respuesta_correcta}
                onElegir={() => {}}
              />
              <div className="mt-4">
                <ResultadoScene
                  acertada={estado.resultado === 'correcto'}
                  explicacion={caso.explicacion}
                  eraSlug={eraSlug}
                  numeroCaso={caso.numero}
                />
              </div>
            </>
          )}
        </div>

        {mostrarLibreta && (
          <div className="md:sticky md:top-4 h-fit">
            <LibretaAcumulada
              pistas={estado.pistas_acumuladas}
              libreta1={libreta1}
              libreta2={libreta2}
            />
          </div>
        )}
      </div>
    </div>
  );
}
