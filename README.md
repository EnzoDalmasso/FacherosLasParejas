# Facheros Las Parejas

Tienda online de demo para Facheros, un local multimarca de ropa y calzado de Las Parejas (Santa Fe). La armé para mostrársela al dueño antes de encarar la versión con pagos y stock real.

No hay backend todavía: el catálogo está en `src/data/productos.ts` y el pedido sale por WhatsApp con el detalle del carrito ya escrito. Para una primera versión alcanza.

Hecho con Next.js 16 (App Router), React 19, TypeScript y Tailwind 4. Los íconos son de lucide-react y no usé ninguna otra dependencia.

## Correrlo

```bash
npm install
npm run dev
```

Queda en http://localhost:3000. Para build: `npm run build && npm run start`.

## Variables de entorno

Copiar `.env.example` a `.env.local`. Son dos y ninguna es obligatoria porque tienen valor por defecto en `src/config/tienda.ts`:

- `NEXT_PUBLIC_WHATSAPP_NUMBER`: número al que llegan los pedidos, en formato internacional sin `+` ni espacios.
- `NEXT_PUBLIC_SITE_URL`: dominio del sitio; lo usan la metadata, el sitemap y el robots.

Ojo con el prefijo `NEXT_PUBLIC_`: todo lo que lo lleve termina en el JavaScript que baja el navegador. Sirve para datos públicos como estos, nunca para tokens o claves de APIs.

## Cómo está organizado

Las páginas viven en `src/app` (inicio, tienda, categorías, detalle de producto, nosotros y contacto). Los componentes están agrupados por sección en `src/components` y la lógica que no depende de React (carrito, filtros, armado del mensaje de WhatsApp, formato de precios) está en `src/lib`, así se puede testear o mover sin tocar la UI.

El carrito usa Context con un reducer y se guarda en `localStorage`. Como el usuario puede editar ese storage desde el navegador, al cargarlo se descarta todo menos el id, talle, color y cantidad; el nombre y el precio se vuelven a sacar del catálogo. Sin eso, cualquiera podía mandar un pedido con el precio que quisiera.

`next.config.ts` agrega algunos headers de seguridad (no se puede embeber en iframes, HSTS, nosniff) y saca el `X-Powered-By`.

## Lo que falta

Pasar el catálogo a una base de datos, sumar Mercado Pago, stock real, cálculo de envío y un panel para que el local cargue productos. Las funciones de `src/data/productos.ts` (`getProductos`, `getProductoPorId`, etc.) están pensadas para que el cambio sea reemplazar su contenido por llamadas a una API sin tocar los componentes.

## Deploy

Está pensado para Vercel: se importa el repo, se cargan las dos variables en Settings → Environment Variables y listo.
