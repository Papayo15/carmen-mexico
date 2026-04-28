interface LibretaAcumuladaProps {
  pistas: string[];
  libreta1?: string;
  libreta2?: string;
}

export default function LibretaAcumulada({ pistas, libreta1, libreta2 }: LibretaAcumuladaProps) {
  return (
    <div className="bg-amber-50 rounded-2xl border border-amber-200 p-4 space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-lg">📓</span>
        <h3 className="font-bold text-amber-900 text-sm">Libreta del agente</h3>
      </div>

      {pistas.length === 0 && !libreta1 && !libreta2 && (
        <p className="text-xs text-amber-600 italic">Las pistas aparecerán aquí conforme investigues.</p>
      )}

      {libreta1 && (
        <div className="bg-white rounded-lg p-3 border border-amber-200">
          <p className="text-xs font-semibold text-amber-700 mb-1">📚 Datos de campo</p>
          <p className="text-xs text-stone-600 leading-relaxed">{libreta1}</p>
        </div>
      )}

      {libreta2 && (
        <div className="bg-white rounded-lg p-3 border border-amber-200">
          <p className="text-xs font-semibold text-amber-700 mb-1">🌍 Conexión mundial</p>
          <p className="text-xs text-stone-600 leading-relaxed">{libreta2}</p>
        </div>
      )}

      {pistas.map((pista, i) => (
        <div key={i} className="bg-white rounded-lg p-3 border border-orange-200">
          <p className="text-xs font-semibold text-orange-700 mb-1">💡 Pista {i + 1}</p>
          <p className="text-xs text-stone-600 leading-relaxed">{pista}</p>
        </div>
      ))}
    </div>
  );
}
