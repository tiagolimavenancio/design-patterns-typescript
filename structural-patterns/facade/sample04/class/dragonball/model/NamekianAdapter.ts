import { IPureRace } from "../interface/IPureRace";
import { Namekian } from "./Namekian";

export class NamekianAdapter implements IPureRace {
  constructor(private namekian: Namekian) {}

  public genki(): number {
    return this.namekian.getPower();
  }
}
