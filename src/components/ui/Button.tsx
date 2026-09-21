import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";

type Variante = "primario" | "secundario" | "acento" | "fantasma";
type Tamano = "sm" | "md" | "lg";

interface BotonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variante?: Variante;
  tamano?: Tamano;
}

const clasesBase =
  "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-negro";

const clasesVariante: Record<Variante, string> = {
  primario: "bg-negro text-crema hover:bg-negro/85",
  secundario: "border border-negro text-negro hover:bg-negro hover:text-crema",
  acento: "bg-acento text-crema hover:bg-acento-hover",
  fantasma: "text-negro hover:bg-negro/5",
};

const clasesTamano: Record<Tamano, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

export const Button = forwardRef<HTMLButtonElement, BotonProps>(
  ({ variante = "primario", tamano = "md", className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`${clasesBase} ${clasesVariante[variante]} ${clasesTamano[tamano]} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
