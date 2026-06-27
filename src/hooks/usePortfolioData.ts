import { useQuery } from "@tanstack/react-query";

import { getPortfolioData } from "../utilities/portfolioApi";

export function usePortfolioData() {
  return useQuery({
    queryKey: ["portfolio-data"],
    queryFn: getPortfolioData,
  });
}
