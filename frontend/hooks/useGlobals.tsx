import { useContext } from "react";
import { Context } from "../components/GlobalsContext";
import { IGlobal } from "../lib/interfaces/singles";

export default function useGlobals() {
  return useContext<IGlobal | null>(Context);
}
