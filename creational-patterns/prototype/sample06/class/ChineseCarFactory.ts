import { ICarPrototype } from "../interface/CarPrototype";
import { CarFactory } from "./CarFactory";

import { Audi } from "./Audi";
import { Benz } from "./Benz";
import { BMW } from "./BMW";

export class ChineseCarFactory extends CarFactory {
  private brands: { [brand: string]: ICarPrototype };

  constructor() {
    super();

    this.brands["Audi"] = new Audi();
    this.brands["Benz"] = new Benz();
    this.brands["BMW"] = new BMW();
  }

  createCar(brand: string): ICarPrototype {
    return this.brands[brand].clone();
  }
}
