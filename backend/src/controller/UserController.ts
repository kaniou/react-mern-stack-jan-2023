import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { Users } from "../entity/Users";

export class UserController {
  private userRepository = AppDataSource.getMongoRepository(Users);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.find();
  }
}
