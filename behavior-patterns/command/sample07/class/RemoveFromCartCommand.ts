import { ICommand } from "../interface/ICommand";
import { Cart } from "../model/Cart";
import { Item } from "../model/Item";

export class RemoveFromCartCommand implements ICommand {
  constructor(private cart: Cart, private item: Item) {}

  execute(): void {
    this.cart.remove(this.item);
  }

  undo(): void {
    this.cart.add(this.item);
  }
}
