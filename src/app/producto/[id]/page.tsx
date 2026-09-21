import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ProductGallery } from "@/components/productos/ProductGallery";
import { ProductInfo } from "@/components/productos/ProductInfo";
import { ProductGrid } from "@/components/productos/ProductGrid";
import { getProductoPorId, getProductos, getRelacionados } from "@/data/productos";

export async function generateStaticParams() {
  return getProductos().map((producto) => ({ id: producto.id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/producto/[id]">): Promise<Metadata> {
  const { id } = await params;
  const producto = getProductoPorId(id);

  if (!producto) return { title: "Producto no encontrado" };

  return {
    title: producto.nombre,
    description: producto.descripcion,
    openGraph: {
      title: producto.nombre,
      description: producto.descripcion,
      images: [{ url: producto.imagenes[0] }],
    },
  };
}

export default async function ProductoPage({ params }: PageProps<"/producto/[id]">) {
  const { id } = await params;
  const producto = getProductoPorId(id);

  if (!producto) notFound();

  const relacionados = getRelacionados(producto);

  return (
    <div className="py-10 sm:py-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ProductGallery imagenes={producto.imagenes} nombre={producto.nombre} />
          <ProductInfo producto={producto} />
        </div>

        {relacionados.length > 0 && (
          <section className="mt-20">
            <h2 className="mb-6 font-display text-2xl tracking-wide sm:text-3xl">
              También te puede interesar
            </h2>
            <ProductGrid productos={relacionados} />
          </section>
        )}
      </Container>
    </div>
  );
}
