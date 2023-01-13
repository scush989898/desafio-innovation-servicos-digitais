import { ICityCreate } from "../interfaces/city.interface";
import * as yup from "yup";
import { SchemaOf } from "yup";

const createCitySchema: SchemaOf<ICityCreate> = yup.object().shape({
  name: yup.string().required().max(40),
});

export { createCitySchema };
