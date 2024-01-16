import { IWarrior } from "../interface/IWarrior";

export class Saiyan implements IWarrior {
  public ATTACK_POWER: number = 100;

  public attack(): number {
    return Math.random() * 100 + this.ATTACK_POWER;
  }
}
