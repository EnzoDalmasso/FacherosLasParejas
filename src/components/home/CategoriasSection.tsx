import { Container } from "@/components/ui/Container";
import { CategoryCard } from "@/components/categorias/CategoryCard";
import { categorias } from "@/data/categorias";

export function CategoriasSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-acento">
              Explorá
            </p>
            <h2 className="mt-1 font-display text-3xl tracking-wide sm:text-4xl">
              Categorías
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categorias.map((categoria) => (
            <CategoryCard key={categoria.slug} categoria={categoria} />
          ))}
        </div>
      </Container>
    </section>
  );
}
