import { PackageSearch } from "lucide-react";
import { ProductCard } from "@/components/productos/ProductCard";
import { EmptyState } from "@/components/ui/EmptyState";
import type { Producto } from "@/types/producto";

export function ProductGrid({ productos }: { productos: Producto[] }) {
  if (productos.length === 0) {
    return (
      <EmptyState
        icon={PackageSearch}
        titulo="No encontramos productos"
        descripcion="Probá ajustar los filtros o la búsqueda."
      />
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
      {productos.map((producto) => (
        <ProductCard key={producto.id} producto={producto} />
      ))}
    </div>
  );
}
