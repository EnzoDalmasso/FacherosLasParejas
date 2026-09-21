import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { construirLinkWhatsapp } from "@/lib/whatsapp";
import { configuracionTienda } from "@/config/tienda";

export function WhatsAppCTA() {
  const href = construirLinkWhatsapp(
    "Hola! Quería hacer una consulta sobre un producto de Facheros."
  );

  return (
    <section className="bg-negro py-16 text-crema sm:py-20">
      <Container className="flex flex-col items-center gap-4 text-center">
        <MessageCircle className="h-10 w-10 text-[#25D366]" strokeWidth={1.5} aria-hidden />
        <h2 className="font-display text-3xl tracking-wide sm:text-4xl">
          ¿Tenés dudas sobre un producto?
        </h2>
        <p className="max-w-md text-sm text-crema/75 sm:text-base">
          Escribinos por WhatsApp al {configuracionTienda.telefono} y te ayudamos a
          elegir el talle, el color o coordinar tu envío.
        </p>
        <a href={href} target="_blank" rel="noopener noreferrer" className="mt-2">
          <Button variante="acento" tamano="lg">
            Escribir por WhatsApp
          </Button>
        </a>
      </Container>
    </section>
  );
}
