import { IProductA } from "../interface/IProductA";

class ConcreteProduct implements IProductA {
  name = "";
}

class ConcreteProductA extends ConcreteProduct {
  constructor() {
    super();
    this.name = "FactoryA:ConcreteProductA";
  }
}

class ConcreteProductB extends ConcreteProduct {
  constructor() {
    super();
    this.name = "FactoryA:ConcreteProductB";
  }
}

class ConcreteProductC extends ConcreteProduct {
  constructor() {
    super();
    this.name = "FactoryA:ConcreteProductC";
  }
}

export class FactoryA {
  static getObject(property: string): IProductA {
    try {
      switch (property) {
        case "a":
          return new ConcreteProductA();
        case "b":
          return new ConcreteProductB();
        case "c":
          return new ConcreteProductC();
        default:
          return new ConcreteProduct();
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
