"use client";

import { createContext, useContext, useState } from "react";
import { ReservationContextType, ReservationProviderProps, ReservationRange } from "../../types";

const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

const initialState: ReservationRange = { from: undefined, to: undefined };

function ReservationProvider({ children }: ReservationProviderProps) {
  const [range, setRange] = useState<ReservationRange>(initialState);
  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation(): ReservationContextType {
  const context = useContext(ReservationContext);

  if (context === undefined) {
    throw new Error("Context was used outside provider");
  }
  return context;
}

export { ReservationProvider, useReservation };
