import { Cloak } from "../class/Cloak";
import { MageFireball } from "../class/MageFireball";
import { AbstractFactory } from "../interface/AbstractFactory";
import { Armor } from "../interface/Armor";
import { Weapon } from "../interface/Weapon";

export class MageFactory implements AbstractFactory {
  public createWeapon(): Weapon {
    return new MageFireball();
  }

  public createArmor(): Armor {
    return new Cloak();
  }
}
