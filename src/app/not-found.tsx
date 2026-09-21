import Link from "next/link";
import { Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center py-20">
      <Container className="flex flex-col items-center gap-4 text-center">
        <Compass className="h-12 w-12 text-gris-claro" strokeWidth={1.5} aria-hidden />
        <h1 className="font-display text-4xl tracking-wide sm:text-5xl">404</h1>
        <p className="max-w-sm text-gris">
          No encontramos la página que buscás. Puede que el producto ya no esté
          disponible o que el link esté mal escrito.
        </p>
        <Link href="/tienda">
          <Button variante="primario" tamano="lg" className="mt-2">
            Ir a la tienda
          </Button>
        </Link>
      </Container>
    </div>
  );
}
