import "reflect-metadata";
import "express-async-errors";
import express from "express";
import cors from "cors";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import cityRoutes from "./routes/city.route";
import productRoutes from "./routes/product.route";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/product", productRoutes);
app.use("/city", cityRoutes);

app.use(handleErrorMiddleware);

export default app;
