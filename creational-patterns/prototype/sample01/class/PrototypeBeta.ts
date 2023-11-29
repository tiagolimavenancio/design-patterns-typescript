import { Prototype } from "../interface/Prototype";

export class PrototypeBeta implements Prototype {
  private name: string = "BetaVersion";

  public clone(): Prototype {
    return new PrototypeBeta();
  }

  public getName(): string {
    return this.name;
  }

  execute(): void {
    console.log(this.name + ": does something");
  }
}
