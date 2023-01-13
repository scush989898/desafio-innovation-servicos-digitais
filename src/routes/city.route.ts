import { Router } from "express";
import { createCitySchema } from "../schemas/city.schema";
import { validateSchema } from "../middlewares/validateSchema.middleware";
import { createCityController, getAllCitiesController } from "../controllers/city.controller";

const cityRoutes = Router();

cityRoutes.post("", validateSchema(createCitySchema), createCityController);
cityRoutes.get("", getAllCitiesController);

export default cityRoutes;
