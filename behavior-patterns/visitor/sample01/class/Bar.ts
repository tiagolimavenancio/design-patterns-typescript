import { IElement } from "../interface/IElement";
import { IVisitor } from "../interface/IVisitor";

export class Bar implements IElement {
  accept(visitor: IVisitor): void {
    visitor.visitBar(this);
  }

  getBar(): string {
    return "Bar";
  }
}
