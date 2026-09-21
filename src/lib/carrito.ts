import { claveItem, type ItemCarrito } from "@/types/carrito";

const CLAVE_STORAGE = "facheros:carrito";

export function leerCarritoGuardado(): ItemCarrito[] {
  if (typeof window === "undefined") return [];
  try {
    const crudo = window.localStorage.getItem(CLAVE_STORAGE);
    if (!crudo) return [];
    const items = JSON.parse(crudo);
    return Array.isArray(items) ? items : [];
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
