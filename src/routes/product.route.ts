import { Router } from "express";
import { createProductSchema, updateProductSchema } from "../schemas/product.schema";
import { validateSchema } from "../middlewares/validateSchema.middleware";
import {
  createProductController,
  getAllProductsController,
  getOneProductController,
  updateProductController,
  softDeleteProductController,
  restoreSoftDeleteProductController,
  getAllDeletedProductsController,
} from "../controllers/product.controller";

const productRoutes = Router();

productRoutes.post("", validateSchema(createProductSchema), createProductController);
productRoutes.get("", getAllProductsController);
productRoutes.get("/deleted", getAllDeletedProductsController);
productRoutes.get("/:id", getOneProductController);
productRoutes.patch("/:id", validateSchema(updateProductSchema), updateProductController);
productRoutes.delete("/:id", softDeleteProductController);
productRoutes.patch("/restore/:id", restoreSoftDeleteProductController);

export default productRoutes;
