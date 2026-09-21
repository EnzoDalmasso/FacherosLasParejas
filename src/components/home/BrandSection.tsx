import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { mediaDemo } from "@/data/media";
import { marcasDestacadas } from "@/config/tienda";

export function BrandSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src={mediaDemo.local}
            alt="Interior del local Facheros"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-acento">
            Nuestra esencia
          </p>
          <h2 className="mt-1 font-display text-3xl leading-tight tracking-wide sm:text-4xl">
            No vendemos ropa.
            <br />
            Vendemos actitud.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-gris sm:text-base">
            Desde Las Parejas, elegimos cada prenda pensando en la calle, en salir con
            los amigos y en verte bien sin esfuerzo. Curamos marcas que combinan
            calidad y estilo urbano para que siempre estés a la altura.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {marcasDestacadas.map((marca) => (
              <span
                key={marca}
                className="font-display text-lg tracking-wide text-negro/70"
              >
                {marca}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
