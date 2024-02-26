import { Pokemon } from "./Pokemon";

export class GroundPokemon extends Pokemon {
  constructor(_pokemon: Pokemon) {
    super(_pokemon);
  }

  calculateImpact(multipliers: number) {
    return Math.floor((this.attack / this.defense) * multipliers) + 1;
  }
}
