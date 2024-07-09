import { AbstractClass } from "./AbstractClass";
/**
 * Usually, concrete classes override only a fraction of base class' operations.
 */
export class ConcreteClass2 extends AbstractClass {
  protected requiredOperation1(): void {
    console.log("ConcreteClass2 says: Implemented Operation1");
  }

  protected requiredOperation2(): void {
    console.log("ConcreteClass2 says: Implemented Operation2");
  }

  protected hook1(): void {
    console.log("ConcreteClass2 says: Hook1 is overridden");
  }
}
