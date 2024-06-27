import { ConcreteObserverA } from "./class/ConcreteObserverA";
import { ConcreteObserverB } from "./class/ConcreteObserverB";
import { ConcreteSubject } from "./class/ConcreteSubject";

(function main() {
  const subject = new ConcreteSubject();
  const observer1 = new ConcreteObserverA();
  subject.attach(observer1);

  const observer2 = new ConcreteObserverB();
  subject.attach(observer2);

  subject.someBusinessLogic();
  subject.someBusinessLogic();

  subject.detach(observer2);

  subject.someBusinessLogic();
})();
