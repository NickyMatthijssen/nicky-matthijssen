"use client";

import { createContext } from "react";
import { IGlobal } from "../lib/interfaces/singles";

export const Context = createContext<IGlobal | null>(null);

export default function GlobalsContext({ children, globals }: any) {
  return <Context.Provider value={globals}>{children}</Context.Provider>;
}
