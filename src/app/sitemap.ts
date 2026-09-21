import type { MetadataRoute } from "next";
import { getProductos } from "@/data/productos";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://facheros-tienda.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const rutasEstaticas = ["", "/tienda", "/categorias", "/nosotros", "/contacto"].map(
    (ruta) => ({
      url: `${baseUrl}${ruta}`,
      lastModified: new Date(),
    })
  );

  const rutasProductos = getProductos().map((producto) => ({
    url: `${baseUrl}/producto/${producto.id}`,
    lastModified: new Date(),
  }));

  return [...rutasEstaticas, ...rutasProductos];
}
