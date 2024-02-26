import { Namekian } from "../model/Namekian";
import { Saiyan } from "../model/Saiyan";
import { Human } from "../model/Human";
import { SaiyanAdapter } from "../model/SaiyanAdapter";
import { NamekianAdapter } from "../model/NamekianAdapter";
import { HumanAdapter } from "../model/HumanAdapter";
import { IPureRace } from "../interface/IPureRace";

export class DragonBallFacade {
  genki(): number {
    const gohan = new SaiyanAdapter(new Saiyan());
    const vegeta = new SaiyanAdapter(new Saiyan());
    const piccolo = new NamekianAdapter(new Namekian());
    const krilin = new HumanAdapter(new Human());

    const everybody = [gohan, vegeta, piccolo, krilin];

    return everybody.reduce((power: number, pureRace: IPureRace) => power + pureRace.genki(), 0);
  }
}
