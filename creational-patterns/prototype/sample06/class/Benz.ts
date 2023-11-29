import { ICarPrototype } from "../interface/CarPrototype";

export class Benz implements ICarPrototype {
  clone(): ICarPrototype {
    return new Benz();
  }
}
