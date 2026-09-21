import type { Producto } from "./producto";

export interface ItemCarrito {
  productoId: string;
  nombre: string;
  precio: number;
  imagen: string;
  cantidad: number;
  talle?: string;
  color?: string;
}

export function crearItemCarrito(
  producto: Producto,
  cantidad: number,
  talle?: string,
  color?: string
): ItemCarrito {
  return {
    productoId: producto.id,
    nombre: producto.nombre,
    precio: producto.precio,
    imagen: producto.imagenes[0],
    cantidad,
    talle,
    color,
  };
}

/** Identifica una línea de carrito: mismo producto + talle + color se agrupan. */
export function claveItem(item: Pick<ItemCarrito, "productoId" | "talle" | "color">) {
  return `${item.productoId}__${item.talle ?? ""}__${item.color ?? ""}`;
}
