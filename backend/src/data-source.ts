import "reflect-metadata";
import { DataSource } from "typeorm";
import { Counters } from "./entity/Counters";
import { Products } from "./entity/Products";
import { Transactions } from "./entity/Transactions";
import { Users } from "./entity/Users";

export const AppDataSource = new DataSource({
  host: process.env.MONGO_HOST ? process.env.MONGO_HOST : "localhost",
  port: process.env.MONGO_PORT ? Number(process.env.MONGO_PORT) : 27018,
  type: "mongodb",
  database: "demopos",
  synchronize: true,
  logging: false,
  entities: [Counters, Users, Products, Transactions],
  migrations: [],
  subscribers: [],
});
