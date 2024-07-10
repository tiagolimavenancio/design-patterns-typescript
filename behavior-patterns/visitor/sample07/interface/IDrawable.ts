import { IVisitor } from "./IVisitor";

export interface IDrawable {
  accept(visitor: IVisitor): void;
}
