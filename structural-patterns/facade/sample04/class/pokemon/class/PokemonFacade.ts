import { FightingPokemon } from "../models/FightingPokemon";
import { GroundPokemon } from "../models/GroundPokemon";
import { PoisonPokemon } from "../models/PoisonPokemon";
import { Pokemon } from "../models/Pokemon";

interface PokemonFactory {
  passimian: FightingPokemon;
  poipole: PoisonPokemon;
  mudsdale: GroundPokemon;
  [key: string]: Pokemon;
}

export class PokemonFacade {
  pokemonFactory: PokemonFactory;

  constructor() {
    this.pokemonFactory = {
      passimian: new FightingPokemon({
        name: "Passimian",
        attack: 10,
        power: 10,
        defense: 10,
      } as Pokemon),
      poipole: new PoisonPokemon({
        name: "Poipole",
        attack: 10,
        power: 10,
        defense: 10,
      } as Pokemon),
      mudsdale: new GroundPokemon({
        name: "Mudsdale",
        attack: 10,
        power: 10,
        defense: 10,
      } as Pokemon),
    };
  }

  calculateDamage(typePokemon: string) {
    if (this.pokemonFactory[typePokemon]) {
      throw new Error("Invalid Pokemon type: " + typePokemon);
    }

    return this.pokemonFactory[typePokemon].calculateDamage();
  }
}
