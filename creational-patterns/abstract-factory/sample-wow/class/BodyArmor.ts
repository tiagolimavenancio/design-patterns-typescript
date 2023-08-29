import { Armor } from "../interface/Armor";
import { Weapon } from "../interface/Weapon";

export class BodyArmor implements Armor {
  public usefulFunction(): string {
    return "The result of the BodyArmor";
  }

  public usefulFunctionWithWeapon(collaborator: Weapon): string {
    const result = collaborator.usefulFunction();
    return `The result of the BodyArmor collaborating with the (${result})`;
  }
}
