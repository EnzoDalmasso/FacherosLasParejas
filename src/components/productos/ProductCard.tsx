"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";
import { Plus } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { useCarrito } from "@/context/carrito-context";
import { calcularDescuento, formatearPrecio } from "@/lib/format";
import { crearItemCarrito } from "@/types/carrito";
import type { Producto } from "@/types/producto";
import { categorias } from "@/data/categorias";

export function ProductCard({ producto }: { producto: Producto }) {
  const { agregarAlCarrito } = useCarrito();
  const descuento = calcularDescuento(producto.precio, producto.precioAnterior);
  const nombreCategoria = categorias.find((c) => c.slug === producto.categoria)?.nombre;

  function agregarRapido(evento: MouseEvent) {
    evento.preventDefault();
    agregarAlCarrito(
      crearItemCarrito(producto, 1, producto.talles?.[0], producto.colores?.[0]?.nombre)
    );
  }

  return (
    <Link href={`/producto/${producto.id}`} className="group flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-borde/30">
        <Image
          src={producto.imagenes[0]}
          alt={producto.nombre}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className={`object-cover transition-opacity duration-300 ${
            producto.imagenes[1] ? "group-hover:opacity-0" : "group-hover:scale-105"
          }`}
        />
        {producto.imagenes[1] && (
          <Image
            src={producto.imagenes[1]}
            alt=""
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden
          />
        )}

        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {producto.nuevo && <Badge tono="negro">Nuevo</Badge>}
          {descuento && <Badge tono="acento">-{descuento}%</Badge>}
        </div>

        <button
          type="button"
          onClick={agregarRapido}
          aria-label={`Agregar ${producto.nombre} al carrito`}
          className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-crema text-negro opacity-0 shadow-md transition-all duration-200 group-hover:opacity-100 hover:bg-negro hover:text-crema sm:opacity-100 sm:group-hover:opacity-100"
        >
          <Plus className="h-4 w-4" strokeWidth={2} aria-hidden />
        </button>
      </div>

      <div className="mt-3 flex flex-col gap-0.5">
        {nombreCategoria && (
          <span className="text-[11px] uppercase tracking-wide text-gris">
            {nombreCategoria}
          </span>
        )}
        <span className="text-sm font-medium leading-snug">{producto.nombre}</span>
        <div className="mt-0.5 flex items-center gap-2">
          <span className="text-sm font-semibold">{formatearPrecio(producto.precio)}</span>
          {producto.precioAnterior && (
            <span className="text-xs text-gris line-through">
              {formatearPrecio(producto.precioAnterior)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
