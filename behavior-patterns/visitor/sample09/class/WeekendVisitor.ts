import { IShoppingCartVisitor } from "../interface/IShoppingCartVisitor";
import { Book } from "./Book";
import { Electronic } from "./Electronic";

export class WeekendVisitor implements IShoppingCartVisitor {
  visitBook(book: Book): number {
    return book.price * 0.9;
  }

  visitElectronic(electronic: Electronic): number {
    return electronic.price - electronic.weight * 0.1;
  }
}
