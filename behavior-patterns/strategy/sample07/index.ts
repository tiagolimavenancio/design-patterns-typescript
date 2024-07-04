import { Crawling } from "./class/Crawling";
import { Sprinting } from "./class/Sprinting";
import { Walking } from "./class/Walking";
import { GameCharacter } from "./model/GameCharacter";

(function main() {
  const character = new GameCharacter();
  character.move(new Walking());
  character.move(new Crawling());
  character.move(new Sprinting());
})();
