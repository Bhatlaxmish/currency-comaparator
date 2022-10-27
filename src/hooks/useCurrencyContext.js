import { CurrencyContext } from "../context/CurrencyContext";
import { useContext } from "react";

export const useCurrencyContext = () => {
  // Consume context
  const context = useContext(CurrencyContext);

  // If we are beyond the scope of the context
  if (!context) {
    throw Error('useCurrencyContext must be inside a CurrencyContextProvider')
  }

  return context;
}