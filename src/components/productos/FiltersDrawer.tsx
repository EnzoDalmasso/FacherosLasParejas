"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { ProductFilters } from "@/components/productos/ProductFilters";
import { Button } from "@/components/ui/Button";
import type { FiltrosTienda } from "@/lib/filtros";

export function FiltersDrawer({
  abierto,
  filtros,
  onCambiar,
  onCerrar,
}: {
  abierto: boolean;
  filtros: FiltrosTienda;
  onCambiar: (filtros: FiltrosTienda) => void;
  onCerrar: () => void;
}) {
  useEffect(() => {
    if (!abierto) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [abierto]);

  if (!abierto) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Filtros">
      <button
        type="button"
        aria-label="Cerrar filtros"
        onClick={onCerrar}
        className="absolute inset-0 bg-negro/40"
      />

      <div className="absolute bottom-0 left-0 right-0 flex max-h-[85vh] flex-col rounded-t-3xl bg-crema">
        <div className="flex items-center justify-between border-b border-borde px-5 py-4">
          <h2 className="font-display text-xl tracking-wide">Filtros</h2>
          <button
            type="button"
            onClick={onCerrar}
            aria-label="Cerrar filtros"
            className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-negro/5"
          >
            <X className="h-5 w-5" strokeWidth={1.75} aria-hidden />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          <ProductFilters filtros={filtros} onCambiar={onCambiar} />
        </div>

        <div className="flex gap-3 border-t border-borde px-5 py-4">
          <Button
            variante="secundario"
            className="flex-1"
            onClick={() => onCambiar({ ...filtros, categoria: null, rangoPrecioId: "todos" })}
          >
            Limpiar
          </Button>
          <Button variante="primario" className="flex-1" onClick={onCerrar}>
            Ver resultados
          </Button>
        </div>
      </div>
    </div>
  );
}
