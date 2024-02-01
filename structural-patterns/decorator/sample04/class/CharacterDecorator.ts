import { ICharacter } from "../interface/ICharacter";

export class CharacterDecorator implements ICharacter {
  protected character: ICharacter;

  constructor(character: ICharacter) {
    this.character = character;
  }

  getName(): string {
    return this.character.getName();
  }

  attack(): number {
    return this.character.attack();
  }

  defend(): number {
    return this.character.defend();
  }

  isAlive(): boolean {
    return this.character.isAlive();
  }

  setLife(life: number): void {
    this.character.setLife(life);
  }

  getLife(): number {
    return this.character.getLife();
  }

  receiveHit(attack: number) {
    this.character.receiveHit(attack);
  }

  toString(): string {
    return `${this.character.getName()} - ${this.character.getLife()}`;
  }
}
