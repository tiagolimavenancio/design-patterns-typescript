import { Component1 } from "./class/Component1";
import { Component2 } from "./class/Component2";
import { ConcreteMediator } from "./class/ConcreteMediator";

(function main() {
  const c1 = new Component1();
  const c2 = new Component2();
  const mediator = new ConcreteMediator(c1, c2);

  console.log("Client triggers operation A.");
  c1.doA();

  console.log("\nClient triggers operation D.");
  c2.doD();
})();
