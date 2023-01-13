import { StatusCode } from "../utils/statusCode.utils";
class AppError extends Error {
    statusCode;
  
    constructor(message: string, statusCode: number = StatusCode.badRequest) {
      super();
      this.message = message;
      this.statusCode = statusCode;
    }
  }
  
  export { AppError };