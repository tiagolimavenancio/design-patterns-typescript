import { AbstractClass } from "./class/AbstractClass";
import { ConcreteClass1 } from "./class/ConcreteClass1";
import { ConcreteClass2 } from "./class/ConcreteClass2";

/**
 * The client code calls the template method to execute the algorithm. Client
 * code does not have to know the concrete class of an object it works with, as
 * long as it works with objects through the interface of their base class.
 */
function clientCode(abstractClass: AbstractClass) {
  // ...
  abstractClass.templateMethod();
  // ...
}

(function main() {
  console.log("Concrete Class 1");
  clientCode(new ConcreteClass1());
  console.log("");

  console.log("Concrete Class 2");
  clientCode(new ConcreteClass2());
  console.log("");
})();
