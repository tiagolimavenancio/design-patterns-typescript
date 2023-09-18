import { Product } from "../interface/Product";

export class ConcreteProduct02 implements Product {
  public operation(): string {
    return "ConcreteProduct02: Operation";
  }
}
