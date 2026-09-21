"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  actualizarCantidad,
  agregarItem,
  calcularCantidadTotal,
  calcularSubtotal,
  guardarCarrito,
  leerCarritoGuardado,
  quitarItem,
} from "@/lib/carrito";
import { claveItem, type ItemCarrito } from "@/types/carrito";

type Accion =
  | { tipo: "hidratar"; items: ItemCarrito[] }
  | { tipo: "agregar"; item: ItemCarrito }
  | { tipo: "quitar"; clave: string }
  | { tipo: "actualizarCantidad"; clave: string; cantidad: number }
  | { tipo: "vaciar" };

function reducer(state: ItemCarrito[], accion: Accion): ItemCarrito[] {
  switch (accion.tipo) {
    case "hidratar":
      return accion.items;
    case "agregar":
      return agregarItem(state, accion.item);
    case "quitar":
      return quitarItem(state, accion.clave);
    case "actualizarCantidad":
      return actualizarCantidad(state, accion.clave, accion.cantidad);
    case "vaciar":
      return [];
    default:
      return state;
  }
}

interface CarritoContextValor {
  items: ItemCarrito[];
  subtotal: number;
  cantidadTotal: number;
  estaAbierto: boolean;
  abrirCarrito: () => void;
  cerrarCarrito: () => void;
  agregarAlCarrito: (item: ItemCarrito) => void;
  quitarDelCarrito: (clave: string) => void;
  cambiarCantidad: (clave: string, cantidad: number) => void;
  vaciarCarrito: () => void;
}

const CarritoContext = createContext<CarritoContextValor | null>(null);

export function CarritoProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(reducer, []);
  const [estaAbierto, setEstaAbierto] = useState(false);
  const hidratado = useRef(false);

  useEffect(() => {
    dispatch({ tipo: "hidratar", items: leerCarritoGuardado() });
    hidratado.current = true;
  }, []);

  useEffect(() => {
    if (!hidratado.current) return;
    guardarCarrito(items);
  }, [items]);

  const valor = useMemo<CarritoContextValor>(
    () => ({
      items,
      subtotal: calcularSubtotal(items),
      cantidadTotal: calcularCantidadTotal(items),
      estaAbierto,
      abrirCarrito: () => setEstaAbierto(true),
      cerrarCarrito: () => setEstaAbierto(false),
      agregarAlCarrito: (item) => {
        dispatch({ tipo: "agregar", item });
        setEstaAbierto(true);
      },
      quitarDelCarrito: (clave) => dispatch({ tipo: "quitar", clave }),
      cambiarCantidad: (clave, cantidad) =>
        dispatch({ tipo: "actualizarCantidad", clave, cantidad }),
      vaciarCarrito: () => dispatch({ tipo: "vaciar" }),
    }),
    [items, estaAbierto]
  );

  return <CarritoContext.Provider value={valor}>{children}</CarritoContext.Provider>;
}

export function useCarrito() {
  const contexto = useContext(CarritoContext);
  if (!contexto) {
    throw new Error("useCarrito debe usarse dentro de CarritoProvider");
  }
  return contexto;
}

export { claveItem };
