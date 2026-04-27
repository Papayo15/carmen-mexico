'use client';

import { useState } from 'react';
import type { Nivel, UserProfile } from '@/context/ProfileContext';

interface NivelOption {
  slug: Nivel;
  nombre: string;
  edades: string;
  descripcion: string;
  icono: string;
  color: string;
  border: string;
  badge: string;
}

const NIVELES: NivelOption[] = [
  {
    slug: 'junior',
    nombre: 'Junior',
    edades: '8 – 10 años',
    descripcion: 'Pistas claras, poca información técnica. Ideal para primaria alta.',
    icono: '🌱',
    color: 'bg-green-50 hover:bg-green-100',
    border: 'border-green-300 hover:border-green-500',
    badge: 'bg-green-100 text-green-700',
  },
  {
    slug: 'explorador',
    nombre: 'Explorador',
    edades: '11 – 13 años',
    descripcion: 'Pistas con más contexto histórico. Para secundaria.',
    icono: '🔍',
    color: 'bg-amber-50 hover:bg-amber-100',
    border: 'border-amber-300 hover:border-amber-500',
    badge: 'bg-amber-100 text-amber-700',
  },
  {
    slug: 'elite',
    nombre: 'Élite',
    edades: '14 – 17 años',
    descripcion: 'Datos técnicos completos. Para preparatoria y adultos.',
    icono: '⭐',
    color: 'bg-purple-50 hover:bg-purple-100',
    border: 'border-purple-300 hover:border-purple-500',
    badge: 'bg-purple-100 text-purple-700',
  },
];

interface WelcomeScreenProps {
  onContinuar: (profile: UserProfile) => void;
}

export default function WelcomeScreen({ onContinuar }: WelcomeScreenProps) {
  const [nombre, setNombre] = useState('');
  const [nivelSeleccionado, setNivelSeleccionado] = useState<Nivel | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!nombre.trim()) {
      setError('Escribe tu nombre para continuar.');
      return;
    }
    if (!nivelSeleccionado) {
      setError('Elige tu nivel para continuar.');
      return;
    }
    onContinuar({ nombre: nombre.trim(), nivel: nivelSeleccionado });
  };

  return (
    <div className="min-h-screen bg-[#faf8f4] flex flex-col items-center justify-center px-4 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="text-7xl mb-4">🔎</div>
        <h1
          className="text-5xl md:text-6xl font-bold text-orange-800 tracking-tight"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Carmen México
        </h1>
        <div className="mt-3 h-1 w-32 bg-amber-500 mx-auto rounded-full" />
        <p className="mt-5 text-lg text-stone-600 max-w-lg mx-auto">
          El juego de detectives más mexicano. Triangula pistas, consulta tu libreta y
          descubre en qué estado se esconde cada secreto de la historia.
        </p>
      </div>

      {/* Form */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md border border-stone-200 p-8">
        {/* Nombre */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-stone-700 mb-2">
            ¿Cómo te llamas, agente?
          </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => { setNombre(e.target.value); setError(''); }}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            placeholder="Tu nombre o apodo"
            maxLength={30}
            className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-orange-400 focus:outline-none text-stone-800 text-base transition-colors"
          />
        </div>

        {/* Nivel */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-stone-700 mb-3">Elige tu nivel</p>
          <div className="space-y-3">
            {NIVELES.map((n) => (
              <button
                key={n.slug}
                onClick={() => { setNivelSeleccionado(n.slug); setError(''); }}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-150 ${n.color} ${
                  nivelSeleccionado === n.slug
                    ? n.border + ' ring-2 ring-offset-1 ring-orange-400'
                    : 'border-stone-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{n.icono}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-stone-800">{n.nombre}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${n.badge}`}>
                        {n.edades}
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 mt-0.5">{n.descripcion}</p>
                  </div>
                  {nivelSeleccionado === n.slug && (
                    <span className="text-orange-500 text-lg shrink-0">✓</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Error */}
        {error && (
          <p className="text-sm text-red-500 mb-4 text-center">{error}</p>
        )}

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-orange-700 text-white rounded-xl font-bold text-lg hover:bg-orange-800 active:scale-95 transition-all duration-150 shadow-md"
        >
          ¡Comenzar investigación! →
        </button>
      </div>

      <p className="mt-6 text-xs text-stone-400 text-center max-w-xs">
        Tu progreso se guarda automáticamente en este dispositivo. No necesitas crear cuenta.
      </p>
    </div>
  );
}
