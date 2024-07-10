import { IItem } from "../interface/IItem";
import { IShoppingCartVisitor } from "../interface/IShoppingCartVisitor";

export class Book implements IItem {
  price: number = 0;

  constructor(price: number) {
    this.price = price;
  }

  accept(visitor: IShoppingCartVisitor): number {
    return visitor.visitBook(this);
  }
}
