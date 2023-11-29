import { Prototype } from "../interface/Prototype";

export class PrototypeAlpha implements Prototype {
  private name: string = "AlphaVersion";

  public clone(): Prototype {
    return new PrototypeAlpha();
  }

  public getName(): string {
    return this.name;
  }

  execute(): void {
    console.log(this.name + ": does something");
  }
}
