// ─── Era slugs ────────────────────────────────────────────────────────────────

export type EraSlug =
  | 'olmecas' | 'mayas' | 'teotihuacan' | 'toltecas' | 'aztecas'
  | 'conquista' | 'colonia' | 'independencia' | 'mexico-independiente'
  | 'reforma' | 'porfiriato' | 'revolucion' | 'caudillismo'
  | 'mexico-industrial' | 'crisis' | 'contemporaneo';

// ─── Case categories ─────────────────────────────────────────────────────────

export type CategoriaCase =
  | 'grandes-hitos'
  | 'ciencia-y-saberes'
  | 'vida-cotidiana'
  | 'civismo-y-etica'
  | 'cruce-global';

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

export type Dificultad = 'basico' | 'intermedio' | 'avanzado';
export function getDificultad(numero: number): Dificultad {
  if (numero <= 3) return 'basico';
  if (numero <= 7) return 'intermedio';
  return 'avanzado';
}

// ─── Pursuit mechanic types ───────────────────────────────────────────────────

export interface PistaTestigo {
  lugar: string;
  icono: string;
  testigo: string;
  pista: string;
}

export interface Investigacion1 {
  narrativa: string;
  objeto_robado: string;
  lugares: [PistaTestigo, PistaTestigo, PistaTestigo];
  libreta: string;
}

export interface Investigacion2 {
  narrativa: string;
  pista_mundial: string;
  libreta: string;
}

export interface RetoMatematico {
  enunciado: string;
  opciones_reto: [string, string, string, string];
  respuesta_reto: string;
  pista_resultado: string;
}

export interface CasoInteractivo {
  numero: number;
  titulo: string;
  categoria: CategoriaCase;
  concepto_clave: string;
  materia: string;
  estado_destino: string;
  estado_slug: string;
  investigacion1: Investigacion1;
  investigacion2: Investigacion2;
  reto: RetoMatematico;
  opciones: [string, string, string, string];
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
  casos: CasoInteractivo[];
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
  casos: Record<number, CasoResultado>;
}

export type ProgresoTotal = Record<EraSlug, EraProgreso>;

// ─── Mission UI state (6-phase pursuit) ──────────────────────────────────────

export type FaseInvestigacion =
  | 'intro'
  | 'testigos'
  | 'rastro'
  | 'reto'
  | 'viaje'
  | 'resuelto';

export interface MisionUIState {
  fase: FaseInvestigacion;
  testigo_elegido: number | null;
  pistas_acumuladas: string[];
  reto_respuesta: string | null;
  reto_correcto: boolean | null;
  seleccion_final: string | null;
  resultado: 'correcto' | 'incorrecto' | null;
  intentos_viaje: number;
  intentos_reto: number;
}
