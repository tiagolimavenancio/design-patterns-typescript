import { Component } from "./class/Component";
import { Mediator } from "./class/Mediator";

(function main() {
  const mediator = new Mediator();

  const c1 = new Component("c1", mediator);
  const c2 = new Component("c2", mediator);
  const c3 = new Component("c3", mediator);

  mediator.add(c1);
  mediator.add(c2);
  mediator.add(c3);

  c1.notify("data A");
  c2.notify("data B");
  c3.notify("data C");
})();
