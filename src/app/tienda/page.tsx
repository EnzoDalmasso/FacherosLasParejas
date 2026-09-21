import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { TiendaClient } from "@/components/productos/TiendaClient";
import { getProductos } from "@/data/productos";
import { categorias } from "@/data/categorias";
import type { CategoriaSlug } from "@/types/producto";

export const metadata: Metadata = {
  title: "Tienda",
  description: "Descubrí toda la colección de Facheros: remeras, buzos, camperas, pantalones, calzado y accesorios.",
};

function esCategoriaValida(valor?: string): valor is CategoriaSlug {
  return !!valor && categorias.some((c) => c.slug === valor);
}

export default async function TiendaPage({ searchParams }: PageProps<"/tienda">) {
  const params = await searchParams;
  const categoriaParam = Array.isArray(params.categoria) ? params.categoria[0] : params.categoria;
  const categoriaInicial = esCategoriaValida(categoriaParam) ? categoriaParam : null;

  return (
    <div className="py-10 sm:py-14">
      <Container>
        <div className="mb-8">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-acento">
            Catálogo
          </p>
          <h1 className="mt-1 font-display text-3xl tracking-wide sm:text-4xl">Tienda</h1>
        </div>

        <TiendaClient productos={getProductos()} categoriaInicial={categoriaInicial} />
      </Container>
    </div>
  );
}
