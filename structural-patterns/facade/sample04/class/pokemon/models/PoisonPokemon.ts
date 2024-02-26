import { Pokemon } from "./Pokemon";

export class PoisonPokemon extends Pokemon {
  constructor(_pokemon: Pokemon) {
    super(_pokemon);
  }

  calculateImpact(multipliers: number) {
    return Math.floor((this.attack / this.defense) * multipliers) + 1;
  }
}
