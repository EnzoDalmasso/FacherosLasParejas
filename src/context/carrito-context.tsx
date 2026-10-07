"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
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

// `hidratado` viaja junto con los items para que el guardado espere al render que
// ya tiene lo leído del storage y no lo pise con el [] inicial.
interface EstadoCarrito {
  items: ItemCarrito[];
  hidratado: boolean;
}

function reducerItems(items: ItemCarrito[], accion: Accion): ItemCarrito[] {
  switch (accion.tipo) {
    case "hidratar":
      return accion.items;
    case "agregar":
      return agregarItem(items, accion.item);
    case "quitar":
      return quitarItem(items, accion.clave);
    case "actualizarCantidad":
      return actualizarCantidad(items, accion.clave, accion.cantidad);
    case "vaciar":
      return [];
    default:
      return items;
  }
}

function reducer(state: EstadoCarrito, accion: Accion): EstadoCarrito {
  return {
    items: reducerItems(state.items, accion),
    hidratado: state.hidratado || accion.tipo === "hidratar",
  };
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
  const [{ items, hidratado }, dispatch] = useReducer(reducer, {
    items: [],
    hidratado: false,
  });
  const [estaAbierto, setEstaAbierto] = useState(false);

  useEffect(() => {
    dispatch({ tipo: "hidratar", items: leerCarritoGuardado() });
  }, []);

  useEffect(() => {
    if (!hidratado) return;
    guardarCarrito(items);
  }, [items, hidratado]);

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
