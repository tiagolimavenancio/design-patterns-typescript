import { IShoppingCartVisitor } from "./IShoppingCartVisitor";

export interface IItem {
  accept(visitor: IShoppingCartVisitor): number;
}
