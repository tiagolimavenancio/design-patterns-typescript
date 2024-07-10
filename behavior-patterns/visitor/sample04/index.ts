import { ConcreteComponentA } from "./class/ConcreteComponentA";
import { ConcreteComponentB } from "./class/ConcreteComponentB";
import { ConcreteVisitor1 } from "./class/ConcreteVisitor1";
import { ConcreteVisitor2 } from "./class/ConcreteVisitor2";
import { IComponent } from "./interface/IComponent";
import { IVisitor } from "./interface/IVisitor";

function clientCode(components: IComponent[], visitor: IVisitor) {
  for (const component of components) {
    component.accept(visitor);
  }
}

(function main() {
  const components = [new ConcreteComponentA(), new ConcreteComponentB()];

  console.log("The client code works with all visitors via the base Visitor interface:");
  const visitor1 = new ConcreteVisitor1();
  clientCode(components, visitor1);

  console.log("");

  console.log("It allows the same client code to work with different types of visitors:");
  const visitor2 = new ConcreteVisitor2();
  clientCode(components, visitor2);
})();
