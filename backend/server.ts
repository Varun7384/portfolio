import express from "express";
import app from "./app";

const server = express();

server.use(app);

const PORT = process.env.PORT || 3700;

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
