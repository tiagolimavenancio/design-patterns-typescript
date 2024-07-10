import { IItem } from "../interface/IItem";
import { IShoppingCartVisitor } from "../interface/IShoppingCartVisitor";

export class Electronic implements IItem {
  price: number = 0;
  weight: number = 0;

  constructor(price: number, weight: number) {
    this.price = price;
    this.weight = weight;
  }

  accept(visitor: IShoppingCartVisitor): number {
    return visitor.visitElectronic(this);
  }
}
