import cors from "cors";
import express from "express";

import { getPortfolioData } from "./controllers/portfolioController.js";
import { requestLogger } from "./middleware/requestLogger.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(requestLogger);

app.get("/data", getPortfolioData);

app.get("/test", (_req, res) => {
  res.json({
    success: true,
    message: "Backend is working",
  });
});

export default app;
