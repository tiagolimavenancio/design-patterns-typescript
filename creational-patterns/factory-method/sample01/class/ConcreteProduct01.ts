import { Product } from "../interface/Product";

export class ConcreteProduct01 implements Product {
  public operation(): string {
    return "ConcreteProduct01: Operation";
  }
}
