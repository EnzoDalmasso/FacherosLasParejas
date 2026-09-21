# Facheros Las Parejas — Demo de tienda online

Demo de e-commerce para **Facheros Las Parejas**, tienda multimarca de indumentaria y
calzado urbano (Las Parejas, Santa Fe). Pensada para presentar al cliente y desplegar
en Vercel, con una arquitectura preparada para evolucionar a un e-commerce real
(backend, base de datos, stock, pedidos, usuarios, panel admin, Mercado Pago, envíos,
cupones y analytics) sin rehacer el frontend.

> La identidad visual, los productos y los textos de esta demo son de carácter
> comercial/demostrativo. Los datos de contacto (WhatsApp, dirección, Instagram) se
> tomaron del perfil público [@facheroslasparejas](https://www.instagram.com/facheroslasparejas/)
> y deben confirmarse con el cliente antes de salir a producción.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** + **TypeScript** estricto
- **Tailwind CSS 4** (tokens de diseño vía `@theme`, sin archivo de config)
- **lucide-react** para iconografía
- Carrito con **Context + `useReducer`** y persistencia en `localStorage`
- Pedido enviado por **WhatsApp** (`wa.me`) con mensaje autogenerado

No se agregó backend, base de datos ni librerías de e-commerce: los "productos" son
datos mock tipados en `src/data/productos.ts`, pensados para reemplazarse por
llamadas a una API sin tocar los componentes.

## Instalación y desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm run start
```

## Lint

```bash
npm run lint
```

## Variables de entorno

Copiá `.env.example` a `.env.local` y ajustá los valores:

| Variable | Descripción | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número de WhatsApp del negocio (formato internacional, sin signos) usado en el botón flotante, la consulta de producto y el checkout del carrito. | `5493471672399` |
| `NEXT_PUBLIC_SITE_URL` | URL pública del sitio, usada en metadata, `sitemap.xml` y `robots.txt`. | `https://facheros-tienda.vercel.app` |

Ninguna variable es obligatoria para correr la demo: ambas tienen un valor por
defecto razonable en `src/config/tienda.ts`.

## Estructura principal

```text
src/
├── app/                  Rutas (App Router)
│   ├── page.tsx          Inicio
│   ├── tienda/           Catálogo con búsqueda, filtros y orden
│   ├── categorias/       Listado de categorías
│   ├── producto/[id]/    Detalle de producto (ruta dinámica, estática por producto)
│   ├── nosotros/
│   ├── contacto/
│   ├── sitemap.ts, robots.ts, icon.tsx
│   └── layout.tsx        Layout raíz: fuentes, header, footer, carrito
├── components/
│   ├── layout/           Header, Footer, botón flotante de WhatsApp
│   ├── home/             Secciones de la home (hero, destacados, marca, CTA)
│   ├── productos/        ProductCard, ProductGrid, galería, filtros, buscador, orden
│   ├── categorias/       CategoryCard
│   ├── carrito/          Drawer del carrito, item, selector de cantidad
│   ├── contacto/         Formulario que arma el mensaje de WhatsApp
│   └── ui/               Botón, badge, contenedor, estado vacío, iconos propios
├── context/
│   └── carrito-context.tsx   Estado del carrito (reducer + persistencia)
├── data/
│   ├── productos.ts      Catálogo mock tipado + helpers de consulta
│   ├── categorias.ts     Categorías
│   └── media.ts           Imágenes de demo fuera del catálogo (hero, local)
├── lib/
│   ├── carrito.ts         Lógica pura del carrito (agregar/quitar/persistir)
│   ├── filtros.ts          Lógica de búsqueda/filtrado/orden de la tienda
│   ├── whatsapp.ts         Construcción de links y mensajes de WhatsApp
│   └── format.ts           Formato de precio y cálculo de descuento
├── types/                 Tipos de dominio (Producto, Categoría, ItemCarrito)
└── config/
    └── tienda.ts           Configuración centralizada (nombre, contacto, moneda)
```

## Preparado para conectar con backend

- **Catálogo**: `src/data/productos.ts` expone `getProductos`, `getProductoPorId`,
  `getDestacados`, `getRelacionados`, `getProductosPorCategoria`. Reemplazar el cuerpo
  de estas funciones por llamadas a una API/DB mantiene intacta toda la UI.
- **Tipos**: `Producto`, `Categoria` e `ItemCarrito` (en `src/types/`) están pensados
  como el contrato entre frontend y un futuro backend.
- **Carrito**: la lógica de estado (`context/carrito-context.tsx`) y persistencia
  (`lib/carrito.ts`) están separadas de la UI; migrar de `localStorage` a una API de
  pedidos implica cambiar solo esas dos piezas.
- **WhatsApp → pedido real**: `lib/whatsapp.ts` genera el mensaje de pedido; el mismo
  punto es donde se integraría la creación de una orden real (Mercado Pago, stock,
  confirmación) antes o en paralelo al envío por WhatsApp.
- **Configuración centralizada**: `src/config/tienda.ts` concentra nombre, WhatsApp,
  Instagram, dirección y moneda — listo para pasar a variables de entorno o a un panel
  de administración.

Lo que falta para producción (fuera del alcance de esta demo): autenticación de
usuarios, panel administrativo, stock real, pasarela de pagos, cálculo de envío y
analytics.

## Deploy en Vercel

1. Subir el repositorio a GitHub/GitLab/Bitbucket.
2. En [vercel.com/new](https://vercel.com/new), importar el repositorio (Next.js se
   detecta automáticamente, sin configuración adicional).
3. (Opcional) Configurar `NEXT_PUBLIC_WHATSAPP_NUMBER` y `NEXT_PUBLIC_SITE_URL` en
   **Project Settings → Environment Variables**.
4. Deploy. Cada push a la rama principal genera un nuevo deploy de producción.
