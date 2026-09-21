"use client";

import { useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { QuantitySelector } from "@/components/carrito/QuantitySelector";
import { useCarrito } from "@/context/carrito-context";
import { calcularDescuento, formatearPrecio } from "@/lib/format";
import { construirLinkConsultaProducto } from "@/lib/whatsapp";
import { crearItemCarrito } from "@/types/carrito";
import type { Producto } from "@/types/producto";

export function ProductInfo({ producto }: { producto: Producto }) {
  const { agregarAlCarrito } = useCarrito();
  const [talle, setTalle] = useState<string | undefined>(undefined);
  const [color, setColor] = useState<string | undefined>(undefined);
  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(false);

  const descuento = calcularDescuento(producto.precio, producto.precioAnterior);
  const disponible = producto.stock !== 0;
  const faltaTalle = !!producto.talles?.length && !talle;
  const faltaColor = !!producto.colores?.length && !color;

  function handleAgregar() {
    if (faltaTalle || faltaColor || !disponible) return;
    agregarAlCarrito(crearItemCarrito(producto, cantidad, talle, color));
    setAgregado(true);
    setTimeout(() => setAgregado(false), 2000);
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-xs uppercase tracking-wide text-gris">
          {producto.marca ?? "Facheros"}
        </p>
        <h1 className="mt-1 font-display text-3xl tracking-wide sm:text-4xl">
          {producto.nombre}
        </h1>

        <div className="mt-3 flex items-center gap-3">
          <span className="text-2xl font-semibold">{formatearPrecio(producto.precio)}</span>
          {producto.precioAnterior && (
            <span className="text-base text-gris line-through">
              {formatearPrecio(producto.precioAnterior)}
            </span>
          )}
          {descuento && <Badge tono="acento">-{descuento}%</Badge>}
          {producto.nuevo && <Badge tono="negro">Nuevo</Badge>}
        </div>
      </div>

      <p className="text-sm leading-relaxed text-gris sm:text-base">{producto.descripcion}</p>

      <div className="flex items-center gap-2 text-sm">
        <span
          className={`h-2 w-2 rounded-full ${disponible ? "bg-green-600" : "bg-red-500"}`}
          aria-hidden
        />
        {disponible ? "En stock, listo para enviar" : "Sin stock por el momento"}
      </div>

      {producto.talles && producto.talles.length > 0 && (
        <div>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide">Talle</h3>
          <div className="flex flex-wrap gap-2">
            {producto.talles.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTalle(t)}
                aria-pressed={talle === t}
                className={`h-10 min-w-10 rounded-full border px-3 text-sm font-medium transition-colors ${
                  talle === t
                    ? "border-negro bg-negro text-crema"
                    : "border-borde hover:border-negro"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      )}

      {producto.colores && producto.colores.length > 0 && (
        <div>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide">Color</h3>
          <div className="flex flex-wrap gap-3">
            {producto.colores.map((c) => (
              <button
                key={c.nombre}
                type="button"
                onClick={() => setColor(c.nombre)}
                aria-pressed={color === c.nombre}
                aria-label={c.nombre}
                title={c.nombre}
                className={`flex h-9 w-9 items-center justify-center rounded-full border-2 transition-colors ${
                  color === c.nombre ? "border-negro" : "border-transparent"
                }`}
              >
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-borde"
                  style={{ backgroundColor: c.hex }}
                >
                  {color === c.nombre && (
                    <Check className="h-3.5 w-3.5 text-crema mix-blend-difference" strokeWidth={2.5} />
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div>
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide">Cantidad</h3>
        <QuantitySelector cantidad={cantidad} onCambiar={(c) => setCantidad(Math.max(1, c))} />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          variante="primario"
          tamano="lg"
          className="flex-1"
          onClick={handleAgregar}
          disabled={!disponible}
        >
          {agregado ? "¡Agregado!" : "Agregar al carrito"}
        </Button>
        <a
          href={construirLinkConsultaProducto(producto.nombre)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variante="secundario" tamano="lg" className="w-full sm:w-auto">
            <MessageCircle className="h-4 w-4" strokeWidth={1.75} aria-hidden />
            Consultar
          </Button>
        </a>
      </div>

      {(faltaTalle || faltaColor) && (
        <p className="text-xs text-acento">
          {faltaTalle && faltaColor
            ? "Elegí un talle y un color para agregar al carrito."
            : faltaTalle
              ? "Elegí un talle para agregar al carrito."
              : "Elegí un color para agregar al carrito."}
        </p>
      )}
    </div>
  );
}
