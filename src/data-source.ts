import { DataSource } from "typeorm";
import "dotenv/config";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  logging: true,
  synchronize: false,
  entities: ["src/entities/*.ts"],
  migrations: ["src/migrations/*.ts"],
});

export default AppDataSource;
