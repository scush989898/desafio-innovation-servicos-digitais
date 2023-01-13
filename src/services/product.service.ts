import { IProductCreate, IProductUpdate } from "../interfaces/product.interface";
import { getObjectOr404 } from "../utils/service.utils";
import { Product } from "../entities/product.entity";
import AppDataSource from "../data-source";

const productRepository = AppDataSource.getRepository(Product);

const createProductService = async (data: IProductCreate): Promise<Product> => {
  const newProduct = productRepository.create(data);
  return await productRepository.save(newProduct);
};

const getAllProductsService = async (): Promise<Product[]> => {
  return await productRepository.find();
};

const getOneProductService = async (id: string): Promise<any> => {
  return await getObjectOr404(productRepository, { id });
};
const updateProductService = async (id: string, updatedData: IProductUpdate): Promise<any> => {
  await getObjectOr404(productRepository, { id });
  await productRepository.update(id, updatedData);
  return await getObjectOr404(productRepository, { id });
};
const softDeleteProductService = async (id: string): Promise<any> => {
  await getObjectOr404(productRepository, { id });
  return await productRepository.softDelete(id);
};

const restoreSoftDeleteProductService = async (id: string): Promise<any> => {
  await getObjectOr404(productRepository, { id });
  return await productRepository.restore(id);
};

export {
  createProductService,
  getAllProductsService,
  getOneProductService,
  updateProductService,
  softDeleteProductService,
  restoreSoftDeleteProductService,
};
