import { ConcreteStrategyA } from "./class/ConcreteStrategyA";
import { ConcreteStrategyB } from "./class/ConcreteStrategyB";
import { Context } from "./class/Context";

(function main() {
  const context = new Context(new ConcreteStrategyA());
  console.log("Client: Strategy is set to normal sorting.");
  context.doSomethingBusinessLogic();

  console.log("");

  context.setStrategy(new ConcreteStrategyB());
  console.log("Client: Strategy is set to reverse sorting.");
  context.doSomethingBusinessLogic();
})();
