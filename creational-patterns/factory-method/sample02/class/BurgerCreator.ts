import { Product } from "../interface/Product";
import { Burger } from "./Burger";
import { Creator } from "./Creator";

export class BurgerCreator extends Creator {
  public factoryMethod(): Product {
    return new Burger();
  }
}
