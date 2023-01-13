import { ICityCreate } from "../interfaces/city.interface";
import { resourceAlreadyExists } from "../utils/service.utils";
import { Message } from "../utils/messages.utils";
import { City } from "../entities/city.entity";
import AppDataSource from "../data-source";
import IBGE_API from "../external/apis/ibge.api";
import { CityRequest } from "../interfaces/cityRequest.interface";
import { AppError } from "../errors/app.error";

const cityRepository = AppDataSource.getRepository(City);

const createCityService = async (data: ICityCreate): Promise<City> => {
  await resourceAlreadyExists(cityRepository, { name: data.name.toLowerCase() });
  const citiesList: CityRequest[] = await IBGE_API.get("").then((res) => res.data);
  const newCity = citiesList.find(
    (elem: CityRequest) => elem["municipio-nome"].toLowerCase() == data.name.toLowerCase()
  );
  if (!newCity) {
    throw new AppError(Message.cityNotFound);
  }

  const res = cityRepository.create({
    id: newCity["municipio-id"],
    name: newCity["municipio-nome"].toLowerCase(),
  });
  return await cityRepository.save(res);
};

const getAllCitiesService = async (): Promise<City[]> => {
  return await cityRepository.find();
};

export { createCityService, getAllCitiesService };
