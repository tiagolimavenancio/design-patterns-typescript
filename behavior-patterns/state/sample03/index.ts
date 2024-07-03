import { ConcreteStateA } from "./class/ConcreteStateA";
import { Context } from "./class/Context";

(function main() {
  const context = new Context(new ConcreteStateA());
  context.request1();
  context.request2();
})();
