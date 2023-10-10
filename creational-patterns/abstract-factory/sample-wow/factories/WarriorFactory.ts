import { BodyArmor } from "../class/BodyArmor";
import { Sword } from "../class/Sword";
import { AbstractFactory } from "../interface/AbstractFactory";
import { Armor } from "../interface/Armor";
import { Weapon } from "../interface/Weapon";

export class WarriorFactory implements AbstractFactory {
  public createWeapon(): Weapon {
    return new Sword();
  }

  public createArmor(): Armor {
    return new BodyArmor();
  }
}
