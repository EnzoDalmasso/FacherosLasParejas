"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, X } from "lucide-react";
import { useCarrito } from "@/context/carrito-context";
import { CartItem } from "@/components/carrito/CartItem";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { formatearPrecio } from "@/lib/format";
import { construirLinkWhatsapp, construirMensajePedido } from "@/lib/whatsapp";

export function CartDrawer() {
  const { items, subtotal, estaAbierto, cerrarCarrito, vaciarCarrito } = useCarrito();

  useEffect(() => {
    if (!estaAbierto) return;

    const alPresionarTecla = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") cerrarCarrito();
    };

    document.addEventListener("keydown", alPresionarTecla);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", alPresionarTecla);
      document.body.style.overflow = "";
    };
  }, [estaAbierto, cerrarCarrito]);

  if (!estaAbierto) return null;

  const linkWhatsapp = construirLinkWhatsapp(construirMensajePedido(items, subtotal));

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Carrito de compras">
      <button
        type="button"
        aria-label="Cerrar carrito"
        onClick={cerrarCarrito}
        className="absolute inset-0 bg-negro/40 animar-en-vista"
      />

      <div className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-crema shadow-xl">
        <div className="flex items-center justify-between border-b border-borde px-5 py-4">
          <h2 className="font-display text-xl tracking-wide">Tu carrito</h2>
          <button
            type="button"
            onClick={cerrarCarrito}
            aria-label="Cerrar carrito"
            className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-negro/5"
          >
            <X className="h-5 w-5" strokeWidth={1.75} aria-hidden />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5">
          {items.length === 0 ? (
            <div className="pt-10">
              <EmptyState
                icon={ShoppingBag}
                titulo="Tu carrito está vacío"
                descripcion="Agregá productos desde la tienda para armar tu pedido."
                accion={
                  <Link
                    href="/tienda"
                    onClick={cerrarCarrito}
                    className="inline-flex h-9 items-center justify-center rounded-full border border-negro px-4 text-sm font-medium transition-colors hover:bg-negro hover:text-crema"
                  >
                    Ir a la tienda
                  </Link>
                }
              />
            </div>
          ) : (
            <div className="divide-y divide-borde/70">
              {items.map((item) => (
                <CartItem key={`${item.productoId}-${item.talle}-${item.color}`} item={item} />
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-borde px-5 py-5">
            <div className="flex items-center justify-between text-sm text-gris">
              <span>Subtotal</span>
              <span className="font-semibold text-negro">{formatearPrecio(subtotal)}</span>
            </div>
            <p className="mt-1 text-xs text-gris">
              El envío se coordina por WhatsApp según tu ubicación.
            </p>

            <a href={linkWhatsapp} target="_blank" rel="noopener noreferrer" className="mt-4 block">
              <Button variante="acento" className="w-full">
                Finalizar pedido por WhatsApp
              </Button>
            </a>
            <button
              type="button"
              onClick={vaciarCarrito}
              className="mt-3 w-full text-center text-sm text-gris underline-offset-2 transition-colors hover:text-negro hover:underline"
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
