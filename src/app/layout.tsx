import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import { configuracionTienda } from "@/config/tienda";
import { CarritoProvider } from "@/context/carrito-context";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/carrito/CartDrawer";
import { WhatsAppFloatingButton } from "@/components/layout/WhatsAppFloatingButton";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://facheros-tienda.vercel.app"
  ),
  title: {
    default: `${configuracionTienda.nombreCompleto} — Indumentaria urbana`,
    template: `%s · ${configuracionTienda.nombre}`,
  },
  description: configuracionTienda.descripcion,
  openGraph: {
    title: configuracionTienda.nombreCompleto,
    description: configuracionTienda.descripcion,
    siteName: configuracionTienda.nombreCompleto,
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: configuracionTienda.nombreCompleto,
    description: configuracionTienda.descripcion,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`h-full ${anton.variable} ${inter.variable}`}>
      <body className="flex min-h-full flex-col bg-crema font-sans text-negro antialiased">
        <CarritoProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <WhatsAppFloatingButton />
        </CarritoProvider>
      </body>
    </html>
  );
}
