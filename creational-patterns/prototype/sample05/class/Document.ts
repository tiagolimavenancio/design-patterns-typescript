import { IPrototype } from "../interface/Prototype";

export class Document implements IPrototype {
  name: string;
  array: [number[], number[]];

  constructor(name: string, array: [number[], number[]]) {
    this.name = name;
    this.array = array;
  }

  clone(mode: number): IPrototype {
    let array;

    if (mode === 2) {
      array = JSON.parse(JSON.stringify(this.array));
    } else {
      array = Object.assign([], this.array);
    }

    return new Document(this.name, array);
  }
}
