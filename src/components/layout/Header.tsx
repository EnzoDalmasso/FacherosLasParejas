"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useCarrito } from "@/context/carrito-context";
import { configuracionTienda } from "@/config/tienda";

const enlaces = [
  { href: "/", label: "Inicio" },
  { href: "/tienda", label: "Tienda" },
  { href: "/categorias", label: "Categorías" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const { cantidadTotal, abrirCarrito } = useCarrito();

  return (
    <header className="sticky top-0 z-40 border-b border-borde bg-crema/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="flex flex-col leading-none" onClick={() => setMenuAbierto(false)}>
          <span className="font-display text-2xl tracking-wide sm:text-3xl">
            {configuracionTienda.nombre.toUpperCase()}
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-gris">
            Las Parejas
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {enlaces.map((enlace) => (
            <Link
              key={enlace.href}
              href={enlace.href}
              className="text-sm font-medium tracking-wide text-negro/80 transition-colors hover:text-negro"
            >
              {enlace.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={abrirCarrito}
            aria-label={`Abrir carrito, ${cantidadTotal} productos`}
            className="relative flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-negro/5"
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.75} aria-hidden />
            {cantidadTotal > 0 && (
              <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-acento px-1 text-[11px] font-bold text-crema">
                {cantidadTotal}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMenuAbierto((v) => !v)}
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuAbierto}
            className="flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-negro/5 md:hidden"
          >
            {menuAbierto ? (
              <X className="h-6 w-6" strokeWidth={1.75} aria-hidden />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={1.75} aria-hidden />
            )}
          </button>
        </div>
      </Container>

      {menuAbierto && (
        <nav className="border-t border-borde bg-crema md:hidden">
          <Container className="flex flex-col py-2">
            {enlaces.map((enlace) => (
              <Link
                key={enlace.href}
                href={enlace.href}
                onClick={() => setMenuAbierto(false)}
                className="border-b border-borde/60 py-3.5 text-base font-medium last:border-none"
              >
                {enlace.label}
              </Link>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
