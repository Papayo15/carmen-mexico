export default function HeroTitle() {
  return (
    <div className="text-center py-10 px-4">
      <div className="text-6xl mb-4">🔎</div>
      <h1 className="text-5xl md:text-6xl font-bold text-orange-800 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
        Carmen México
      </h1>
      <div className="mt-3 h-1 w-32 bg-amber-500 mx-auto rounded-full" />
      <p className="mt-5 text-lg text-stone-600 max-w-xl mx-auto">
        El juego de detectives más mexicano. Usa tus pistas, consulta la libreta y atrapa al sospechoso en el estado correcto.
      </p>
    </div>
  );
}
