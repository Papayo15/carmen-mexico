export default function LibretaPanel({ texto }: { texto: string }) {
  return (
    <div
      className="paper-texture p-6 border-2 border-amber-400 rounded-2xl shadow-inner text-blue-900"
      style={{ fontFamily: "'Courier New', monospace", fontSize: '0.875rem' }}
    >
      <div className="flex items-center gap-2 mb-4 border-b-2 border-blue-200 pb-2">
        <span className="text-lg">📂</span>
        <span className="font-bold uppercase tracking-widest text-xs text-blue-700">Archivo de Inteligencia</span>
      </div>
      <pre className="whitespace-pre-wrap leading-8 text-sm">{texto}</pre>
    </div>
  );
}
