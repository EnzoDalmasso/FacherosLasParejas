import { getProductoPorId } from "@/data/productos";
import { claveItem, crearItemCarrito, type ItemCarrito } from "@/types/carrito";

const CLAVE_STORAGE = "facheros:carrito";
const CANTIDAD_MAXIMA = 99;

// localStorage lo puede editar cualquiera desde el navegador: del guardado solo se
// toman id, talle, color y cantidad; nombre, precio e imagen salen del catálogo.
function sanearItem(crudo: unknown): ItemCarrito | null {
  if (!crudo || typeof crudo !== "object") return null;
  const { productoId, cantidad, talle, color } = crudo as Record<string, unknown>;
  if (typeof productoId !== "string") return null;

  const producto = getProductoPorId(productoId);
  if (!producto) return null;
  if (!Number.isInteger(cantidad) || (cantidad as number) < 1) return null;

  const talleValido =
    typeof talle === "string" && producto.talles?.includes(talle) ? talle : undefined;
  const colorValido =
    typeof color === "string" && producto.colores?.some((c) => c.nombre === color)
      ? color
      : undefined;

  return crearItemCarrito(
    producto,
    Math.min(cantidad as number, CANTIDAD_MAXIMA),
    talleValido,
    colorValido
  );
}

export function leerCarritoGuardado(): ItemCarrito[] {
  if (typeof window === "undefined") return [];
  try {
    const crudo = window.localStorage.getItem(CLAVE_STORAGE);
    if (!crudo) return [];
    const items = JSON.parse(crudo);
    if (!Array.isArray(items)) return [];
    return items
      .map(sanearItem)
      .filter((item): item is ItemCarrito => item !== null);
  } catch {
    return [];
  }
}

export function guardarCarrito(items: ItemCarrito[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CLAVE_STORAGE, JSON.stringify(items));
  } catch {
    // Almacenamiento no disponible (modo privado, cuota excedida, etc.): se ignora.
  }
}

export function agregarItem(items: ItemCarrito[], nuevoItem: ItemCarrito): ItemCarrito[] {
  const clave = claveItem(nuevoItem);
  const existente = items.find((item) => claveItem(item) === clave);

  if (existente) {
    return items.map((item) =>
      claveItem(item) === clave
        ? { ...item, cantidad: item.cantidad + nuevoItem.cantidad }
        : item
    );
  }

  return [...items, nuevoItem];
}

export function quitarItem(items: ItemCarrito[], clave: string): ItemCarrito[] {
  return items.filter((item) => claveItem(item) !== clave);
}

export function actualizarCantidad(
  items: ItemCarrito[],
  clave: string,
  cantidad: number
): ItemCarrito[] {
  if (cantidad <= 0) return quitarItem(items, clave);
  return items.map((item) =>
    claveItem(item) === clave ? { ...item, cantidad } : item
  );
}

export function calcularSubtotal(items: ItemCarrito[]): number {
  return items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
}

export function calcularCantidadTotal(items: ItemCarrito[]): number {
  return items.reduce((acc, item) => acc + item.cantidad, 0);
}
