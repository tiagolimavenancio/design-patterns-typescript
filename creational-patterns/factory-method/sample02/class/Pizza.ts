import { Product } from "../interface/Product";

export class Pizza implements Product {
  public operation(): string {
    return "Pizza";
  }
}
