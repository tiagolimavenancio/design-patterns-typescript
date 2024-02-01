import { Decorator } from "./Decorator";

/**
 * Concrete Decorators call the wrapped object and alter its result in some way.
 */
export class ConcreteDecoratorA extends Decorator {
  operation(): string {
    return `ConcreteDecoratorA(${super.operation()})`;
  }
}
