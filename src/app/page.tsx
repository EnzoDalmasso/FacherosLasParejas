import { Hero } from "@/components/home/Hero";
import { CategoriasSection } from "@/components/home/CategoriasSection";
import { ProductosDestacados } from "@/components/home/ProductosDestacados";
import { BrandSection } from "@/components/home/BrandSection";
import { WhatsAppCTA } from "@/components/home/WhatsAppCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoriasSection />
      <ProductosDestacados />
      <BrandSection />
      <WhatsAppCTA />
    </>
  );
}
