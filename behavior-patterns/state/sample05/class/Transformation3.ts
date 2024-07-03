import { State } from "./State";
import { Transformation2 } from "./Transformation2";
import { Transformation4 } from "./Transformation4";

export class Transformation3 extends State {
  power: number = 212000;
  energy: number = 15;

  public attack(): void {
    const attackToEnemy = Math.round(this.power * (Math.random() / 6));
    const restoreEnergy = Math.round(Math.random() * 3);

    this.energy = this.energy + restoreEnergy;

    console.log("Freeza attack in the state form 3 -->", attackToEnemy);
    console.log(`Freese restore energy ${restoreEnergy} and his energy is ${this.energy}\n`);
  }

  public defend(attack: number): void {
    const attackFromEnemy = Math.round(attack * (Math.random() / 5));
    this.energy = this.energy - attackFromEnemy;

    console.log("Freeza defend in form 3");
    console.log(
      `Freeza received an attack of ${attackFromEnemy} and his energy is ${this.energy}\n`
    );

    if (this.energy < 5) {
      this.freeza.transitionTo(new Transformation4());
    }

    if (this.energy > 25) {
      this.freeza.transitionTo(new Transformation2());
    }
  }
}
