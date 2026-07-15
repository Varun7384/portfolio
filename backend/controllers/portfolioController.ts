import type { Request, Response } from "express";
import { portfolioData } from "../data/portfolioData.js";

export async function getPortfolioData(_req: Request, res: Response) {
  const portfolio = portfolioData;

  res.json(portfolio);
}
