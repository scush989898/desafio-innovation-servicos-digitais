import { IProductCreate, IProductUpdate } from "../interfaces/product.interface";
import { getObjectOr404 } from "../utils/service.utils";
import { Product } from "../entities/product.entity";
import AppDataSource from "../data-source";
import { ProductStatus } from "../enum/product.enum";
import { AppError } from "../errors/app.error";
import { Message } from "../utils/messages.utils";

const productRepository = AppDataSource.getRepository(Product);

const createProductService = async (data: IProductCreate): Promise<Product> => {
  const newProduct = productRepository.create(data);
  return await productRepository.save(newProduct);
};

const getAllProductsService = async (): Promise<Product[]> => {
  return await productRepository.find();
};

const getSoftDeletededProducts = async (): Promise<Product[]> => {
  return await productRepository
    .createQueryBuilder("product")
    .withDeleted()
    .where("product.deleted_at IS NOT NULL")
    .getMany();
};

const getOneProductService = async (id: string): Promise<Product> => {
  return await getObjectOr404(productRepository, { id });
};
const updateProductService = async (id: string, updatedData: IProductUpdate): Promise<Product> => {
  await getObjectOr404(productRepository, { id });
  await productRepository.update(id, updatedData);
  return await getObjectOr404(productRepository, { id });
};
const softDeleteProductService = async (id: string): Promise<void> => {
  await getObjectOr404(productRepository, { id });
  await productRepository.update(id, { status: ProductStatus.INACTIVE });
  await productRepository.softDelete(id);
};

const restoreSoftDeleteProductService = async (id: string): Promise<Product> => {
  const restored = await productRepository.findOne({
    where: {
      id,
    },
    withDeleted: true,
  });
  if (!restored) throw new AppError(Message.notFoundOrAlreadyDeleted);

  await productRepository.restore(id);
  await productRepository.update(id, { status: ProductStatus.ACTIVE });
  return await getObjectOr404(productRepository, { id });
};

export {
  createProductService,
  getAllProductsService,
  getOneProductService,
  updateProductService,
  softDeleteProductService,
  restoreSoftDeleteProductService,
  getSoftDeletededProducts,
};
