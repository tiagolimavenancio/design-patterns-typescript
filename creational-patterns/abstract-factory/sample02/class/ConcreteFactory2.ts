/**
 * Each Concrete Factory has a corresponding product variant.
 */

import { AbstractFactory } from "../interface/AbstractFactory";
import { AbstractProductA } from "../interface/AbstractProductA";
import { AbstractProductB } from "../interface/AbstractProductB";
import { ConcreteProductA2 } from "./ConcreteProductA2";
import { ConcreteProductB2 } from "./ConcreteProductB2";

export class ConcreteFactory2 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}
