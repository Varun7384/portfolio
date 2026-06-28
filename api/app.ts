import cors from "cors";
import express from "express";

import { getPortfolioData } from "./controllers/portfolioController";
import { requestLogger } from "./middleware/requestLogger";

const app = express();

app.use(cors());
app.use(express.json());

app.use(requestLogger);

app.get("/data", getPortfolioData);

export default app;
