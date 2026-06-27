import { createContext, type ReactNode, useContext } from "react";

import type { PortfolioData } from "../../shared/types";

const PortfolioContext = createContext<PortfolioData | undefined>(undefined);

interface PortfolioProviderProps {
  portfolio: PortfolioData;
  children: ReactNode;
}

export function PortfolioProvider({
  portfolio,
  children,
}: PortfolioProviderProps) {
  return (
    <PortfolioContext.Provider value={portfolio}>
      {children}
    </PortfolioContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePortfolio() {
  const context = useContext(PortfolioContext);

  if (!context) {
    throw new Error("usePortfolio must be used within PortfolioProvider.");
  }

  return context;
}
