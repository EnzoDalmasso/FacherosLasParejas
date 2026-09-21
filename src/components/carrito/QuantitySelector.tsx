import { Minus, Plus } from "lucide-react";

export function QuantitySelector({
  cantidad,
  onCambiar,
  tamano = "md",
}: {
  cantidad: number;
  onCambiar: (cantidad: number) => void;
  tamano?: "sm" | "md";
}) {
  const alto = tamano === "sm" ? "h-8" : "h-10";
  const ancho = tamano === "sm" ? "w-8" : "w-10";

  return (
    <div className={`inline-flex items-center rounded-full border border-borde ${alto}`}>
      <button
        type="button"
        onClick={() => onCambiar(cantidad - 1)}
        aria-label="Restar cantidad"
        className={`flex ${ancho} h-full items-center justify-center rounded-full transition-colors hover:bg-negro/5`}
      >
        <Minus className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
      </button>
      <span className="min-w-6 text-center text-sm font-medium" aria-live="polite">
        {cantidad}
      </span>
      <button
        type="button"
        onClick={() => onCambiar(cantidad + 1)}
        aria-label="Sumar cantidad"
        className={`flex ${ancho} h-full items-center justify-center rounded-full transition-colors hover:bg-negro/5`}
      >
        <Plus className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
      </button>
    </div>
  );
}
