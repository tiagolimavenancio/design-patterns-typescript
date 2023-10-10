import { FactoryA } from "./class/FactoryA";
import { FactoryB } from "./class/FactoryB";
import { IProductA } from "./interface/IProductA";
import { IProductB } from "./interface/IProductB";

interface IProduct extends IProductA, IProductB {}

class AbstractFactory {
  static createObject(factory: string): IProduct | undefined {
    try {
      if (["aa", "ab", "ac"].indexOf(factory) > -1) {
        return FactoryA.getObject(factory[1]);
      }

      if (["ba", "bb", "bc"].indexOf(factory) > -1) {
        return FactoryB.getObject(factory[1]);
      }

      throw new Error("No Factory Found");
    } catch (error) {
      throw new Error(error);
    }
  }
}

let PRODUCT = AbstractFactory.createObject("ab");
console.log(PRODUCT);

PRODUCT = AbstractFactory.createObject("bc");
console.log(PRODUCT);
