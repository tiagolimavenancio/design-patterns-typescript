import { FightingPokemon } from "./class/FightingPokemon";
import { GroundPokemon } from "./class/GroundPokemon";
import { PoisonPokemon } from "./class/PoisonPokemon";

(function main() {
  const passimian = new FightingPokemon({
    name: "Passimian",
    attack: 10,
    power: 10,
    defense: 10,
  });
  passimian.toString();
  passimian.calculateDamage();

  const poipole = new PoisonPokemon({
    name: "Poipole",
    attack: 30,
    power: 20,
    defense: 15,
  });
  poipole.toString();
  poipole.calculateDamage();

  const mudsdale = new GroundPokemon({
    name: "Mudsdale",
    attack: 20,
    power: 5,
    defense: 40,
  });
  mudsdale.toString();
  mudsdale.calculateDamage();
})();
