import type { Categoria } from "@/types/producto";

export const categorias: Categoria[] = [
  {
    slug: "remeras",
    nombre: "Remeras",
    descripcion: "Básicas, estampadas y oversize",
    imagen:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80&auto=format&fit=crop",
  },
  {
    slug: "buzos",
    nombre: "Buzos",
    descripcion: "Hoodies y crewnecks para el día a día",
    imagen:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80&auto=format&fit=crop",
  },
  {
    slug: "camperas",
    nombre: "Camperas",
    descripcion: "Urbanas, de abrigo y para lluvia",
    imagen:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80&auto=format&fit=crop",
  },
  {
    slug: "pantalones",
    nombre: "Pantalones",
    descripcion: "Jeans, cargo y joggers",
    imagen:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80&auto=format&fit=crop",
  },
  {
    slug: "calzado",
    nombre: "Calzado",
    descripcion: "Zapatillas urbanas y deportivas",
    imagen:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80&auto=format&fit=crop",
  },
  {
    slug: "accesorios",
    nombre: "Accesorios",
    descripcion: "Gorras, medias y complementos",
    imagen:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&q=80&auto=format&fit=crop",
  },
];

export function getCategoriaPorSlug(slug: string) {
  return categorias.find((c) => c.slug === slug);
}
