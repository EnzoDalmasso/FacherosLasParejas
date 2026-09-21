import { configuracionTienda } from "@/config/tienda";

export function formatearPrecio(valor: number) {
  return new Intl.NumberFormat(configuracionTienda.localeMoneda, {
    style: "currency",
    currency: configuracionTienda.moneda,
    maximumFractionDigits: 0,
  }).format(valor);
}

export function calcularDescuento(precio: number, precioAnterior?: number) {
  if (!precioAnterior || precioAnterior <= precio) return null;
  return Math.round(((precioAnterior - precio) / precioAnterior) * 100);
}
