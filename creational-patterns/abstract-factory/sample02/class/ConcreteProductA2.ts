/**
 * These Concrete Products are created by corresponding Concrete Factories.
 */

import { AbstractProductA } from "../interface/AbstractProductA";

export class ConcreteProductA2 implements AbstractProductA {
  public usefulFunctionA(): string {
    return "The result of the product A2.";
  }
}
