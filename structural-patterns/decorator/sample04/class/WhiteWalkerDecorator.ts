import { ICharacter } from "../interface/ICharacter";
import { CharacterDecorator } from "./CharacterDecorator";

export class WhiteWalkerDecorator extends CharacterDecorator {
  protected power = Math.random();

  constructor(character: ICharacter) {
    super(character);
  }

  private whiteWalkerModifier(): number {
    return Math.random() * this.power + this.power;
  }

  setPower(power: number) {
    this.power = power;
  }

  attack(): number {
    return this.whiteWalkerModifier() + super.attack();
  }

  defend(): number {
    return this.whiteWalkerModifier() + super.defend();
  }
}
