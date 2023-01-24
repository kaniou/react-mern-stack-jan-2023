import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  host: process.env.MONGO_HOST ? process.env.MONGO_HOST : "localhost",
  port: process.env.MONGO_PORT ? Number(process.env.MONGO_PORT) : 27019,
  type: "mongodb",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
