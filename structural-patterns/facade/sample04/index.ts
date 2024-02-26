import { DragonBallFacade } from "./class/dragonball/class/DragonBallFacade";
import { PokemonFacade } from "./class/pokemon/class/PokemonFacade";

(function main() {
  console.log("DragonBall...\n");
  const dragonBallFacade = new DragonBallFacade();
  const genki = dragonBallFacade.genki();

  console.log("everybody attack: " + genki);

  console.log("\nPokemon...\n");
  const pokemonFacade = new PokemonFacade();
  pokemonFacade.calculateDamage("passimian");
  pokemonFacade.calculateDamage("poipole");
  pokemonFacade.calculateDamage("mudsdale");
})();
