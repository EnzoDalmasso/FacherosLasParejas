import type { Metadata } from "next";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contacto/ContactForm";
import { InstagramIcon } from "@/components/ui/icons";
import { configuracionTienda } from "@/config/tienda";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Contactate con ${configuracionTienda.nombreCompleto} por WhatsApp, Instagram o visitá nuestro local en ${configuracionTienda.direccion}.`,
};

export default function ContactoPage() {
  const mapaHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    configuracionTienda.direccion
  )}`;

  return (
    <div className="py-10 sm:py-14">
      <Container>
        <div className="mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-acento">
            Estamos para ayudarte
          </p>
          <h1 className="mt-1 font-display text-3xl tracking-wide sm:text-4xl">Contacto</h1>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-acento" strokeWidth={1.75} aria-hidden />
                <div>
                  <p className="font-medium">Dirección</p>
                  <p className="text-sm text-gris">{configuracionTienda.direccion}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-acento" strokeWidth={1.75} aria-hidden />
                <div>
                  <p className="font-medium">Teléfono / WhatsApp</p>
                  <p className="text-sm text-gris">{configuracionTienda.telefono}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-acento" strokeWidth={1.75} aria-hidden />
                <div>
                  <p className="font-medium">Horarios</p>
                  <p className="text-sm text-gris">Lun. a Sáb. de 9 a 13 y de 17 a 21 hs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <InstagramIcon className="mt-0.5 h-5 w-5 shrink-0 text-acento" aria-hidden />
                <div>
                  <p className="font-medium">Instagram</p>
                  <a
                    href={configuracionTienda.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gris underline-offset-2 hover:text-negro hover:underline"
                  >
                    @facheroslasparejas
                  </a>
                </div>
              </div>
            </div>

            <a
              href={mapaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-borde bg-blanco px-5 py-4 transition-colors hover:border-negro"
            >
              <span className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-acento" strokeWidth={1.75} aria-hidden />
                <span className="text-sm font-medium">Ver ubicación en Google Maps</span>
              </span>
              <ExternalLink
                className="h-4 w-4 text-gris transition-transform group-hover:translate-x-0.5"
                strokeWidth={1.75}
                aria-hidden
              />
            </a>
          </div>

          <div className="rounded-2xl border border-borde bg-blanco p-6 sm:p-8">
            <h2 className="mb-1 font-display text-xl tracking-wide">Escribinos</h2>
            <p className="mb-6 text-sm text-gris">
              Te respondemos por WhatsApp a la brevedad.
            </p>
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
