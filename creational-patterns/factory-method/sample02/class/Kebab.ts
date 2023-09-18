import { Product } from "../interface/Product";

export class Kebab implements Product {
  public operation(): string {
    return "Kebab";
  }
}
