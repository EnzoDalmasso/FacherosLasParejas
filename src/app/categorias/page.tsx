import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CategoryCard } from "@/components/categorias/CategoryCard";
import { categorias } from "@/data/categorias";

export const metadata: Metadata = {
  title: "Categorías",
  description: "Explorá el catálogo de Facheros por categoría: remeras, buzos, camperas, pantalones, calzado y accesorios.",
};

export default function CategoriasPage() {
  return (
    <div className="py-10 sm:py-14">
      <Container>
        <div className="mb-8">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-acento">
            Explorá
          </p>
          <h1 className="mt-1 font-display text-3xl tracking-wide sm:text-4xl">
            Categorías
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {categorias.map((categoria) => (
            <CategoryCard key={categoria.slug} categoria={categoria} />
          ))}
        </div>
      </Container>
    </div>
  );
}
