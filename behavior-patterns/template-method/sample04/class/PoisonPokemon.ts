import { Pokemon, PokemonType } from "./Pokemon";

export class PoisonPokemon extends Pokemon {
  constructor(pokemon: PokemonType) {
    super(pokemon);
  }

  calculateImpact(multipliers: number): number {
    return Math.floor((this.attack / this.defense) * multipliers) + 1;
  }
}
