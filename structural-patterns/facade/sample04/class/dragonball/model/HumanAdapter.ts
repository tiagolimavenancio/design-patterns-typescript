import { IPureRace } from "../interface/IPureRace";
import { Human } from "./Human";

export class HumanAdapter implements IPureRace {
  constructor(private human: Human) {}

  genki(): number {
    return this.human.sharedPower();
  }
}
