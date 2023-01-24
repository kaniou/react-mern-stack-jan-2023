import { ProductController } from "./controller/ProductController";
import { UserController } from "./controller/UserController";

export const Routes = [
  {
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all",
  },
  {
    method: "get",
    route: "/products",
    controller: ProductController,
    action: "all",
  },
];
