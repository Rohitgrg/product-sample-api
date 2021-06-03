import { NextFunction, Request, Response } from "express";
import { Configuration } from "../config/configuration";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  const authError = new Error("unauthorised");

  if (!authHeader) {
    return next(authError);
  }

  // if exists extract the token from header
  const token = authHeader; // Authorization: Bearer liqjwf9p4jfpc4hie9vhenpwoid
  if (!token || token === "") {
    return next(authError);
  }

  if (token !== Configuration.SECRET) return next(authError);

  return next();
};
