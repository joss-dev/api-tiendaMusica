import { Request, Response } from "express";

export function isAdmin(req: Request, res: Response, next: Function) {
  const { isAdmin } = req.body;
  if (isAdmin) {
    next();
  } else {
    res.status(401).send("Unauthorized User");
  }
}
