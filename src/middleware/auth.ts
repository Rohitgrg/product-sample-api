import { NextFunction, Request, Response } from "express";
import { Configuration } from "../config/configuration";

// middleware to get the token and validate it with secret hidden in our environment variable
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
  const token = authHeader;
  if (!token || token === "") {
    return next(authError);
  }

  if (token !== Configuration.SECRET) return next(authError);

  return next();
};
