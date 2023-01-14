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
  const citiesList: CityRequest[] = await IBGE_API.get("?orderBy=nome&view=nivelado").then(
    (res) => res.data
  );
  const newCity = citiesList.find(
    (elem: CityRequest) =>
      elem["municipio-nome"]
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") ==
      data.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
  );
  if (!newCity) {
    throw new AppError(Message.cityNotFound);
  }
  await resourceAlreadyExists(
    cityRepository,
    { name: newCity["municipio-nome"] },
    Message.cityAlreadyExists
  );
  const res = cityRepository.create({
    id: newCity["municipio-id"],
    name: newCity["municipio-nome"],
  });
  return await cityRepository.save(res);
};

const getAllCitiesService = async (): Promise<City[]> => {
  return await cityRepository.find();
};

export { createCityService, getAllCitiesService };
