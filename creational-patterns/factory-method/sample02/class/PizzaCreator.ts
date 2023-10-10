import { Product } from "../interface/Product";
import { Pizza } from "./Pizza";
import { Creator } from "./Creator";

export class PizzaCreator extends Creator {
  public factoryMethod(): Product {
    return new Pizza();
  }
}
