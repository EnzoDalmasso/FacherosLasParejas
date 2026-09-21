export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  precioAnterior?: number;
  categoria: CategoriaSlug;
  marca?: string;
  imagenes: string[];
  talles?: string[];
  colores?: ColorProducto[];
  destacado?: boolean;
  nuevo?: boolean;
  stock?: number;
}

export interface ColorProducto {
  nombre: string;
  hex: string;
}

export type CategoriaSlug =
  | "remeras"
  | "buzos"
  | "camperas"
  | "pantalones"
  | "calzado"
  | "accesorios";

export interface Categoria {
  slug: CategoriaSlug;
  nombre: string;
  descripcion: string;
  imagen: string;
}

export type Ordenamiento =
  | "relevancia"
  | "nuevos"
  | "precio-asc"
  | "precio-desc";
