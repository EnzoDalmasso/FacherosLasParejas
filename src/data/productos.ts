import type { Producto } from "@/types/producto";

// Pool de imágenes de demostración (Unsplash, licencia libre de uso comercial).
// Reemplazar por fotografía real del local cuando esté disponible.
const IMG = {
  remeras: [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=900&q=80&auto=format&fit=crop",
  ],
  buzos: [
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=900&q=80&auto=format&fit=crop",
  ],
  camperas: [
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900&q=80&auto=format&fit=crop",
  ],
  pantalones: [
    "https://images.unsplash.com/photo-1542272604-787c3835535d?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=900&q=80&auto=format&fit=crop",
  ],
  calzado: [
    "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1465479423260-c4afc24172c6?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=900&q=80&auto=format&fit=crop",
  ],
  accesorios: [
    "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1577803645773-f96470509666?w=900&q=80&auto=format&fit=crop",
  ],
};

const TALLES_ROPA = ["S", "M", "L", "XL"];
const TALLES_CALZADO = ["38", "39", "40", "41", "42", "43"];

const NEGRO = { nombre: "Negro", hex: "#161616" };
const BLANCO = { nombre: "Blanco", hex: "#f5f4f0" };
const GRIS = { nombre: "Gris melange", hex: "#8b8a85" };
const VERDE_MILITAR = { nombre: "Verde militar", hex: "#4b5320" };
const BORDO = { nombre: "Bordó", hex: "#6d1f2a" };
const BEIGE = { nombre: "Beige", hex: "#d8c9a3" };
const AZUL = { nombre: "Azul", hex: "#2b3a55" };

export const productos: Producto[] = [
  // ---------- REMERAS ----------
  {
    id: "remera-oversize-basica",
    nombre: "Remera Oversize Básica",
    descripcion:
      "Remera de algodón de calce oversize, ideal para el uso diario. Tejido suave que no pierde forma con el lavado.",
    precio: 26999,
    categoria: "remeras",
    marca: "Ayres",
    imagenes: [IMG.remeras[0], IMG.remeras[1]],
    talles: TALLES_ROPA,
    colores: [NEGRO, BLANCO, GRIS],
    destacado: true,
  },
  {
    id: "remera-estampada-retro",
    nombre: "Remera Estampada Retro",
    descripcion:
      "Remera de algodón con estampa retro en el frente. Corte regular y cuello redondo reforzado.",
    precio: 28999,
    precioAnterior: 34999,
    categoria: "remeras",
    marca: "Tommy Hilfiger",
    imagenes: [IMG.remeras[1], IMG.remeras[2]],
    talles: TALLES_ROPA,
    colores: [BLANCO, AZUL],
  },
  {
    id: "remera-lisa-premium",
    nombre: "Remera Lisa Premium",
    descripcion:
      "Remera lisa de algodón peinado 24/1, más tupida y con mejor caída que una remera básica.",
    precio: 31999,
    categoria: "remeras",
    marca: "O'Neill",
    imagenes: [IMG.remeras[2], IMG.remeras[0]],
    talles: TALLES_ROPA,
    colores: [NEGRO, BLANCO, BORDO],
    nuevo: true,
  },
  {
    id: "remera-bordada-logo",
    nombre: "Remera Bordada Logo",
    descripcion:
      "Remera de algodón con bordado del logo en el pecho. Detalle premium que suma sin sobrecargar.",
    precio: 29999,
    categoria: "remeras",
    marca: "Moravia",
    imagenes: [IMG.remeras[0], IMG.remeras[2]],
    talles: TALLES_ROPA,
    colores: [GRIS, NEGRO],
    destacado: true,
  },
  {
    id: "remera-manga-larga-termica",
    nombre: "Remera Manga Larga Térmica",
    descripcion:
      "Remera de manga larga con interior térmico, pensada para media estación bajo una campera.",
    precio: 33999,
    categoria: "remeras",
    marca: "Oassian",
    imagenes: [IMG.remeras[1], IMG.remeras[0]],
    talles: TALLES_ROPA,
    colores: [NEGRO, AZUL],
  },

  // ---------- BUZOS ----------
  {
    id: "buzo-canguro-frisado",
    nombre: "Buzo Canguro Frisado",
    descripcion:
      "Buzo con capucha y bolsillo canguro, interior frisado para más abrigo. Puño y cintura acanalados.",
    precio: 52999,
    precioAnterior: 61999,
    categoria: "buzos",
    marca: "Ayres",
    imagenes: [IMG.buzos[0], IMG.buzos[1]],
    talles: TALLES_ROPA,
    colores: [GRIS, NEGRO],
    destacado: true,
  },
  {
    id: "hoodie-oversize-urbano",
    nombre: "Hoodie Oversize Urbano",
    descripcion:
      "Hoodie de calce oversize con capucha forrada y bolsillo frontal amplio. Estética urbana, tela pesada.",
    precio: 57999,
    categoria: "buzos",
    marca: "Tommy Hilfiger",
    imagenes: [IMG.buzos[1], IMG.buzos[2]],
    talles: TALLES_ROPA,
    colores: [NEGRO, BEIGE],
    nuevo: true,
    destacado: true,
  },
  {
    id: "buzo-crewneck-basico",
    nombre: "Buzo Crewneck Básico",
    descripcion:
      "Buzo sin capucha, cuello redondo, corte clásico. El básico que no puede faltar en el placard.",
    precio: 47999,
    categoria: "buzos",
    marca: "O'Neill",
    imagenes: [IMG.buzos[2], IMG.buzos[0]],
    talles: TALLES_ROPA,
    colores: [GRIS, AZUL, NEGRO],
  },
  {
    id: "buzo-rustico-estampado",
    nombre: "Buzo Rústico Estampado",
    descripcion:
      "Buzo de algodón rústico con estampa en el frente. Tela con cuerpo, ideal para los días más fríos.",
    precio: 54999,
    categoria: "buzos",
    marca: "Moravia",
    imagenes: [IMG.buzos[0], IMG.buzos[2]],
    talles: TALLES_ROPA,
    colores: [BORDO, VERDE_MILITAR],
  },
  {
    id: "hoodie-tecnico-windstopper",
    nombre: "Hoodie Técnico Windstopper",
    descripcion:
      "Hoodie con tratamiento cortaviento en el exterior. Pensado para uso urbano en días de viento.",
    precio: 62999,
    categoria: "buzos",
    marca: "Oassian",
    imagenes: [IMG.buzos[1], IMG.buzos[0]],
    talles: TALLES_ROPA,
    colores: [NEGRO, GRIS],
  },

  // ---------- CAMPERAS ----------
  {
    id: "campera-biker-eco-cuero",
    nombre: "Campera Biker Eco-Cuero",
    descripcion:
      "Campera estilo biker en eco-cuero con cierres metálicos y forro interior. Un clásico que nunca falla.",
    precio: 98999,
    categoria: "camperas",
    marca: "Ayres",
    imagenes: [IMG.camperas[0], IMG.camperas[1]],
    talles: TALLES_ROPA,
    colores: [NEGRO],
    destacado: true,
  },
  {
    id: "campera-bomber-urbana",
    nombre: "Campera Bomber Urbana",
    descripcion:
      "Campera bomber liviana con puños y cintura elastizados. Fácil de combinar en el día a día.",
    precio: 84999,
    precioAnterior: 99999,
    categoria: "camperas",
    marca: "Tommy Hilfiger",
    imagenes: [IMG.camperas[2], IMG.camperas[0]],
    talles: TALLES_ROPA,
    colores: [BEIGE, NEGRO],
  },
  {
    id: "campera-utility-cargo",
    nombre: "Campera Utility Cargo",
    descripcion:
      "Campera con múltiples bolsillos utility, corte oversize y capucha desmontable. Estética workwear.",
    precio: 112999,
    categoria: "camperas",
    marca: "O'Neill",
    imagenes: [IMG.camperas[1], IMG.camperas[2]],
    talles: TALLES_ROPA,
    colores: [VERDE_MILITAR, BEIGE],
    nuevo: true,
    destacado: true,
  },
  {
    id: "campera-parka-impermeable",
    nombre: "Campera Parka Impermeable",
    descripcion:
      "Parka con tratamiento impermeable y capucha con cordón regulable. Abrigo para los días de lluvia.",
    precio: 134999,
    categoria: "camperas",
    marca: "Moravia",
    imagenes: [IMG.camperas[0], IMG.camperas[2]],
    talles: TALLES_ROPA,
    colores: [VERDE_MILITAR, NEGRO],
  },
  {
    id: "campera-puffer-acolchada",
    nombre: "Campera Puffer Acolchada",
    descripcion:
      "Campera acolchada tipo puffer, muy liviana para el abrigo que da. Cuello alto y cierre frontal.",
    precio: 118999,
    categoria: "camperas",
    marca: "Oassian",
    imagenes: [IMG.camperas[1], IMG.camperas[0]],
    talles: TALLES_ROPA,
    colores: [NEGRO, BORDO],
  },

  // ---------- PANTALONES ----------
  {
    id: "jean-slim-fit-azul",
    nombre: "Jean Slim Fit Azul",
    descripcion:
      "Jean slim fit de tiro medio, lavado azul clásico. Elastizado para mayor comodidad de movimiento.",
    precio: 54999,
    categoria: "pantalones",
    marca: "Ayres",
    imagenes: [IMG.pantalones[0], IMG.pantalones[1]],
    talles: TALLES_ROPA,
    colores: [AZUL],
    destacado: true,
  },
  {
    id: "jean-straight-negro",
    nombre: "Jean Straight Negro",
    descripcion:
      "Jean corte recto en negro desgastado. Versátil, combina tanto con zapatillas como con botas.",
    precio: 56999,
    categoria: "pantalones",
    marca: "Tommy Hilfiger",
    imagenes: [IMG.pantalones[1], IMG.pantalones[0]],
    talles: TALLES_ROPA,
    colores: [NEGRO],
  },
  {
    id: "pantalon-cargo-jogger",
    nombre: "Pantalón Cargo Jogger",
    descripcion:
      "Pantalón cargo con puño elastizado y bolsillos laterales amplios. Calce cómodo tipo jogger.",
    precio: 51999,
    precioAnterior: 59999,
    categoria: "pantalones",
    marca: "O'Neill",
    imagenes: [IMG.pantalones[2], IMG.pantalones[0]],
    talles: TALLES_ROPA,
    colores: [VERDE_MILITAR, BEIGE, NEGRO],
    nuevo: true,
  },
  {
    id: "short-de-jean-deslavado",
    nombre: "Short De Jean Deslavado",
    descripcion:
      "Short de jean deslavado con dobladillo desflecado. Para los días de calor sin perder el estilo.",
    precio: 38999,
    categoria: "pantalones",
    marca: "Moravia",
    imagenes: [IMG.pantalones[2], IMG.pantalones[1]],
    talles: TALLES_ROPA,
    colores: [AZUL],
  },
  {
    id: "jogger-deportivo-frisado",
    nombre: "Jogger Deportivo Frisado",
    descripcion:
      "Jogger de algodón frisado con puño ajustado y cordón regulable en la cintura. Ideal para entrenar o salir.",
    precio: 44999,
    categoria: "pantalones",
    marca: "Oassian",
    imagenes: [IMG.pantalones[0], IMG.pantalones[2]],
    talles: TALLES_ROPA,
    colores: [GRIS, NEGRO],
  },

  // ---------- CALZADO ----------
  {
    id: "zapatillas-urbanas-chunky",
    nombre: "Zapatillas Urbanas Chunky",
    descripcion:
      "Zapatillas de suela alta estilo chunky, con detalles de color combinados. Pisada firme y muy cómoda.",
    precio: 109999,
    categoria: "calzado",
    marca: "Ayres",
    imagenes: [IMG.calzado[0], IMG.calzado[1]],
    talles: TALLES_CALZADO,
    destacado: true,
  },
  {
    id: "zapatillas-retro-running",
    nombre: "Zapatillas Retro Running",
    descripcion:
      "Zapatillas inspiradas en los modelos running de los 90. Cámara de aire visible en la suela.",
    precio: 124999,
    precioAnterior: 144999,
    categoria: "calzado",
    marca: "Tommy Hilfiger",
    imagenes: [IMG.calzado[1], IMG.calzado[2]],
    talles: TALLES_CALZADO,
    destacado: true,
  },
  {
    id: "zapatillas-skate-lona",
    nombre: "Zapatillas Skate Lona",
    descripcion:
      "Zapatillas de lona resistente con puntera reforzada y suela de goma antideslizante.",
    precio: 87999,
    categoria: "calzado",
    marca: "O'Neill",
    imagenes: [IMG.calzado[2], IMG.calzado[0]],
    talles: TALLES_CALZADO,
    nuevo: true,
  },
  {
    id: "zapatillas-training",
    nombre: "Zapatillas Training",
    descripcion:
      "Zapatillas livianas pensadas para entrenar, con malla transpirable y mediasuela flexible.",
    precio: 116999,
    categoria: "calzado",
    marca: "Moravia",
    imagenes: [IMG.calzado[0], IMG.calzado[2]],
    talles: TALLES_CALZADO,
  },
  {
    id: "botitas-urbanas",
    nombre: "Botitas Urbanas",
    descripcion:
      "Botitas de cuero sintético con cordones y suela de goma. Para combinar jean o pantalón cargo.",
    precio: 132999,
    categoria: "calzado",
    marca: "Oassian",
    imagenes: [IMG.calzado[1], IMG.calzado[0]],
    talles: TALLES_CALZADO,
  },

  // ---------- ACCESORIOS ----------
  {
    id: "gorra-visera-curva",
    nombre: "Gorra Visera Curva",
    descripcion:
      "Gorra de algodón lavado con visera curva y cierre trasero ajustable. Calce unisex.",
    precio: 21999,
    categoria: "accesorios",
    marca: "Ayres",
    imagenes: [IMG.accesorios[0], IMG.accesorios[1]],
    talles: ["Único"],
    colores: [NEGRO, BEIGE],
    destacado: true,
  },
  {
    id: "mochila-urbana-impermeable",
    nombre: "Mochila Urbana Impermeable",
    descripcion:
      "Mochila con tratamiento impermeable, compartimento para notebook y bolsillos internos organizadores.",
    precio: 68999,
    categoria: "accesorios",
    marca: "Tommy Hilfiger",
    imagenes: [IMG.accesorios[1], IMG.accesorios[0]],
    talles: ["Único"],
    colores: [NEGRO, GRIS],
    nuevo: true,
  },
  {
    id: "lentes-de-sol-clasicos",
    nombre: "Lentes De Sol Clásicos",
    descripcion:
      "Lentes de sol con marco liviano y protección UV400. Un accesorio que completa cualquier look.",
    precio: 18999,
    categoria: "accesorios",
    marca: "O'Neill",
    imagenes: [IMG.accesorios[2], IMG.accesorios[0]],
    talles: ["Único"],
  },
  {
    id: "cinturon-de-cuero",
    nombre: "Cinturón De Cuero",
    descripcion:
      "Cinturón de cuero genuino con hebilla metálica. Ancho medio, apto para jean o pantalón de vestir.",
    precio: 24999,
    precioAnterior: 29999,
    categoria: "accesorios",
    marca: "Moravia",
    imagenes: [IMG.accesorios[1], IMG.accesorios[2]],
    talles: ["Único"],
    colores: [NEGRO, BORDO],
  },
  {
    id: "gorra-trucker-bordada",
    nombre: "Gorra Trucker Bordada",
    descripcion:
      "Gorra estilo trucker con panel frontal bordado y malla trasera transpirable.",
    precio: 23999,
    categoria: "accesorios",
    marca: "Oassian",
    imagenes: [IMG.accesorios[0], IMG.accesorios[2]],
    talles: ["Único"],
    colores: [GRIS, NEGRO],
  },
];

export function getProductos() {
  return productos;
}

export function getProductoPorId(id: string) {
  return productos.find((p) => p.id === id);
}

export function getDestacados(limite = 8) {
  return productos.filter((p) => p.destacado).slice(0, limite);
}

export function getNuevos(limite = 8) {
  return productos.filter((p) => p.nuevo).slice(0, limite);
}

export function getRelacionados(producto: Producto, limite = 4) {
  return productos
    .filter((p) => p.id !== producto.id && p.categoria === producto.categoria)
    .slice(0, limite);
}

export function getProductosPorCategoria(categoria: string) {
  return productos.filter((p) => p.categoria === categoria);
}
