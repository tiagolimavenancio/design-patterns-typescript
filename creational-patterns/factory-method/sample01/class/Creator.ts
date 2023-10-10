import { Product } from "../interface/Product";

export abstract class Creator {
  protected abstract factoryMethod(): Product;

  public operation(): string {
    const product = this.factoryMethod();
    return `Creator: ${product.operation()}`;
  }
}
