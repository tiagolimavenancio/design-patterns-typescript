import { IElement } from "../interface/IElement";
import { IVisitor } from "../interface/IVisitor";

export class Foo implements IElement {
  accept(visitor: IVisitor): void {
    visitor.visitFoo(this);
  }

  getFoo(): string {
    return "Foo";
  }
}
