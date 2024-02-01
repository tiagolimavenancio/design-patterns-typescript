import { ICharacter } from "../interface/ICharacter";
import { WhiteWalkerDecorator } from "./WhiteWalkerDecorator";

export class LordDecorator extends WhiteWalkerDecorator {
  constructor(character: ICharacter) {
    super(character);
    this.power = 3;
    character.setLife(1000);
  }
}
