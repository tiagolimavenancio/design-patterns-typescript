import { ICommand } from "../interface/ICommand";
import { Cart } from "../model/Cart";
import { Item } from "../model/Item";

export class AddToCartCommand implements ICommand {
  constructor(private cart: Cart, private item: Item) {}

  execute(): void {
    this.cart.add(this.item);
  }

  undo(): void {
    this.cart.remove(this.item);
  }
}
