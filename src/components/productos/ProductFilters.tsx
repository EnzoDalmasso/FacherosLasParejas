import { categorias } from "@/data/categorias";
import { rangosPrecio, type FiltrosTienda } from "@/lib/filtros";
import type { CategoriaSlug } from "@/types/producto";

export function ProductFilters({
  filtros,
  onCambiar,
}: {
  filtros: FiltrosTienda;
  onCambiar: (filtros: FiltrosTienda) => void;
}) {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-negro">
          Categoría
        </h3>
        <div className="flex flex-col gap-2.5">
          <label className="flex items-center gap-2.5 text-sm">
            <input
              type="radio"
              name="categoria"
              checked={filtros.categoria === null}
              onChange={() => onCambiar({ ...filtros, categoria: null })}
              className="h-4 w-4 accent-negro"
            />
            Todas
          </label>
          {categorias.map((categoria) => (
            <label key={categoria.slug} className="flex items-center gap-2.5 text-sm">
              <input
                type="radio"
                name="categoria"
                checked={filtros.categoria === categoria.slug}
                onChange={() =>
                  onCambiar({ ...filtros, categoria: categoria.slug as CategoriaSlug })
                }
                className="h-4 w-4 accent-negro"
              />
              {categoria.nombre}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-negro">
          Precio
        </h3>
        <div className="flex flex-col gap-2.5">
          {rangosPrecio.map((rango) => (
            <label key={rango.id} className="flex items-center gap-2.5 text-sm">
              <input
                type="radio"
                name="precio"
                checked={filtros.rangoPrecioId === rango.id}
                onChange={() => onCambiar({ ...filtros, rangoPrecioId: rango.id })}
                className="h-4 w-4 accent-negro"
              />
              {rango.etiqueta}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
