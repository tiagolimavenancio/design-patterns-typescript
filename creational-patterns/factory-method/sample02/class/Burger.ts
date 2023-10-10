import { Product } from "../interface/Product";

export class Burger implements Product {
  public operation(): string {
    return "Burger";
  }
}
