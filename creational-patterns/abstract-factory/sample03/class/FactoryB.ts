import { IProductB } from "../interface/IProductB";

class ConcreteProduct implements IProductB {
  name = "";
}

class ConcreteProductA extends ConcreteProduct {
  constructor() {
    super();
    this.name = "FactoryB:ConcreteProductA";
  }
}

class ConcreteProductB extends ConcreteProduct {
  constructor() {
    super();
    this.name = "FactoryB:ConcreteProductB";
  }
}

class ConcreteProductC extends ConcreteProduct {
  constructor() {
    super();
    this.name = "FactoryB:ConcreteProductC";
  }
}

export class FactoryB {
  static getObject(property: string): IProductB {
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
