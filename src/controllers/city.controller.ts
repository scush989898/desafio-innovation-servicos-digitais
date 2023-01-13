import { createCityService, getAllCitiesService } from "../services/city.service";
import { Request, Response } from "express";
import { StatusCode } from "../utils/statusCode.utils";

const createCityController = async (req: Request, res: Response) => {
    const newCity = await createCityService(req.body)
    return res.status(StatusCode.created).json(newCity)
};
const getAllCitiesController = async (req: Request, res: Response) => {
    const clientList = await getAllCitiesService();
    return res.json(clientList)
};

export { createCityController, getAllCitiesController };


