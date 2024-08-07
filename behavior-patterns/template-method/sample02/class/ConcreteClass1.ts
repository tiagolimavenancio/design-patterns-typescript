import { AbstractClass } from "./AbstractClass";

/**
 * Concrete classes have to implement all abstract operations of the base class.
 * They can also override some operations with a default implementation.
 */
export class ConcreteClass1 extends AbstractClass {
  protected requiredOperation1(): void {
    console.log("ConcreteClass1 says: Implemented Operation1");
  }

  protected requiredOperation2(): void {
    console.log("ConcreteClass1 says: Implemented Operation2");
  }
}
