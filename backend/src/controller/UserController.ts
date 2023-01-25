import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { Users } from "../entity/Users";
import { savedValue } from "../utils/cm-util";

export class UserController {
  private userRepository = AppDataSource.getMongoRepository(Users);

  async register(req: Request, response: Response, next: NextFunction) {
    try {
      req.body.created = savedValue(req.body.created, new Date());
      req.body.level = savedValue(req.body.level, "normal");
      req.body.__v = savedValue(req.body.__v, 0);
      const doc = await this.userRepository.save(req.body);
      return { result: "ok", message: doc };
    } catch (e) {
      return { result: "nok", message: "invalid data" };
    }
  }

  async all(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.find();
  }
}
