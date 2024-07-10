import { IVisitor } from "../interfaces/IVisitor";
import { AbstractCarPart } from "./AbstractCarPart";

export class TotalPriceVisitor implements IVisitor {
  private totalPrice = 0;

  visit(part: AbstractCarPart): void {
    if (part.getPrice()) {
      this.totalPrice += part.getPrice() as number;
    }
  }

  getTotalPrice(): number {
    return this.totalPrice;
  }
}
