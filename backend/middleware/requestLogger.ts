import type { NextFunction, Request, Response } from "express";

export function requestLogger(req: Request, res: Response, next: NextFunction) {
  const start = Date.now();

  console.log("[REQUEST]", {
    method: req.method,
    originalUrl: req.originalUrl,
    url: req.url,
    path: req.path,
    baseUrl: req.baseUrl,
    params: req.params,
    query: req.query,
  });

  res.on("finish", () => {
    console.log("[RESPONSE]", {
      method: req.method,
      originalUrl: req.originalUrl,
      statusCode: res.statusCode,
      durationMs: Date.now() - start,
    });
  });

  next();
}
