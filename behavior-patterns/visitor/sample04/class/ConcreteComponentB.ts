import { IComponent } from "../interface/IComponent";
import { IVisitor } from "../interface/IVisitor";

export class ConcreteComponentB implements IComponent {
  accept(visitor: IVisitor): void {
    visitor.visitConcreteComponentB(this);
  }

  specialMethodOfConcreteComponentB(): string {
    return "B";
  }
}
