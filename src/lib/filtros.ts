import type { CategoriaSlug, Ordenamiento, Producto } from "@/types/producto";

export interface RangoPrecio {
  id: string;
  etiqueta: string;
  min: number;
  max: number | null;
}

export const rangosPrecio: RangoPrecio[] = [
  { id: "todos", etiqueta: "Todos los precios", min: 0, max: null },
  { id: "hasta-30000", etiqueta: "Hasta $30.000", min: 0, max: 30000 },
  { id: "30000-60000", etiqueta: "$30.000 – $60.000", min: 30000, max: 60000 },
  { id: "60000-100000", etiqueta: "$60.000 – $100.000", min: 60000, max: 100000 },
  { id: "mas-100000", etiqueta: "Más de $100.000", min: 100000, max: null },
];

export interface FiltrosTienda {
  busqueda: string;
  categoria: CategoriaSlug | null;
  rangoPrecioId: string;
  orden: Ordenamiento;
}

export const filtrosPorDefecto: FiltrosTienda = {
  busqueda: "",
  categoria: null,
  rangoPrecioId: "todos",
  orden: "relevancia",
};

export function aplicarFiltros(productos: Producto[], filtros: FiltrosTienda): Producto[] {
  const rango = rangosPrecio.find((r) => r.id === filtros.rangoPrecioId);
  const busqueda = filtros.busqueda.trim().toLowerCase();

  const filtrados = productos.filter((producto) => {
    if (filtros.categoria && producto.categoria !== filtros.categoria) return false;

    if (rango) {
      if (producto.precio < rango.min) return false;
      if (rango.max !== null && producto.precio > rango.max) return false;
    }

    if (busqueda) {
      const coincide =
        producto.nombre.toLowerCase().includes(busqueda) ||
        producto.marca?.toLowerCase().includes(busqueda) ||
        producto.categoria.toLowerCase().includes(busqueda);
      if (!coincide) return false;
    }

    return true;
  });

  return ordenarProductos(filtrados, filtros.orden);
}

function ordenarProductos(productos: Producto[], orden: Ordenamiento): Producto[] {
  const copia = [...productos];

  switch (orden) {
    case "nuevos":
      return copia.sort((a, b) => Number(b.nuevo) - Number(a.nuevo));
    case "precio-asc":
      return copia.sort((a, b) => a.precio - b.precio);
    case "precio-desc":
      return copia.sort((a, b) => b.precio - a.precio);
    default:
      return copia.sort((a, b) => Number(b.destacado) - Number(a.destacado));
  }
}
