import { Product } from "../interface/Product";
import { ConcreteProduct02 } from "./ConcreteProduct02";
import { Creator } from "./Creator";

export class ConcreteCreator02 extends Creator {
  protected factoryMethod(): Product {
    return new ConcreteProduct02();
  }
}
