import { Weapon } from "../interface/Weapon";

export class Axe implements Weapon {
  public usefulFunction(): string {
    return "Axe is useful for chopping wood";
  }
}
