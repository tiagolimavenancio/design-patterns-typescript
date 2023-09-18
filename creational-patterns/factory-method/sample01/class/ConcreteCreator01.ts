import { Product } from "../interface/Product";
import { ConcreteProduct01 } from "./ConcreteProduct01";
import { Creator } from "./Creator";

export class ConcreteCreator01 extends Creator {
  protected factoryMethod(): Product {
    return new ConcreteProduct01();
  }
}
