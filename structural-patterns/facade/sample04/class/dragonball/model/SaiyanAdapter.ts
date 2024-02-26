import { IPureRace } from "../interface/IPureRace";
import { Saiyan } from "./Saiyan";

export class SaiyanAdapter implements IPureRace {
  constructor(private saiyan: Saiyan) {}

  public genki(): number {
    return this.saiyan.myPowerPart1() + this.saiyan.myPowerPart2();
  }
}
