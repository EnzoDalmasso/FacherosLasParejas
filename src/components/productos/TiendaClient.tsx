"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { SearchBar } from "@/components/productos/SearchBar";
import { ProductSort } from "@/components/productos/ProductSort";
import { ProductFilters } from "@/components/productos/ProductFilters";
import { FiltersDrawer } from "@/components/productos/FiltersDrawer";
import { ProductGrid } from "@/components/productos/ProductGrid";
import { aplicarFiltros, filtrosPorDefecto, type FiltrosTienda } from "@/lib/filtros";
import type { CategoriaSlug, Producto } from "@/types/producto";

export function TiendaClient({
  productos,
  categoriaInicial,
}: {
  productos: Producto[];
  categoriaInicial?: CategoriaSlug | null;
}) {
  const [filtros, setFiltros] = useState<FiltrosTienda>({
    ...filtrosPorDefecto,
    categoria: categoriaInicial ?? null,
  });
  const [filtrosAbiertos, setFiltrosAbiertos] = useState(false);

  const resultados = useMemo(() => aplicarFiltros(productos, filtros), [productos, filtros]);

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
      <aside className="hidden w-56 shrink-0 lg:block">
        <ProductFilters filtros={filtros} onCambiar={setFiltros} />
      </aside>

      <div className="flex-1">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <SearchBar
            valor={filtros.busqueda}
            onCambiar={(busqueda) => setFiltros((f) => ({ ...f, busqueda }))}
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setFiltrosAbiertos(true)}
              className="flex h-11 shrink-0 items-center gap-2 rounded-full border border-borde px-4 text-sm font-medium lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" strokeWidth={1.75} aria-hidden />
              Filtros
            </button>
            <div className="min-w-0 flex-1 sm:flex-initial">
              <ProductSort
                valor={filtros.orden}
                onCambiar={(orden) => setFiltros((f) => ({ ...f, orden }))}
              />
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm text-gris">
          {resultados.length} {resultados.length === 1 ? "producto" : "productos"}
        </p>

        <div className="mt-4">
          <ProductGrid productos={resultados} />
        </div>
      </div>

      <FiltersDrawer
        abierto={filtrosAbiertos}
        filtros={filtros}
        onCambiar={setFiltros}
        onCerrar={() => setFiltrosAbiertos(false)}
      />
    </div>
  );
}
