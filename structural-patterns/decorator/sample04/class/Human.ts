import { ICharacter } from "../interface/ICharacter";

export class Human implements ICharacter {
  private name: string;
  private life: number;

  constructor(name: string) {
    this.name = name;
    this.life = 100;
  }

  getName(): string {
    return this.name;
  }

  attack(): number {
    return 1;
  }

  defend(): number {
    return 1;
  }

  isAlive(): boolean {
    return this.life > 0;
  }

  setLife(life: number): void {
    this.life = life;
  }

  getLife(): number {
    return this.life;
  }

  receiveHit(attack: number): void {
    const damage = attack * Math.random() - this.defend() * Math.random();

    if (damage <= 0) {
      return;
    }

    this.life = this.life < damage ? 0 : this.life - damage;
  }

  toString(): string {
    return `Human: ${this.name}`;
  }
}
