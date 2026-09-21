import Image from "next/image";
import { X } from "lucide-react";
import { QuantitySelector } from "@/components/carrito/QuantitySelector";
import { formatearPrecio } from "@/lib/format";
import { claveItem, type ItemCarrito } from "@/types/carrito";
import { useCarrito } from "@/context/carrito-context";

export function CartItem({ item }: { item: ItemCarrito }) {
  const { cambiarCantidad, quitarDelCarrito } = useCarrito();
  const clave = claveItem(item);
  const detalles = [item.talle, item.color].filter(Boolean).join(" · ");

  return (
    <div className="flex gap-4 py-4">
      <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-xl bg-borde/40">
        <Image src={item.imagen} alt={item.nombre} fill sizes="80px" className="object-cover" />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-sm font-medium leading-tight">{item.nombre}</p>
            {detalles && <p className="mt-0.5 text-xs text-gris">{detalles}</p>}
          </div>
          <button
            type="button"
            onClick={() => quitarDelCarrito(clave)}
            aria-label={`Quitar ${item.nombre} del carrito`}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-gris transition-colors hover:bg-negro/5 hover:text-negro"
          >
            <X className="h-4 w-4" strokeWidth={1.75} aria-hidden />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <QuantitySelector
            cantidad={item.cantidad}
            onCambiar={(cantidad) => cambiarCantidad(clave, cantidad)}
            tamano="sm"
          />
          <span className="text-sm font-semibold">
            {formatearPrecio(item.precio * item.cantidad)}
          </span>
        </div>
      </div>
    </div>
  );
}
