import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div className="text-8xl mb-6">🔍</div>
      <h1 className="text-4xl font-bold text-stone-800 mb-3">Página no encontrada</h1>
      <p className="text-stone-500 max-w-sm mb-8">
        Esta pista no lleva a ningún lado, Agente. Regresa al cuartel general y elige otro camino.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-orange-700 text-white rounded-xl font-semibold hover:bg-orange-800 transition-colors"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
