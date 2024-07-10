import { IDrawable } from "../interface/IDrawable";
import { IVisitor } from "../interface/IVisitor";

export class Circle implements IDrawable {
  accept(visitor: IVisitor): void {
    visitor.visitCircle(this);
  }
}
