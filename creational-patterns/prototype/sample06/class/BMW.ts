import { ICarPrototype } from "../interface/CarPrototype";

export class BMW implements ICarPrototype {
  clone(): ICarPrototype {
    return new BMW();
  }
}
