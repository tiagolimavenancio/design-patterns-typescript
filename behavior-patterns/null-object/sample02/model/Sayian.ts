export interface ISayian {
  name: string;
  power: number;
}

export class Sayian {
  protected name: string;
  protected power: number;

  constructor({ name, power }: ISayian) {
    this.name = name;
    this.power = power;
  }

  getName(): string {
    return this.name;
  }

  toString(): string {
    return `Sayian: ${this.name}, Power: ${this.power}`;
  }
}
