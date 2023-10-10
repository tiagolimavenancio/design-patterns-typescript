import { Product } from "../interface/Product";
import { Kebab } from "./Kebab";
import { Creator } from "./Creator";

export class KebabCreator extends Creator {
  public factoryMethod(): Product {
    return new Kebab();
  }
}
