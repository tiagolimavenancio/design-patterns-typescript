import { ICommand } from "../interface/ICommand";
import { Cart } from "../model/Cart";
import { Item } from "../model/Item";

export class ModifyCartItemCommand implements ICommand {
  private previousItemQuantity!: number;

  constructor(private cart: Cart, private item: Item, private newQuantity: number) {}

  execute(): void {
    this.previousItemQuantity = this.cart.modify(this.item, this.newQuantity);
  }

  undo(): void {
    this.cart.modify(this.item, this.previousItemQuantity);
  }
}
