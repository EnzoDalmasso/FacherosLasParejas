import type { ReactNode } from "react";

type Tono = "acento" | "negro" | "descuento";

const clasesTono: Record<Tono, string> = {
  acento: "bg-acento text-crema",
  negro: "bg-negro text-crema",
  descuento: "bg-crema text-negro border border-negro",
};

export function Badge({
  children,
  tono = "negro",
  className = "",
}: {
  children: ReactNode;
  tono?: Tono;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${clasesTono[tono]} ${className}`}
    >
      {children}
    </span>
  );
}
