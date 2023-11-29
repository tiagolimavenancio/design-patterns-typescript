import { ICarPrototype } from "../interface/CarPrototype";

export class Audi implements ICarPrototype {
  clone(): ICarPrototype {
    return new Audi();
  }
}
