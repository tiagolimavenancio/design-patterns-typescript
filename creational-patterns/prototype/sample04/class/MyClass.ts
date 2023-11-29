import { IPrototype } from "../interface/IPrototype";

export class MyClass implements IPrototype {
  private field: number[];

  constructor(field: number[]) {
    this.field = field;
  }

  clone(): IPrototype {
    return Object.assign({}, this);
  }
}
