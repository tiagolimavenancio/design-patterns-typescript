import { IDrawable } from "../interface/IDrawable";
import { IVisitor } from "../interface/IVisitor";

export class Triangle implements IDrawable {
  accept(visitor: IVisitor): void {
    visitor.visitTriangle(this);
  }
}
