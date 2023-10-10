import { Weapon } from "./Weapon";

export interface Armor {
  usefulFunction(): string;
  usefulFunctionWithWeapon(collaborator: Weapon): string;
}
