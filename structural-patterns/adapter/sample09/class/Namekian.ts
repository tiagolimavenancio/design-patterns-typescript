import { IWarrior } from "../interface/IWarrior";

export class Namekian implements IWarrior {
  ATTACK_POWER: number = 50;

  public attack(): number {
    return Math.random() * 50 + this.ATTACK_POWER;
  }
}
