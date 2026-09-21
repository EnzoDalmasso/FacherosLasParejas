import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FacebookIcon, InstagramIcon } from "@/components/ui/icons";
import { configuracionTienda } from "@/config/tienda";
import { categorias } from "@/data/categorias";

export function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="border-t border-borde bg-negro text-crema">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <span className="font-display text-2xl tracking-wide">
            {configuracionTienda.nombre.toUpperCase()}
          </span>
          <p className="max-w-xs text-sm text-crema/70">{configuracionTienda.eslogan}</p>
          <div className="mt-2 flex gap-3">
            <a
              href={configuracionTienda.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Facheros"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-crema/20 transition-colors hover:bg-crema/10"
            >
              <InstagramIcon className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={configuracionTienda.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Facheros"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-crema/20 transition-colors hover:bg-crema/10"
            >
              <FacebookIcon className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-crema/50">
            Categorías
          </h3>
          {categorias.slice(0, 5).map((categoria) => (
            <Link
              key={categoria.slug}
              href={`/tienda?categoria=${categoria.slug}`}
              className="text-sm text-crema/80 transition-colors hover:text-crema"
            >
              {categoria.nombre}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-crema/50">
            Tienda
          </h3>
          <Link href="/tienda" className="text-sm text-crema/80 transition-colors hover:text-crema">
            Ver todo
          </Link>
          <Link href="/nosotros" className="text-sm text-crema/80 transition-colors hover:text-crema">
            Nosotros
          </Link>
          <Link href="/contacto" className="text-sm text-crema/80 transition-colors hover:text-crema">
            Contacto
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-crema/50">
            Visitanos
          </h3>
          <p className="flex items-start gap-2 text-sm text-crema/80">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
            {configuracionTienda.direccion}
          </p>
          <p className="flex items-center gap-2 text-sm text-crema/80">
            <Phone className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
            {configuracionTienda.telefono}
          </p>
        </div>
      </Container>

      <div className="border-t border-crema/10 py-5">
        <Container>
          <p className="text-center text-xs text-crema/50">
            © {anio} {configuracionTienda.nombreCompleto}. Demo de e-commerce con fines
            comerciales.
          </p>
        </Container>
      </div>
    </footer>
  );
}
