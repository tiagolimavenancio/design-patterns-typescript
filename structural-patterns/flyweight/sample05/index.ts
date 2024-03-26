import { FlyweightMonsterFactory } from "./class/FlyweightMonsterFactory";
import { IMonster } from "./interface/IMonster";

(function main() {
  const monsterFactory = new FlyweightMonsterFactory();
  const monsters: IMonster[] = [];

  for (let i = 0; i < 10; i++) {
    const type = i % 2 === 0 ? "Goblin" : "Dragon";
    const monster = monsterFactory.getMonster(type);

    monsters.push(monster);
    monster.render(i, Math.random() * 10);
  }
})();
