import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { Product } from "../entity/Product";

export class ProductController {
  private productRepository = AppDataSource.getMongoRepository(Product);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.productRepository.find();
  }
}
