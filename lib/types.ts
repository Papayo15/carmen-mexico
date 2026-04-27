// ─── Era slugs ────────────────────────────────────────────────────────────────

export type EraSlug =
  | 'olmecas' | 'mayas' | 'teotihuacan' | 'toltecas' | 'aztecas'
  | 'conquista' | 'colonia' | 'independencia' | 'mexico-independiente'
  | 'reforma' | 'porfiriato' | 'revolucion' | 'caudillismo'
  | 'mexico-industrial' | 'crisis' | 'contemporaneo';

// ─── Case categories (Matriz de 10 casos) ────────────────────────────────────

export type CategoriaCase =
  | 'grandes-hitos'     // 1–3: examen SEP
  | 'ciencia-y-saberes' // 4–5: inventos, medicina, ingeniería
  | 'vida-cotidiana'    // 6–7: comida, arte, deporte
  | 'civismo-y-etica'   // 8–9: leyes, organización, derechos
  | 'cruce-global';     // 10:  México vs mundo en ese siglo

export const CATEGORIA_LABELS: Record<CategoriaCase, string> = {
  'grandes-hitos': 'Grandes Hitos',
  'ciencia-y-saberes': 'Ciencia y Saberes',
  'vida-cotidiana': 'Vida Cotidiana',
  'civismo-y-etica': 'Civismo y Ética',
  'cruce-global': 'Cruce Global',
};

export const CATEGORIA_ICONOS: Record<CategoriaCase, string> = {
  'grandes-hitos': '🏛️',
  'ciencia-y-saberes': '🔬',
  'vida-cotidiana': '🍽️',
  'civismo-y-etica': '⚖️',
  'cruce-global': '🌍',
};

// Derived from case number — no need to store
export type Dificultad = 'basico' | 'intermedio' | 'avanzado';
export function getDificultad(numero: number): Dificultad {
  if (numero <= 3) return 'basico';
  if (numero <= 7) return 'intermedio';
  return 'avanzado';
}

// ─── Core case (mission) ──────────────────────────────────────────────────────

export interface Caso {
  numero: number;            // 1–10
  titulo: string;            // "El Misterio de La Venta"
  subtitulo: string;         // location hint: "Tabasco"
  categoria: CategoriaCase;
  concepto_clave: string;    // what the student takes away
  materia: string;
  estado_destino: string;
  estado_slug: string;
  pista: string;             // narrative — no shared keywords with libreta
  libreta: string;           // technical data — no shared keywords with pista
  opciones: string[];        // 3–4 state names
  respuesta_correcta: string;
  explicacion: string;
  regla_oro_check: boolean;
}

// ─── Era ──────────────────────────────────────────────────────────────────────

export interface EraMetadata {
  slug: EraSlug;
  titulo: string;
  periodo: string;
  estados_principales: string[];
  icono: string;
  color: string;
  colorText: string;
  orden: number;
}

export interface Era {
  metadata: EraMetadata;
  casos: Caso[];   // exactly 10
}

// ─── Progress ─────────────────────────────────────────────────────────────────

export interface CasoResultado {
  completada: boolean;
  acertada: boolean;
  intentos: number;
  fecha: string;
}

export interface EraProgreso {
  era: EraSlug;
  casos: Record<number, CasoResultado>;   // key: case numero 1–10
}

export type ProgresoTotal = Record<EraSlug, EraProgreso>;

// ─── Mission UI state ────────────────────────────────────────────────────────

export type FaseMision = 'jugando' | 'correcto' | 'incorrecto';

export interface MisionUIState {
  fase: FaseMision;
  seleccion: string | null;
  intentos: number;
}
