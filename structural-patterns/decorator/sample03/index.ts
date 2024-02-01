import { ConcreteComponent } from "./class/ConcreteComponent";
import { ConcreteDecoratorA } from "./class/ConcreteDecoratorA";
import { ConcreteDecoratorB } from "./class/ConcreteDecoratorB";

(function main() {
  const simple = new ConcreteComponent();
  console.log("Client: I've got a simple component:");
  console.log(`RESULT: ${simple.operation()}`);
  console.log("");

  const decorator1 = new ConcreteDecoratorA(simple);
  const decorator2 = new ConcreteDecoratorB(decorator1);
  console.log("Client: Now I've got a decorated component:");
  console.log(`RESULT: ${decorator2.operation()}`);
})();
