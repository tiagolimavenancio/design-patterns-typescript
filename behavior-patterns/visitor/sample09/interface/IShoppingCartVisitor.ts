import { Book } from "../class/Book";
import { Electronic } from "../class/Electronic";

export interface IShoppingCartVisitor {
  visitBook(book: Book): number;
  visitElectronic(electronic: Electronic): number;
}
