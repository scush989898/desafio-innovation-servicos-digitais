import { IProductCreate, IProductUpdate } from "../interfaces/product.interface";
import * as yup from "yup";
import { SchemaOf } from "yup";

const createProductSchema: SchemaOf<IProductCreate> = yup.object().shape({
  name: yup.string().required().max(120),
  category: yup.string().required().max(20),
  quantity: yup.number().required(),
});

const updateProductSchema: SchemaOf<IProductUpdate> = yup.object().shape({
  name: yup.string().max(120),
  category: yup.string().max(20),
  quantity: yup.number(),
});

export { createProductSchema, updateProductSchema };
