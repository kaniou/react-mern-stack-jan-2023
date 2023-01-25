import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { Users } from "../entity/Users";
import { savedValue } from "../utils/cm-util";
import * as bcrypt from "bcryptjs";

export class UserController {
  private userRepository = AppDataSource.getMongoRepository(Users);

  async register(req: Request, response: Response, next: NextFunction) {
    try {
      req.body.created = savedValue(req.body.created, new Date());
      req.body.level = savedValue(req.body.level, "normal");
      req.body.__v = savedValue(req.body.__v, 0);
      req.body.password = await bcrypt.hash(req.body.password, 8);

      // const doc = await this.userRepository.save(req.body);
      // return { result: "ok", message: doc };

      await this.userRepository.save(req.body);
      return { result: "ok", message: "register successfully" };
    } catch (e) {
      return { result: "nok", message: "register failed" };
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = req.body;

      let doc = await this.userRepository.findOne({ where: { username } });

      if (doc) {
        let isPasswordValid = await bcrypt.compare(password, doc.password);
        if (isPasswordValid) {
          let token = "1234";
          return { result: "ok", token, message: "success" };
        } else {
          return { result: "nok", message: "invalid password" };
        }
      } else {
        return { result: "nok", message: "invalid username" };
      }
    } catch (error) {
      return { result: "nok", error };
    }
  }

  async all(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.find();
  }
}
