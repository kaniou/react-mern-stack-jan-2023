import * as express from "express";
import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { Routes } from "./routes";
import * as cors from "cors";

AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app = express();
    app.use(express.json());
    app.use(cors());
    // mac - set path
    // export ROOT_PATH=$(pwd)
    // echo $ROOT_PATH

    // win - set path
    // set ROOT_PATH=%cd%
    // echo %ROOT_PATH%
    app.use(express.static(process.env.ROOT_PATH + "/uploaded"));

    // register express routes from defined application routes
    Routes.forEach((route) => {
      (app as any)[route.method](
        // route.route,
        "/api/v2" + route.route,
        (req: Request, res: Response, next: Function) => {
          const result = new (route.controller as any)()[route.action](
            req,
            res,
            next
          );
          if (result instanceof Promise) {
            result.then((result) =>
              result !== null && result !== undefined
                ? res.send(result)
                : undefined
            );
          } else if (result !== null && result !== undefined) {
            res.json(result);
          }
        }
      );
    });

    // start express server
    app.listen(8081);
    console.log("Open http://localhost:8081/users to see results");
  })
  .catch((error) => console.log(error));
