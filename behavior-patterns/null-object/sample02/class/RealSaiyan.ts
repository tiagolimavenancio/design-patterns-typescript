import { ISayian } from "../model/Sayian";
import { AbstractSaiyan } from "./AbstractSaiyan";

export class RealSaiyan extends AbstractSaiyan {
  constructor({ name, power }: ISayian) {
    super();
    this.name = name;
    this.power = power;
  }

  public getName(): string {
    return this.name;
  }

  public toString(): string {
    return `${this.name} has power of ${this.power}`;
  }
}
