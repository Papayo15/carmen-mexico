import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { EraSlug } from '@/lib/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
}

export const ERAS_VALIDAS: EraSlug[] = [
  'olmecas', 'mayas', 'teotihuacan', 'toltecas', 'aztecas',
  'conquista', 'colonia', 'independencia', 'mexico-independiente',
  'reforma', 'porfiriato', 'revolucion', 'caudillismo',
  'mexico-industrial', 'crisis', 'contemporaneo',
];

export function esEraValida(s: string): s is EraSlug {
  return ERAS_VALIDAS.includes(s as EraSlug);
}

export function esNumeroValido(s: string): boolean {
  const n = parseInt(s, 10);
  return !isNaN(n) && n >= 1 && n <= 10;
}
