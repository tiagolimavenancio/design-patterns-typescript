import { Armor } from "./Armor";
import { Weapon } from "./Weapon";

export interface AbstractFactory {
  createWeapon(): Weapon;
  createArmor(): Armor;
}
