interface PistaPanelProps {
  texto: string;
}

export default function PistaPanel({ texto }: PistaPanelProps) {
  return (
    <div className="bg-orange-700 text-white p-6 rounded-2xl rounded-bl-none shadow-lg border-l-8 border-orange-900">
      <div className="flex items-center gap-2 mb-3 opacity-80">
        <span className="text-xl">📞</span>
        <span className="text-sm font-semibold uppercase tracking-widest">El informante dice:</span>
      </div>
      <p className="font-serif italic text-base leading-relaxed">
        &ldquo;{texto}&rdquo;
      </p>
    </div>
  );
}
