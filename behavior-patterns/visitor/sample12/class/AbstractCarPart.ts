import { IVisitable } from "../interfaces/IVisitable";
import { IVisitor } from "../interfaces/IVisitor";

export abstract class AbstractCarPart implements IVisitable {
  private name: string;
  private sku?: string;
  private price?: number;

  constructor(name: string, sku?: string, price?: number) {
    this.name = name;
    this.price = price;
    this.sku = sku;
  }

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  setPrice(price: number): void {
    this.price = price;
  }

  getPrice(): number | undefined {
    return this.price;
  }

  setSku(sku: string): void {
    this.sku = sku;
  }

  getSku(): string | undefined {
    return this.sku;
  }

  accept(visitor: IVisitor): void {
    visitor.visit(this);
  }
}
