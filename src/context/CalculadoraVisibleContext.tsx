"use client";
import { useContext, useState, createContext, Dispatch, SetStateAction } from "react";

interface CalculadoraVisibleContextType {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>; // ✅ tipado correcto
}

const CalculadoraVisibleContext = createContext<CalculadoraVisibleContextType>({
  visible: false,
  setVisible: () => {},
});

export const useCalculadoraVisible = () => useContext(CalculadoraVisibleContext);

export const CalculadoraVisibleProvider = ({ children }: { children: React.ReactNode }) => {
  const [visible, setVisible] = useState(false);
  return (
    <CalculadoraVisibleContext.Provider value={{ visible, setVisible }}>
      {children}
    </CalculadoraVisibleContext.Provider>
  );
};
