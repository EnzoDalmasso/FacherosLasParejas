"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { construirLinkWhatsapp } from "@/lib/whatsapp";

export function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  function handleSubmit(evento: FormEvent) {
    evento.preventDefault();
    if (!mensaje.trim()) return;

    const texto = nombre.trim()
      ? `Hola, soy ${nombre.trim()}. ${mensaje.trim()}`
      : `Hola! ${mensaje.trim()}`;

    window.open(construirLinkWhatsapp(texto), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium">
          Nombre
        </label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Tu nombre"
          className="h-11 w-full rounded-xl border border-borde bg-blanco px-4 text-sm outline-none transition-colors focus:border-negro"
        />
      </div>

      <div>
        <label htmlFor="mensaje" className="mb-1.5 block text-sm font-medium">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          required
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Contanos en qué te podemos ayudar"
          rows={4}
          className="w-full rounded-xl border border-borde bg-blanco px-4 py-3 text-sm outline-none transition-colors focus:border-negro"
        />
      </div>

      <Button type="submit" variante="acento" tamano="lg" className="self-start">
        Enviar por WhatsApp
      </Button>
    </form>
  );
}
