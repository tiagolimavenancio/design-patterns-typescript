import { OrcArmor } from "../class/OrcArmor";
import { AbstractFactory } from "../interface/AbstractFactory";
import { Armor } from "../interface/Armor";
import { Weapon } from "../interface/Weapon";
import { Axe } from "../class/Axe";

export class OrcFactory implements AbstractFactory {
  public createWeapon(): Weapon {
    return new Axe();
  }

  public createArmor(): Armor {
    return new OrcArmor();
  }
}
