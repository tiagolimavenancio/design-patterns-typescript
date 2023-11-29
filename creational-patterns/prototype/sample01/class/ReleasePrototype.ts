import { Prototype } from "../interface/Prototype";

export class ReleasePrototype implements Prototype {
  private name: string = "ReleaseCandidate";

  public clone(): Prototype {
    return new ReleasePrototype();
  }

  public getName(): string {
    return this.name;
  }

  execute(): void {
    console.log(this.name + ": does real work");
  }
}
