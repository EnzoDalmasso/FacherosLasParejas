import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { mediaDemo } from "@/data/media";
import { configuracionTienda, marcasDestacadas } from "@/config/tienda";

export const metadata: Metadata = {
  title: "Nosotros",
  description: `Conocé la historia de ${configuracionTienda.nombreCompleto}, tienda multimarca de indumentaria en Las Parejas.`,
};

const valores = [
  {
    titulo: "Selección curada",
    descripcion:
      "Elegimos cada marca y cada prenda pensando en calidad, durabilidad y estilo real de calle.",
  },
  {
    titulo: "Atención cercana",
    descripcion:
      "Te asesoramos por WhatsApp o en el local para que encuentres el talle y el look correcto.",
  },
  {
    titulo: "Estilo urbano",
    descripcion:
      "Streetwear, casual y básicos premium: prendas que combinan entre sí sin esfuerzo.",
  },
];

export default function NosotrosPage() {
  return (
    <div className="py-10 sm:py-14">
      <Container>
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-acento">
            Nuestra historia
          </p>
          <h1 className="mt-1 font-display text-3xl tracking-wide sm:text-4xl">
            {configuracionTienda.nombreCompleto}
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-gris sm:text-base">
            Somos una tienda multimarca ubicada en el corazón de Las Parejas, Santa Fe.
            Nacimos con la idea de acercar al pueblo las marcas y el estilo que antes
            había que ir a buscar a la ciudad: indumentaria urbana, calzado y
            accesorios para quienes quieren verse bien sin complicarse.
          </p>
        </div>

        <div className="relative mb-16 aspect-[16/9] w-full overflow-hidden rounded-2xl sm:aspect-[21/9]">
          <Image
            src={mediaDemo.local}
            alt="Interior del local de Facheros"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="mb-16 grid gap-8 sm:grid-cols-3">
          {valores.map((valor) => (
            <div key={valor.titulo}>
              <h3 className="font-display text-xl tracking-wide">{valor.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gris">{valor.descripcion}</p>
            </div>
          ))}
        </div>

        <div className="mb-16 rounded-2xl bg-negro px-6 py-10 text-crema sm:px-10">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-crema/60">
            Las marcas que trabajamos
          </p>
          <div className="mt-4 flex flex-wrap gap-x-10 gap-y-3">
            {marcasDestacadas.map((marca) => (
              <span key={marca} className="font-display text-2xl tracking-wide">
                {marca}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-2xl tracking-wide sm:text-3xl">
            ¿Listo para renovar tu placard?
          </h2>
          <Link href="/tienda">
            <Button variante="primario" tamano="lg">
              Ver tienda
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
