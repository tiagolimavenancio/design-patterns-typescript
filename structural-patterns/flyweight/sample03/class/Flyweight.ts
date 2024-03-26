import { IFlyweight } from "../interface/IFlyweight";

export class Flyweight implements IFlyweight {
  code: number;

  constructor(code: number) {
    this.code = code;
  }
}
