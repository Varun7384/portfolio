import cors from "cors";
import express, { Router } from "express";

import { getPortfolioData } from "./controllers/portfolioController.js";
import { requestLogger } from "./middleware/requestLogger.js";

const app = express();
const router = Router();

app.use(cors());
app.use(express.json());

app.use(requestLogger);

router.get("/data", getPortfolioData);

router.get("/test", (_req, res) => {
  res.json({
    success: true,
    message: "Backend is working",
  });
});

app.use("/api", router);

export default app;
