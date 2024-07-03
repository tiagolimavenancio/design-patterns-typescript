import { Mario } from "./model/Mario";

(function main() {
  const mario = new Mario();

  mario.getMushroom();
  mario.getFeather();
  mario.takeDamage();

  mario.getFlower();
  mario.getFlower();
  mario.takeDamage();
  mario.takeDamage();

  mario.getFeather();
  mario.takeDamage();
  mario.takeDamage();
  mario.takeDamage();
})();
