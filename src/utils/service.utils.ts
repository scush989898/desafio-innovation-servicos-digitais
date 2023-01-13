import { AppError } from "../errors/app.error";
import { Message } from "./messages.utils";
import { StatusCode } from "./statusCode.utils";

const getObjectOr404 = async (Repository: any, options: any) => {
  const object = await Repository.findOneBy({
    ...options,
  });
  if (!object) throw new AppError(Message.notFound, StatusCode.notFound);
  return object;
};

const resourceAlreadyExists = async (
  Repository: any,
  options: any,
  message = Message.alreadyExists
) => {
  const object = await Repository.findOneBy({
    ...options,
  });

  if (!object) return false;
  throw new AppError(message, StatusCode.conflict);
};

export { getObjectOr404, resourceAlreadyExists };
