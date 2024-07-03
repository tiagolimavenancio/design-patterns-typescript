import { State } from "./State";
import { Transformation4 } from "./Transformation4";

export class GoldenFreeza extends State {
  power = 812000;
  energy = 30;

  public attack() {
    const powerAttack = Math.round(this.power * (Math.random() / 4));
    const restoreEnergy = Math.round(Math.random() * 5);
    this.energy = this.energy + restoreEnergy;

    console.log("Freeza attack in the state Golden Freeza -->", powerAttack);
    console.log(`Freese restore energy ${restoreEnergy} and his energy is ${this.energy}\n`);
  }

  public defend(attack: number) {
    const attackFromEnemy = Math.round(attack * (Math.random() / 5));
    this.energy = this.energy - attackFromEnemy;

    console.log("Freeza defend in Golden Freeza");
    console.log(
      `Freeza received an attack of ${attackFromEnemy} and his energy is ${this.energy}\n`
    );

    if (this.energy > 50) {
      this.freeza.transitionTo(new Transformation4());
    }
  }
}
