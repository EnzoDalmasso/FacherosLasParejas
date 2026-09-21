import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Categoria } from "@/types/producto";

export function CategoryCard({ categoria }: { categoria: Categoria }) {
  return (
    <Link
      href={`/tienda?categoria=${categoria.slug}`}
      className="group relative flex aspect-[3/4] overflow-hidden rounded-2xl bg-negro"
    >
      <Image
        src={categoria.imagen}
        alt={categoria.nombre}
        fill
        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
        className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-negro/85 via-negro/10 to-transparent" />

      <div className="relative mt-auto flex w-full flex-col gap-1 p-4">
        <span className="font-display text-xl tracking-wide text-crema">
          {categoria.nombre}
        </span>
        <span className="flex items-center gap-1 text-xs text-crema/75">
          Ver productos
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
            strokeWidth={2}
            aria-hidden
          />
        </span>
      </div>
    </Link>
  );
}
