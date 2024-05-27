import { Caretaker } from "./class/Caretaker";
import { GameCharacter } from "./class/GameCharacter";

(function main() {
  const character = new GameCharacter();
  const caretaker = new Caretaker(character);

  character.registerKill();
  character.moveForward(1);
  character.addInventory("sword");
  character.registerKill();
  character.addInventory("rifle");
  character.moveForward(1);
  console.log(character.status());

  caretaker.save();

  character.registerKill();
  character.moveForward(1);
  character.progressToNextLevel();
  character.registerKill();
  character.addInventory("motorbike");
  character.moveForward(10);
  character.registerKill();
  console.log(character.status());

  caretaker.save();

  character.moveForward(1);
  character.progressToNextLevel();
  character.registerKill();
  console.log(character.status());

  caretaker.restore(0);
  console.log(character.status());

  //continue
})();
