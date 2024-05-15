import { IAbstractExpression } from "../interface/IAbstractExpression";

export class Numeral implements IAbstractExpression {
  value: number;

  constructor(value: string | number) {
    this.value = typeof value === "string" ? parseInt(value) : value;
  }

  interpret(): number {
    return this.value;
  }
}
