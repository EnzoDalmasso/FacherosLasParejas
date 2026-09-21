import { Search } from "lucide-react";

export function SearchBar({
  valor,
  onCambiar,
  placeholder = "Buscar productos...",
}: {
  valor: string;
  onCambiar: (valor: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="relative flex-1">
      <Search
        className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gris"
        strokeWidth={1.75}
        aria-hidden
      />
      <input
        type="search"
        value={valor}
        onChange={(evento) => onCambiar(evento.target.value)}
        placeholder={placeholder}
        aria-label="Buscar productos"
        className="h-11 w-full rounded-full border border-borde bg-blanco pl-10 pr-4 text-sm outline-none transition-colors focus:border-negro"
      />
    </div>
  );
}
