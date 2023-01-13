import {
  createProductService,
  getAllProductsService,
  getOneProductService,
  updateProductService,
  softDeleteProductService,
  restoreSoftDeleteProductService
} from "../services/product.service";
import { Request, Response } from "express";
import { StatusCode } from "../utils/statusCode.utils";

const createProductController = async (req: Request, res: Response) => {
  const newProduct = await createProductService(req.body);
  return res.status(StatusCode.created).json(newProduct);
};

const getAllProductsController = async (req: Request, res: Response) => {
  const productList = await getAllProductsService();
  return res.json(productList);
};

const getOneProductController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await getOneProductService(id);
  return res.json(product);
};

const updateProductController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedProduct = await updateProductService(id, req.body);
  return res.json(updatedProduct);
};

const softDeleteProductController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await softDeleteProductService(id);
  return res.status(StatusCode.noContent).send();
};

const restoreSoftDeleteProductController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const restored = await restoreSoftDeleteProductService(id);
  return res.json(restored)
};


export {
  createProductController,
  getAllProductsController,
  getOneProductController,
  updateProductController,
  softDeleteProductController,
  restoreSoftDeleteProductController
};
