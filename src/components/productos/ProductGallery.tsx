"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductGallery({ imagenes, nombre }: { imagenes: string[]; nombre: string }) {
  const [activa, setActiva] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-borde/30">
        <Image
          src={imagenes[activa]}
          alt={nombre}
          fill
          priority
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
        />
      </div>

      {imagenes.length > 1 && (
        <div className="flex gap-3">
          {imagenes.map((imagen, indice) => (
            <button
              key={imagen + indice}
              type="button"
              onClick={() => setActiva(indice)}
              aria-label={`Ver imagen ${indice + 1} de ${nombre}`}
              aria-pressed={activa === indice}
              className={`relative h-20 w-16 shrink-0 overflow-hidden rounded-xl border-2 transition-colors ${
                activa === indice ? "border-negro" : "border-transparent"
              }`}
            >
              <Image src={imagen} alt="" fill sizes="64px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
