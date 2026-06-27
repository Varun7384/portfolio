import type { PortfolioData } from "../../shared/types";
import { api } from "./api";

export async function getPortfolioData(): Promise<PortfolioData> {
  const response = await api.get<PortfolioData>("/data");

  return response.data;
}
