import { IFlyweight } from "../interfaces/IFlyweight";

export abstract class FlyweightFactory<T> {
  protected flyweights: Map<string, IFlyweight> = new Map();

  public listFlyweights(): void {
    console.log(`FlyweightFactory: I have ${this.flyweights.size} flyweights:`);

    for (const [key, _] of this.flyweights) {
      console.log(key);
    }
  }

  public abstract getFlyweight(key: T): IFlyweight;
}
