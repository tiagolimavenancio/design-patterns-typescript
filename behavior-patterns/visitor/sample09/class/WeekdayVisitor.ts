import { IShoppingCartVisitor } from "../interface/IShoppingCartVisitor";
import { Book } from "./Book";
import { Electronic } from "./Electronic";

export class WeekdayVisitor implements IShoppingCartVisitor {
  visitBook(book: Book): number {
    return book.price;
  }

  visitElectronic(electronic: Electronic): number {
    return electronic.price;
  }
}
