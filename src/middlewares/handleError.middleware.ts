import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/app.error";
import { Message } from "../utils/messages.utils";
import { StatusCode } from "../utils/statusCode.utils";

export const handleErrorMiddleware = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }
  return res.status(StatusCode.internalServerError).json({
    message: Message.internalServerError,
  });
};