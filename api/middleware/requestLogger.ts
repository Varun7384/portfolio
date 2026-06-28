import type { Request, Response, NextFunction } from "express";

export function requestLogger(req: Request, res: Response, next: NextFunction) {
  const start = Date.now();

  console.log(`[REQUEST] ${req.method} ${req.originalUrl}`);

  res.on("finish", () => {
    console.log(
      `[RESPONSE] ${req.method} ${req.originalUrl} -> ${res.statusCode} (${Date.now() - start}ms)`,
    );
  });

  next();
}
