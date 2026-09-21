import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ProductGrid } from "@/components/productos/ProductGrid";
import { getDestacados } from "@/data/productos";

export function ProductosDestacados() {
  const destacados = getDestacados(8);

  return (
    <section className="bg-blanco py-16 sm:py-24">
      <Container>
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-acento">
              Lo mejor
            </p>
            <h2 className="mt-1 font-display text-3xl tracking-wide sm:text-4xl">
              Destacados
            </h2>
          </div>
          <Link
            href="/tienda"
            className="flex items-center gap-1 text-sm font-medium text-negro/80 hover:text-negro"
          >
            Ver todo
            <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
          </Link>
        </div>

        <ProductGrid productos={destacados} />
      </Container>
    </section>
  );
}
