import { IDrawable } from "../interface/IDrawable";
import { IVisitor } from "../interface/IVisitor";

export class Square implements IDrawable {
  accept(visitor: IVisitor): void {
    visitor.visitSquare(this);
  }
}
