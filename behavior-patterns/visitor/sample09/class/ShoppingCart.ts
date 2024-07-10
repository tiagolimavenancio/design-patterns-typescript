import { IItem } from "../interface/IItem";
import { IShoppingCartVisitor } from "../interface/IShoppingCartVisitor";

export class ShoppingCart {
  private items: IItem[] = [];

  addItem(item: IItem) {
    this.items.push(item);
  }

  getTotalPrice(visitor: IShoppingCartVisitor): number {
    let total = 0;

    for (const item of this.items) {
      total += item.accept(visitor);
    }

    return total;
  }
}
