import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { mediaDemo } from "@/data/media";
import { configuracionTienda } from "@/config/tienda";

export function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-negro sm:min-h-[92vh]">
      <Image
        src={mediaDemo.hero}
        alt="Look urbano Facheros"
        fill
        priority
        sizes="100vw"
        className="object-cover object-top opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-negro via-negro/40 to-negro/10" />

      <Container className="relative z-10 flex flex-col gap-5 pb-16 pt-32 text-crema sm:pb-24">
        <p className="animar-en-vista text-xs font-medium uppercase tracking-[0.3em] text-crema/70">
          {configuracionTienda.nombreCompleto}
        </p>
        <h1 className="animar-en-vista max-w-xl font-display text-5xl leading-[0.95] tracking-wide sm:text-7xl">
          VESTITE
          <br />
          COMO FACHERO
        </h1>
        <p className="animar-en-vista max-w-md text-sm text-crema/80 sm:text-base">
          {configuracionTienda.descripcion}
        </p>

        <div className="animar-en-vista mt-4 flex flex-wrap gap-3">
          <Link href="/tienda">
            <Button variante="acento" tamano="lg">
              Ver tienda
            </Button>
          </Link>
          <Link
            href="/categorias"
            className="inline-flex h-14 items-center justify-center rounded-none border border-crema px-8 text-base font-medium text-crema transition-colors hover:bg-crema hover:text-negro"
          >
            Explorar categorías
          </Link>
        </div>
      </Container>
    </section>
  );
}
