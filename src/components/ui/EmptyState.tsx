import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export function EmptyState({
  icon: Icon,
  titulo,
  descripcion,
  accion,
}: {
  icon: LucideIcon;
  titulo: string;
  descripcion?: string;
  accion?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-borde bg-blanco px-6 py-16 text-center">
      <Icon className="h-10 w-10 text-gris-claro" strokeWidth={1.5} aria-hidden />
      <p className="font-display text-lg tracking-wide">{titulo}</p>
      {descripcion && <p className="max-w-sm text-sm text-gris">{descripcion}</p>}
      {accion}
    </div>
  );
}
