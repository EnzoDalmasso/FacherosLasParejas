import { configuracionTienda } from "@/config/tienda";
import { formatearPrecio } from "@/lib/format";
import type { ItemCarrito } from "@/types/carrito";

function limpiarNumero(numero: string) {
  return numero.replace(/\D/g, "");
}

export function construirMensajePedido(items: ItemCarrito[], total: number) {
  const lineas = items.map((item) => {
    const detalles = [item.talle, item.color].filter(Boolean).join(" / ");
    const sufijo = detalles ? ` — ${detalles}` : "";
    return `- ${item.nombre}${sufijo} — x${item.cantidad}`;
  });

  return [
    "Hola, quiero realizar el siguiente pedido:",
    "",
    ...lineas,
    "",
    `Total: ${formatearPrecio(total)}`,
  ].join("\n");
}

export function construirLinkWhatsapp(mensaje: string, numero: string = configuracionTienda.whatsapp) {
  const numeroLimpio = limpiarNumero(numero);
  return `https://wa.me/${numeroLimpio}?text=${encodeURIComponent(mensaje)}`;
}

export function construirLinkConsultaProducto(nombreProducto: string) {
  const mensaje = `Hola, quiero consultar por: ${nombreProducto}`;
  return construirLinkWhatsapp(mensaje);
}
