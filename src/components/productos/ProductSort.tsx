import type { Ordenamiento } from "@/types/producto";

const opciones: { valor: Ordenamiento; etiqueta: string }[] = [
  { valor: "relevancia", etiqueta: "Relevancia" },
  { valor: "nuevos", etiqueta: "Más nuevos" },
  { valor: "precio-asc", etiqueta: "Precio: menor a mayor" },
  { valor: "precio-desc", etiqueta: "Precio: mayor a menor" },
];

export function ProductSort({
  valor,
  onCambiar,
}: {
  valor: Ordenamiento;
  onCambiar: (valor: Ordenamiento) => void;
}) {
  return (
    <select
      value={valor}
      onChange={(evento) => onCambiar(evento.target.value as Ordenamiento)}
      aria-label="Ordenar productos"
      className="h-11 w-full min-w-0 rounded-full border border-borde bg-blanco px-4 text-sm outline-none transition-colors focus:border-negro"
    >
      {opciones.map((opcion) => (
        <option key={opcion.valor} value={opcion.valor}>
          {opcion.etiqueta}
        </option>
      ))}
    </select>
  );
}
