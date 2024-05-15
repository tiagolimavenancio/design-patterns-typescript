import { IAbstractExpression } from "../interface/IAbstractExpression";

export class Numeral implements IAbstractExpression {
  value: number;

  constructor(value: string) {
    this.value = parseInt(value);
  }

  interpret(): number {
    return this.value;
  }
}
