import { ConcreteFactory1 } from "./class/ConcreteFactory1";
import { ConcreteFactory2 } from "./class/ConcreteFactory2";
import { AbstractFactory } from "./interface/AbstractFactory";

const factoryMethod = (factory: AbstractFactory) => {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productB.usefulFunctionB());
  console.log(productB.anotherUsefulFunctionB(productA));
};

/**
 * The client code can work with any concrete factory class.
 */
console.log("Client: Testing client code with the first factory type...");
factoryMethod(new ConcreteFactory1());

console.log("");

console.log("Client: Testing the same client code with the second factory type...");
factoryMethod(new ConcreteFactory2());
