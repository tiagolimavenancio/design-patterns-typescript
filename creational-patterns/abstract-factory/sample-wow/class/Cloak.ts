import { Armor } from "../interface/Armor";
import { Weapon } from "../interface/Weapon";

export class Cloak implements Armor {
  public usefulFunction(): string {
    return "The result of the Cloak";
  }

  public usefulFunctionWithWeapon(collaborator: Weapon): string {
    const result = collaborator.usefulFunction();
    return `The result of the Cloak collaborating with the (${result})`;
  }
}
