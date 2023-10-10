import { Director } from "./class/Director";
import { HumanHeroBuilder } from "./class/HumanHeroBuilder";
import { OrcHeroBuilder } from "./class/OrcHeroBuilder";

function main(director: Director) {
  const humanBuilder = new HumanHeroBuilder();
  const orcBuilder = new OrcHeroBuilder();

  const humanHero = director.createHero(humanBuilder);
  const humanHeroWithArmor = director.createHeroWithArmor(humanBuilder);
  const humanHeroBasic = director.createHeroBasic(humanBuilder);

  console.log("Human Hero: ", humanHero);
  console.log("Human Hero with Armor: ", humanHeroWithArmor);
  console.log("Human Hero Basic: ", humanHeroBasic);

  const orcHero = director.createHero(orcBuilder);
  const orcHeroWithArmor = director.createHeroWithArmor(orcBuilder);
  const orcHeroBasic = director.createHeroBasic(orcBuilder);

  console.log("Orc Hero: ", orcHero);
  console.log("Orc Hero with Armor: ", orcHeroWithArmor);
  console.log("Orc Hero Basic: ", orcHeroBasic);
}

const director = new Director();
main(director);
