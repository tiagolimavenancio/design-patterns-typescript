import { Weapon } from "../interface/Weapon";

export class Sword implements Weapon {
  public usefulFunction(): string {
    return "Sword is useful for cutting";
  }
}
