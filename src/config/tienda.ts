/**
 * Configuración centralizada de la tienda.
 * Todo dato de contacto/negocio vive acá para no repetirlo en componentes.
 * Los valores de contacto provienen del Instagram público @facheroslasparejas;
 * verificar con el cliente antes de salir a producción.
 */
export const configuracionTienda = {
  nombre: "Facheros",
  nombreCompleto: "Facheros Las Parejas",
  eslogan: "Estilo urbano, todos los días",
  descripcion:
    "Multimarca de indumentaria y calzado en Las Parejas, Santa Fe. Ayres, Tommy Hilfiger, O'Neill, Moravia, Oassian y más.",

  // Número en formato internacional sin signos, listo para wa.me
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5493471681570",

  instagram: "https://www.instagram.com/facheroslasparejas/",

  direccion: "Av. 13 n° 669, Las Parejas, Santa Fe",
  telefono: "03471 68-1570",

  moneda: "ARS",
  localeMoneda: "es-AR",

  envioGratisDesde: 80000,
} as const;

export const marcasDestacadas = [
  "Ayres",
  "Tommy Hilfiger",
  "O'Neill",
  "Moravia",
  "Oassian",
] as const;
