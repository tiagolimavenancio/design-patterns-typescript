import { Armor } from "../interface/Armor";
import { Weapon } from "../interface/Weapon";

export class OrcArmor implements Armor {
  public usefulFunction(): string {
    return "The result of the OrcArmor";
  }

  public usefulFunctionWithWeapon(collaborator: Weapon): string {
    const result = collaborator.usefulFunction();
    return `The result of the OrcAmor collaborating with the (${result})`;
  }
}
