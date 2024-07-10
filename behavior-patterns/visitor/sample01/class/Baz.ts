import { IElement } from "../interface/IElement";
import { IVisitor } from "../interface/IVisitor";

export class Baz implements IElement {
  accept(visitor: IVisitor): void {
    visitor.visitBaz(this);
  }

  getBaz(): string {
    return "Baz";
  }
}
