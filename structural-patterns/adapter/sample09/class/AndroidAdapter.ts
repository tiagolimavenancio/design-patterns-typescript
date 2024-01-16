import { IWarrior } from "../interface/IWarrior";
import { Android } from "./Android";

export class AndroidAdapter implements IWarrior {
  ATTACK_POWER: number = 50;

  constructor(private android: Android) {}

  attack(): number {
    return this.android.kick() + this.android.punch() + this.ATTACK_POWER;
  }
}
